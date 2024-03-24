import 'dart:ui';

import 'package:flutter_test/flutter_test.dart';
import 'package:google_mediapipe_face_detection/google_mediapipe_face_detection.dart';
import 'package:google_mediapipe_face_detection/multi-platform/web/google_mediapipe_face_detection_web.dart' as multiplatform
    if (dart.library.io) 'package:google_mediapipe_face_detection/multi-platform/method-channel/google_mediapipe_face_detection_method_channel.dart';
import 'package:google_mediapipe_face_detection/platform-interface/google_mediapipe_face_detection_platform_interface.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class MockGoogleMediapipeFaceDetectionPlatform
    with MockPlatformInterfaceMixin
    implements GoogleMediapipeFaceDetectionPlatform {
  @override
  Future<String?> getPlatformVersion() => Future.value('42');

  @override
  Future<void> close() {
    // TODO: implement close
    throw UnimplementedError();
  }

  @override
  Future<void> load() {
    // TODO: implement load
    throw UnimplementedError();
  }

  @override
  Future<List<Rect>> processImage(InputImage inputImage) {
    // TODO: implement processImage
    throw UnimplementedError();
  }
}

void main() {
  final GoogleMediapipeFaceDetectionPlatform initialPlatform =
      GoogleMediapipeFaceDetectionPlatform.instance;

  test('${multiplatform.GoogleMediaPipeFaceDetectionMultiPlatform} is the default instance',
      () {
    expect(initialPlatform,
        isInstanceOf<multiplatform.GoogleMediaPipeFaceDetectionMultiPlatform>());
  });

  test('getPlatformVersion', () async {
    GoogleMediapipeFaceDetection googleMediapipeFaceDetectionPlugin =
        GoogleMediapipeFaceDetection();
    MockGoogleMediapipeFaceDetectionPlatform fakePlatform =
        MockGoogleMediapipeFaceDetectionPlatform();
    GoogleMediapipeFaceDetectionPlatform.instance = fakePlatform;

    expect(await googleMediapipeFaceDetectionPlugin.getPlatformVersion(), '42');
  });
}
