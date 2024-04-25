import 'dart:ui';

import 'package:flutter_test/flutter_test.dart';
import 'package:google_mediapipe_face_detection/google_mediapipe_face_detection.dart';
import 'package:google_mediapipe_face_detection_platform_interface/google_mediapipe_face_detection_platform_interface.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

class MockGoogleMediapipeFaceDetectionPlatform
    with MockPlatformInterfaceMixin
    implements GoogleMediapipeFaceDetectionPlatform {
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

  test('$GoogleMediapipeFaceDetection is the default instance', () {
    expect(initialPlatform, isInstanceOf<GoogleMediapipeFaceDetection>());
  });
}
