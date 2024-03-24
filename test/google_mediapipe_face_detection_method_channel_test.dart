import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:google_mediapipe_face_detection/multi-platform/web/google_mediapipe_face_detection_web.dart' as multiplatform
    if (dart.library.io) 'package:google_mediapipe_face_detection/multi-platform/method-channel/google_mediapipe_face_detection_method_channel.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  multiplatform.GoogleMediaPipeFaceDetectionMultiPlatform platform =
      multiplatform.GoogleMediaPipeFaceDetectionMultiPlatform();
  const MethodChannel channel =
      MethodChannel('google_mediapipe_face_detection');

  setUp(() {
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(
      channel,
      (MethodCall methodCall) async {
        return '42';
      },
    );
  });

  tearDown(() {
    TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger
        .setMockMethodCallHandler(channel, null);
  });

  test('getPlatformVersion', () async {
    expect(await platform.getPlatformVersion(), '42');
  });
}
