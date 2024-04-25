// In order to *not* need this ignore, consider extracting the "web" version
// of your plugin as a separate package, instead of inlining it in the same
// package as the core of your plugin.
// ignore: avoid_web_libraries_in_flutter
import 'dart:async';
import 'dart:html' as html;
import 'dart:js_util';
// show window, ImageData, Blob, FileReader, ImageBitmap, HttpRequest;
import 'dart:ui' as ui;
import 'package:flutter/foundation.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:google_mediapipe_face_detection_platform_interface/google_mediapipe_face_detection_platform_interface.dart';
import 'package:google_mediapipe_face_detection_web/src/js_interop/fddf.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';

/// A web implementation of the GoogleMediapipeFaceDetectionPlatform of the GoogleMediapipeFaceDetection plugin.
class GoogleMediapipeFaceDetectionWeb
    extends GoogleMediapipeFaceDetectionPlatform {
  /// Constructs a GoogleMediapipeFaceDetectionWeb
  GoogleMediapipeFaceDetectionWeb();

  static void registerWith(Registrar registrar) {
    GoogleMediapipeFaceDetectionPlatform.instance =
        GoogleMediapipeFaceDetectionWeb();
  }

  GoogleMediaPipeFaceDetectorWrapper? _wrapper;

  @override
  Future<void> load() async {
    final Completer<void> completer = Completer<void>();
    final existingScript =
        html.document.querySelector('#face_detection_wrapper_js');
    if (existingScript == null) {
      final script = html.ScriptElement()
        ..id = "face_detection_wrapper_js"
        ..src =
            'https://cdn.jsdelivr.net/gh/TecHaxter/google_mediapipe_face_detection_wrapper@main/build/dist/index.js' // ignore: unsafe_html
        ..type = 'application/javascript'
        ..defer = true
        ..onLoad.listen((_) {
          completer.complete();
        })
        ..onError.listen((error) {
          completer.completeError(error);
        });
      html.document.body!.append(script);
    } else {
      completer.complete();
    }
    await completer.future; // Wait for the script to load.
    _wrapper = GoogleMediaPipeFaceDetectorWrapper();
    await promiseToFuture(_wrapper!.load());
  }

  @override
  Future<List<ui.Rect>> processImage(InputImage inputImage) async {
    if (inputImage.filePath?.isEmpty ?? true) {
      throw 'InputImage not initialized fromFilePath()';
    }
    if (_wrapper == null) {
      throw 'Wrapper object is null';
    }
    final bitmap = await promiseToFuture<html.ImageBitmap?>(
      _wrapper!.preprocess(inputImage.filePath!),
    );
    if (bitmap == null) {
      throw 'Could not preprocess the image';
    }
    final List<Map<String, dynamic>>? faces = _wrapper!
        .detect(bitmap)
        ?.map((e) {
          return Map<String, double>.from(dartify(e) as Map);
        })
        .toList()
        .cast();
    if (faces?.isEmpty ?? true) {
      debugPrint("No face detected");
      return [];
    }
    final rects = (faces!
            .map(
              (e) => rectFromJson(e),
            )
            .toList()
          ..removeWhere((element) => element == null))
        .cast<ui.Rect>();
    debugPrint("$rects");
    return rects;
  }

  @override
  Future<void> close() async {
    _wrapper?.close();
  }
}
