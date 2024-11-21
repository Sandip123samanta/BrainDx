import numpy as np
from fastapi import FastAPI, File, UploadFile, Form, Request, HTTPException
import tensorflow as tf
from app.model.model import Crop_Image
from app.middleware.cors_middleware import add_cors_middleware
from app.explainer.lime_explainer import explain_instance
import os
from fastapi.responses import FileResponse
import logging

app = FastAPI()
add_cors_middleware(app)

model_path = {
    "Vgg16": "./app/model/Vgg16.keras",
    "ResNet50": "./app/model/ResNet50.keras",
    "BaseModel": "./app/model/BaseModel.keras",
}

loaded_models = {}

@app.get("/")
def Ping():
    return "Hello, I am alive"

logging.basicConfig(level=logging.INFO)

@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    model: str = Form("Vgg16")  
):
    try:
        if model not in loaded_models:
            model_file_path = model_path.get(model)
            if not model_file_path:
                return {"error": "Model not found"}
            loaded_models[model] = tf.keras.models.load_model(model_file_path)

        selected_model = loaded_models[model]

        file_data = await file.read()
        image = Crop_Image(file_data)
        img_batch = np.expand_dims(image, 0)

        prediction = selected_model.predict(img_batch)
        prediction = round(prediction[0][0] * 100)
        explanation = explain_instance(img_batch, selected_model, num_samples=200)

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
