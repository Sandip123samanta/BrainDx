import numpy as np
from fastapi import FastAPI, File, UploadFile
import tensorflow as tf
from app.model.model import Crop_Image
from app.middleware.cors_middleware import add_cors_middleware
from app.explainer.lime_explainer import explain_instance
import os
from fastapi.responses import FileResponse
import logging


app = FastAPI()

add_cors_middleware(app)

MODEL = tf.keras.models.load_model("./app/model/Vgg16.keras")

@app.get("/")
def Ping():
    return "Hello, I am alive"

logging.basicConfig(level=logging.INFO)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        file_data = await file.read()
        image = Crop_Image(file_data)
        img_batch = np.expand_dims(image, 0)
        prediction = MODEL.predict(img_batch)
        prediction = round(prediction[0][0] * 100)
        explanation = explain_instance(img_batch, MODEL, num_samples=100)
        return {"prediction": prediction, "explanation": explanation}
    except Exception as e:
        logging.error(f"Error in predict endpoint: {str(e)}")
        return {"error": str(e)}

@app.get("/tmp/{filename}")
async def get_image(filename: str):
    file_path = os.path.join("tmp", filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "File not found"}