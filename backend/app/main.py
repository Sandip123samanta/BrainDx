import numpy as np
from fastapi import FastAPI, File, UploadFile
import tensorflow as tf
from app.model.model import Crop_Image

app = FastAPI()

MODEL = tf.keras.models.load_model("./app/model/Vgg16.keras")

@app.get("/")
def Ping():
    return "Hello, I am alive"

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    file_data = await file.read()
    
    # Call Crop_Image without await since it's not an async function
    image = Crop_Image(file_data)
    
    # Prepare the image for prediction
    img_batch = np.expand_dims(image, 0)
    
    # Make prediction
    prediction = MODEL.predict(img_batch)
    prediction = round(prediction[0][0]*100)

    return {"prediction": prediction}