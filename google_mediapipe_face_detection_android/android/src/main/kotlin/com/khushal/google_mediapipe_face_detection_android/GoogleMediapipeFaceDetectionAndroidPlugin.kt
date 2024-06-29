package com.khushal.google_mediapipe_face_detection_android

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import com.google.mediapipe.framework.image.BitmapImageBuilder
import com.google.mediapipe.framework.image.MPImage
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.facedetector.FaceDetector
import com.google.mediapipe.tasks.vision.facedetector.FaceDetectorResult
import io.flutter.embedding.engine.plugins.FlutterPlugin
import io.flutter.plugin.common.MethodCall
import io.flutter.plugin.common.MethodChannel
import io.flutter.plugin.common.MethodChannel.Result
import io.flutter.plugin.common.MethodChannel.MethodCallHandler

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
            // Get image path from method channel arguments
            val imagePath = call.argument<String>("path") ?: throw Exception("No input image given")
            // Get image Bitmap object from image path
            val bitmap: Bitmap = BitmapFactory.decodeFile(imagePath)
            // Convert the image Bitmap object to an MPImage object to run inference
            val mpImage: MPImage = BitmapImageBuilder(bitmap).build()
            // Detect faces from MPImage
            val faceDetectorResult: FaceDetectorResult = faceDetector.detect(mpImage)
            // Convert detected faces to list of
            val faces: List<HashMap<String, Double>> =  faceDetectorResult.detections().map {
              hashMapOf(
                "left" to it.boundingBox().left.toDouble(),
                "top" to it.boundingBox().top.toDouble(),
                "right" to it.boundingBox().right.toDouble(),
                "bottom" to it.boundingBox().bottom.toDouble(),
              )
            }
            result.success(faces)
          } catch (e: Exception) {
            result.error("DETECTION_FAILED", e.message, null)
          }
        }
        "close" -> {
          try {
            faceDetector.close()
            result.success(true)
          } catch (e: Exception) {
            result.error("CLOSING_FAILED", e.message, null)
          }
        }
        "load" -> {
          try {
            val baseOptionsBuilder = BaseOptions.builder().setModelAssetPath(modelName)
            val baseOptions = baseOptionsBuilder.build()

            val optionsBuilder =
              FaceDetector.FaceDetectorOptions.builder()
                .setBaseOptions(baseOptions)
                .setRunningMode(RunningMode.IMAGE)

            val options = optionsBuilder.build()

            faceDetector =
              FaceDetector.createFromOptions(context, options)
            result.success(true)
          } catch (e: Exception) {
            result.error("LOADING_FAILED", e.message, null)
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
