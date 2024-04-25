import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:google_mediapipe_face_detection/google_mediapipe_face_detection.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    initCamera();
  }

  List<CameraDescription>? cameras;
  CameraController? cameraController;
  GoogleMediapipeFaceDetection? faceDetection;

  Future<void> initCamera() async {
    try {
      faceDetection = GoogleMediapipeFaceDetection();
      await faceDetection?.load();
      cameras = await availableCameras();
      if (cameras?.isEmpty ?? true) {
        throw 'Camera Empty';
      }
      cameraController = CameraController(
        cameras![0],
        ResolutionPreset.medium,
      );
      await cameraController?.initialize();
      setState(() {});
    } catch (e) {
      debugPrint(e.toString());
    }
  }

  InputImage? cameraImageToInputImage(CameraImage image) {
    try {
      final WriteBuffer allBytes = WriteBuffer();
      for (final Plane plane in image.planes) {
        allBytes.putUint8List(plane.bytes);
      }
      final bytes = allBytes.done().buffer.asUint8List();

      InputImage inputImage = InputImage.fromBytes(
        bytes: bytes,
        metadata: InputImageMetadata(
          size: Size(image.width.toDouble(), image.height.toDouble()),
          rotation: InputImageRotation.rotation0deg,
          format: InputImageFormatValue.fromRawValue(image.format.raw) ??
              InputImageFormat.yuv_420_888,
          bytesPerRow: bytes.buffer.lengthInBytes,
        ),
      );
      return inputImage;
    } catch (e) {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Face Detection example app'),
        ),
        body: Center(
          child: (cameraController != null &&
                  (cameraController?.value.isInitialized ?? false))
              ? CameraPreview(
                  cameraController!,
                )
              : const Text('Loading Camera...'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () async {
            try {
              final capturedImage = await cameraController?.takePicture();
              if (capturedImage == null) {
                throw 'Empty Camera Image';
              }
              InputImage inputImage =
                  InputImage.fromFilePath(capturedImage.path);
              final res = await faceDetection?.processImage(inputImage);
              debugPrint(res.toString());
            } catch (e) {
              debugPrint(e.toString());
              return;
            }
          },
          child: const Icon(Icons.face),
        ),
      ),
    );
  }
}
