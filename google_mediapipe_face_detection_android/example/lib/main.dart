import 'package:flutter/material.dart';
import 'package:google_mediapipe_face_detection_android/google_mediapipe_face_detection_android.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final _googleMediapipeFaceDetectionAndroidPlugin =
      GoogleMediapipeFaceDetectionAndroid();

  @override
  void initState() {
    super.initState();
    _googleMediapipeFaceDetectionAndroidPlugin.load();
  }

  @override
  void dispose() {
    _googleMediapipeFaceDetectionAndroidPlugin.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Plugin Example App'),
        ),
        body: const Center(
          child: Text('Ready for Face Detction'),
        ),
      ),
    );
  }
}
