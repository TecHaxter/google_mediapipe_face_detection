import 'package:flutter_test/flutter_test.dart';
import 'package:google_mediapipe_face_detection_android/google_mediapipe_face_detection_android.dart';
import 'package:google_mediapipe_face_detection_android/google_mediapipe_face_detection_android_platform_interface.dart';
import 'package:google_mediapipe_face_detection_android/google_mediapipe_face_detection_android_method_channel.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class MockGoogleMediapipeFaceDetectionAndroidPlatform
    with MockPlatformInterfaceMixin
    implements GoogleMediapipeFaceDetectionAndroidPlatform {

  @override
  Future<String?> getPlatformVersion() => Future.value('42');
}

void main() {
  final GoogleMediapipeFaceDetectionAndroidPlatform initialPlatform = GoogleMediapipeFaceDetectionAndroidPlatform.instance;

  test('$MethodChannelGoogleMediapipeFaceDetectionAndroid is the default instance', () {
    expect(initialPlatform, isInstanceOf<MethodChannelGoogleMediapipeFaceDetectionAndroid>());
  });

  test('getPlatformVersion', () async {
    GoogleMediapipeFaceDetectionAndroid googleMediapipeFaceDetectionAndroidPlugin = GoogleMediapipeFaceDetectionAndroid();
    MockGoogleMediapipeFaceDetectionAndroidPlatform fakePlatform = MockGoogleMediapipeFaceDetectionAndroidPlatform();
    GoogleMediapipeFaceDetectionAndroidPlatform.instance = fakePlatform;

    expect(await googleMediapipeFaceDetectionAndroidPlugin.getPlatformVersion(), '42');
  });
}
