@JS()
library google_media_pipe_face_detector_wrapper;

import 'dart:html' as html;
import 'dart:js_interop' as js_interop;

import 'package:js/js.dart';

@JS()
@staticInterop
class GoogleMediaPipeFaceDetectorWrapper {
  external factory GoogleMediaPipeFaceDetectorWrapper();
}

extension GoogleMediaPipeFaceDetectorWrapperExtension
    on GoogleMediaPipeFaceDetectorWrapper {
  external js_interop.JSObject load();
  external bool showSomething();
  external js_interop.JSObject preprocess(String imagePath);
  external List? detect(html.ImageBitmap image);
  external bool close();
}
