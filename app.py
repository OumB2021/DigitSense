from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from PIL import Image
import io
import base64

app = Flask(__name__)
CORS(app)

# Load model once
model = tf.keras.models.load_model("model.h5")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    if not data or "image" not in data:
        return jsonify({"error": "No image data"}), 400

    # Decode base64 image
    image_data = base64.b64decode(data["image"].split(",")[1])
    image = Image.open(io.BytesIO(image_data)).convert("L")  # Grayscale
    image = image.resize((28, 28))  # Resize to 28x28
    image_array = np.array(image)
    image_array = image_array / 255.0  # Normalize
    image_array = image_array.reshape(1, 28, 28, 1)  # Shape for model

    # Predict
    prediction = model.predict(image_array)
    predicted_class = int(np.argmax(prediction))

    return jsonify({"prediction": predicted_class})
