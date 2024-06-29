import 'dart:ui' as ui;
import 'package:flutter/services.dart';
import 'package:google_mediapipe_face_detection_platform_interface/google_mediapipe_face_detection_platform_interface.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';

const MethodChannel _channel = MethodChannel('google_mediapipe_face_detection');

class MethodChannelGoogleMediapipeFaceDetection
    extends GoogleMediapipeFaceDetectionPlatform {
  @override
  Future<void> load() {
    return _channel
        .invokeMethod<bool>(
          'load',
        )
        .then(
          (bool? value) => value ?? false,
        );
  }

  @override
  Future<List<ui.Rect>> processImage(InputImage inputImage) {
    return _channel
        .invokeListMethod<Map<String, dynamic>?>(
          'processImage',
          inputImage.toJson(),
        )
        .then(
          (List<Map<String, dynamic>?>? value) =>
              (value?.map((e) => rectFromJson(e)).toList()
                    ?..removeWhere((e) => e == null))
                  ?.cast<ui.Rect>() ??
              [],
        );
  }

  @override
  Future<void> close() {
    return _channel
        .invokeMethod<bool>(
          'close',
        )
        .then(
          (bool? value) => value ?? false,
        );
  }
}
