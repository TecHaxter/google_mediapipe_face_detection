
import 'google_mediapipe_face_detection_android_platform_interface.dart';

class GoogleMediapipeFaceDetectionAndroid {
  Future<String?> getPlatformVersion() {
    return GoogleMediapipeFaceDetectionAndroidPlatform.instance.getPlatformVersion();
  }
}
