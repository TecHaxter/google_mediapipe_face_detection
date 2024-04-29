import 'dart:ui' as ui;
import 'package:google_mediapipe_face_detection_platform_interface/src/method_channel/method_channel_google_mediapipe_face_detection.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

abstract class GoogleMediapipeFaceDetectionPlatform extends PlatformInterface {
  /// Constructs a GoogleMediapipeFaceDetectionPlatform.
  GoogleMediapipeFaceDetectionPlatform() : super(token: _token);

  static final Object _token = Object();

  static GoogleMediapipeFaceDetectionPlatform _instance =
      MethodChannelGoogleMediapipeFaceDetection();

  /// The default instance of [GoogleMediapipeFaceDetectionPlatform] to use.
  ///
  /// Defaults to [MethodChannelGoogleMediaPipeFaceDetection].
  static GoogleMediapipeFaceDetectionPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [GoogleMediapipeFaceDetectionPlatform] when
  /// they register themselves.
  static set instance(GoogleMediapipeFaceDetectionPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
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
