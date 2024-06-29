package com.example.google_mediapipe_face_detection_android

import android.content.Context
import android.net.Uri
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.facedetector.FaceDetector
import com.google.mediapipe.tasks.vision.facedetector.FaceDetectorResult

import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.MethodChannel.MethodCallHandler
import io.flutter.plugin.common.MethodChannel.Result

/** GoogleMediapipeFaceDetectionAndroidPlugin */
class GoogleMediapipeFaceDetectionAndroidPlugin: FlutterPlugin, MethodCallHandler {
  /// The MethodChannel that will the communication between Flutter and native Android
  ///
  /// This local reference serves to register the plugin with the Flutter Engine and unregister it
  /// when the Flutter Engine is detached from the Activity
  private lateinit var channel : MethodChannel
  private lateinit var faceDetector: FaceDetector

  private val modelName = "blaze_face_short_range.tflite"

  private lateinit var context: Context

  override fun onAttachedToEngine(flutterPluginBinding: FlutterPlugin.FlutterPluginBinding) {
    channel = MethodChannel(flutterPluginBinding.binaryMessenger, "google_mediapipe_face_detection_android")
    channel.setMethodCallHandler(this)
    context = flutterPluginBinding.applicationContext
  }

  override fun onMethodCall(call: MethodCall, result: Result) {
    when (call.method) {
        "getPlatformVersion" -> {
          result.success("Android ${android.os.Build.VERSION.RELEASE}")
        }
        "processImage" -> {
          try {
            val inputImageMap = call.argument<Map<String, Any>>("input_image") ?: throw Exception("No input image given")
            // Convert the input Bitmap object to an MPImage object to run inference
            val mpImage: MPImage = BitmapImageBuilder(context, Uri.parse(inputImageMap["path"] as String)).build()
            // Detect faces from MPImage
            val faceDetectorResult: FaceDetectorResult = faceDetector.detect(mpImage)
            // Convert detected faces to list of
            val faces: List<Map<String, Float>> =  faceDetectorResult.detections().map {
              mapOf<String, Float>(
                "left" to it.boundingBox().left,
                "top" to it.boundingBox().top,
                "right" to it.boundingBox().right,
                "bottom" to it.boundingBox().bottom,
              )
            }
            result.success(faces)
          } catch (e: Exception) {
            result.success(arrayOf<Map<String, Float>>())
          }
        }
        "close" -> {
          try {
            faceDetector.close()
            result.success(true)
          } catch (e: Exception) {
            result.success(false)
          }
        }
        "load" -> {
          try {
            val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(modelName)
            val baseOptions = baseOptionsBuilder.build()

            val optionsBuilder =
              FaceDetector.FaceDetectorOptions.builder()
                .setBaseOptions(baseOptions)
                .setMinDetectionConfidence(Float.MIN_VALUE)
                .setRunningMode(RunningMode.IMAGE)

            val options = optionsBuilder.build()

            faceDetector =
              FaceDetector.createFromOptions(context, options)
            result.success(true)
          } catch (e: Exception) {
            result.success(false)
          }
        }
        else -> {
          result.notImplemented()
        }
    }
  }

  override fun onDetachedFromEngine(binding: FlutterPlugin.FlutterPluginBinding) {
    channel.setMethodCallHandler(null)
  }
}
