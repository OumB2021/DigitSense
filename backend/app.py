from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from PIL import Image, ImageOps, ImageFilter
import io
import base64
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load model
try:
    model = tf.keras.models.load_model("model.h5")
    logger.info("Model loaded successfully")
    
    try:
        dummy_input = np.zeros((1, 28, 28, 1))
        _ = model.predict(dummy_input)
        logger.info("Model warm-up complete")
    except Exception as e:
        logger.warning(f"Model warm-up failed: {str(e)}")
        
except Exception as e:
    logger.error(f"Failed to load model: {str(e)}")
    raise

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        if not data or "image" not in data:
            return jsonify({"error": "No image data provided"}), 400

        try:
            header, encoded = data["image"].split(",", 1)
            image_data = base64.b64decode(encoded)
            image = Image.open(io.BytesIO(image_data)).convert("L")  # Grayscale
        except Exception as e:
            return jsonify({"error": f"Invalid image data: {str(e)}"}), 400

        # Preprocess image
        image = image.resize((28, 28))
        image = ImageOps.invert(image)
        image_array = np.array(image)

        # Invert the image: MNIST expects white digit on black background
        image = ImageOps.invert(image)

        # Optionally sharpen the image (helps preserve edges during resize)
        image = image.filter(ImageFilter.SHARPEN)

        # (Optional) Save for visual debugging
        image.save("received_digit.png")
            
        image_array = image_array / 255.0  # Normalize
        image_array = image_array.reshape(1, 28, 28, 1)  # Reshape for model

        # Make prediction
        prediction = model.predict(image_array)
        predicted_class = int(np.argmax(prediction))
        probabilities = prediction[0].tolist()  # Convert numpy array to list

        return jsonify({
            "prediction": predicted_class,
            "probabilities": probabilities,
            "status": "success"
        })

    except Exception as e:
        logger.error(f"Prediction failed: {str(e)}")
        return jsonify({"error": str(e), "status": "error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)