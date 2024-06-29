import 'package:plugin_platform_interface/plugin_platform_interface.dart';

import 'google_mediapipe_face_detection_android_method_channel.dart';

abstract class GoogleMediapipeFaceDetectionAndroidPlatform extends PlatformInterface {
  /// Constructs a GoogleMediapipeFaceDetectionAndroidPlatform.
  GoogleMediapipeFaceDetectionAndroidPlatform() : super(token: _token);

  static final Object _token = Object();

  static GoogleMediapipeFaceDetectionAndroidPlatform _instance = MethodChannelGoogleMediapipeFaceDetectionAndroid();

  /// The default instance of [GoogleMediapipeFaceDetectionAndroidPlatform] to use.
  ///
  /// Defaults to [MethodChannelGoogleMediapipeFaceDetectionAndroid].
  static GoogleMediapipeFaceDetectionAndroidPlatform get instance => _instance;

  /// Platform-specific implementations should set this with their own
  /// platform-specific class that extends [GoogleMediapipeFaceDetectionAndroidPlatform] when
  /// they register themselves.
  static set instance(GoogleMediapipeFaceDetectionAndroidPlatform instance) {
    PlatformInterface.verifyToken(instance, _token);
    _instance = instance;
  }

  Future<String?> getPlatformVersion() {
    throw UnimplementedError('platformVersion() has not been implemented.');
  }
}
