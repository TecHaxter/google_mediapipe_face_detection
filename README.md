# google_mediapipe_face_detection

A flutter plugin that implements Google's MediaPipe Face Detection.

## Getting Started

This project is a starting point for a Flutter
[Google's MediaPipe Face Detection](https://developers.google.com/mediapipe) library,
a specialized library that includes platform-specific implementation code for Web.

For help getting started with, Check the example project.

Full API reference will be available very shortly. Ask the
[Author](mailto:mr.khushalrao@gmail.com) if need any help.

## Installation

```bash
flutter pub add google_mediapipe_face_detection
```

## Usage

```python
import 'package:google_mediapipe_face_detection/google_mediapipe_face_detection.dart';

GoogleMediapipeFaceDetection? faceDetection;

void initializeModel() async {
  faceDetection = GoogleMediapipeFaceDetection()
  await faceDetection?.load();
}

void detectFaces() async {
  final capturedImage = await cameraController?.takePicture();
  if (capturedImage == null) {
    throw 'Empty Camera Image';
  }
  InputImage inputImage =
  InputImage.fromFilePath(capturedImage.path);
  final res = await faceDetection?.processImage(inputImage);
  print(res);
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
