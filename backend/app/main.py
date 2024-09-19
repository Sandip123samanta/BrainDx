import numpy as np
import os
from fastapi import FastAPI, File, UploadFile
import uvicorn
import tensorflow as tf
from model.model import Crop_Image

app = FastAPI()

MODEL = tf.keras.models.load_model(os.path.abspath("./app/model/Vgg16.keras"))

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


if __name__ == "__main__":
    uvicorn.run(app,host="localhost",port=8000)