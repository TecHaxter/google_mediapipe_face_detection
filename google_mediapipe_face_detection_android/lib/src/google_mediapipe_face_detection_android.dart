import 'dart:developer';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:google_mediapipe_face_detection_platform_interface/google_mediapipe_face_detection_platform_interface.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';

/// An implementation of [GoogleMediapipeFaceDetectionAndroidPlatform] that uses method channels.
class GoogleMediapipeFaceDetectionAndroid
    extends GoogleMediapipeFaceDetectionPlatform {
  /// The method channel used to interact with the native platform.
  @visibleForTesting
  final methodChannel =
      const MethodChannel('google_mediapipe_face_detection_android');

  static void registerWith() {
    GoogleMediapipeFaceDetectionPlatform.instance =
        GoogleMediapipeFaceDetectionAndroid();
  }

  @override
  Future<void> load() async {
    final isLoaded = await methodChannel.invokeMethod<bool>('load');
    log(isLoaded.toString());
  }

  @override
  Future<List<ui.Rect>> processImage(InputImage inputImage) async {
    final result = await methodChannel.invokeListMethod<Map<Object?, Object?>>(
      'processImage',
      inputImage.toJson(),
    );
    List<ui.Rect> faces = ((result
                ?.map(
                  (e) => rectFromJson(
                    Map<String, dynamic>.from(e),
                  ),
                )
                .toList())
              ?..removeWhere((element) => element == null))
            ?.cast() ??
        [];
    return faces;
  }

  @override
  Future<void> close() async {
    final isClosed = await methodChannel.invokeMethod<bool>('close');
    log(isClosed.toString());
  }
}
