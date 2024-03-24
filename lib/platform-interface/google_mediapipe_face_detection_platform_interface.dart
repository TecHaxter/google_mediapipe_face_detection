import 'package:google_mediapipe_face_detection/multi-platform/web/google_mediapipe_face_detection_web.dart' as multiplatform
    if (dart.library.io) 'package:google_mediapipe_face_detection/multi-platform/method-channel/google_mediapipe_face_detection_method_channel.dart';

import 'package:google_mlkit_commons/google_mlkit_commons.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';
import 'dart:ui' as ui;

abstract class GoogleMediapipeFaceDetectionPlatform extends PlatformInterface {
  /// Constructs a GoogleMediapipeFaceDetectionPlatform.
  GoogleMediapipeFaceDetectionPlatform() : super(token: _token);

  static final Object _token = Object();

  static GoogleMediapipeFaceDetectionPlatform _instance =
      multiplatform.GoogleMediaPipeFaceDetectionMultiPlatform();

  /// The default instance of [GoogleMediapipeFaceDetectionPlatform] to use.
  ///
  /// Defaults to [MethodChannelGoogleMediapipeFaceDetection].
  static GoogleMediapipeFaceDetectionPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [GoogleMediapipeFaceDetectionPlatform] when
  /// they register themselves.
  static set instance(GoogleMediapipeFaceDetectionPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<String?> getPlatformVersion() {
    throw UnimplementedError('platformVersion() has not been implemented.');
  }

  Future<void> load() {
    throw UnimplementedError('load() has not been implemented.');
  }

  Future<List<ui.Rect>> processImage(InputImage inputImage) {
    throw UnimplementedError(
        'processImage(InputImage inputImage) has not been implemented.');
  }

  Future<void> close() {
    throw UnimplementedError('close() has not been implemented.');
  }
}
