import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'google_mediapipe_face_detection_android_platform_interface.dart';

/// An implementation of [GoogleMediapipeFaceDetectionAndroidPlatform] that uses method channels.
class MethodChannelGoogleMediapipeFaceDetectionAndroid extends GoogleMediapipeFaceDetectionAndroidPlatform {
  /// The method channel used to interact with the native platform.
  @visibleForTesting
  final methodChannel = const MethodChannel('google_mediapipe_face_detection_android');

  @override
  Future<String?> getPlatformVersion() async {
    final version = await methodChannel.invokeMethod<String>('getPlatformVersion');
    return version;
  }
}
