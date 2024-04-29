# google_mediapipe_face_detection_platform_interface

A common platform interface for the [`google_mediapipe_face_detection`][1] plugin.

This interface allows platform-specific implementations of the `google_mediapipe_face_detection`
plugin, as well as the plugin itself, to ensure they are supporting the
same interface.

# Usage

To implement a new platform-specific implementation of `google_mediapipe_face_detection`, extend
[`GoogleMediapipeFaceDetectionPlatform`][2] with an implementation that performs the
platform-specific behavior, and when you register your plugin, set the default
`GoogleMediapipeFaceDetectionPlatformPlatform` by calling
`GoogleMediapipeFaceDetectionPlatformPlatform.instance = MyPlatformGoogleMediapipeFaceDetection()`.
