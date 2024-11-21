import tensorflow as tf
import numpy as np
import cv2
import imutils


def Crop_Image(data: bytes) -> np.ndarray:
    # Convert byte data to a NumPy array
    nparr = np.frombuffer(data, np.uint8)
    
    # Decode image from the NumPy array
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    gray_image = cv2.GaussianBlur(gray_image, (5, 5), 0)

    thres = cv2.threshold(gray_image, 45, 255, cv2.THRESH_BINARY)[1]
    thres = cv2.erode(thres, None, iterations=2)
    thres = cv2.dilate(thres, None, iterations=2)

    cnts = cv2.findContours(thres.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key=cv2.contourArea)

    extLeft = tuple(c[c[:, :, 0].argmin()][0])
    extRight = tuple(c[c[:, :, 0].argmax()][0])
    extTop = tuple(c[c[:, :, 1].argmin()][0])
    extBot = tuple(c[c[:, :, 1].argmax()][0])

    new_image = image[extTop[1]:extBot[1], extLeft[0]:extRight[0]]
    new_image = cv2.resize(new_image, dsize=(240, 240), interpolation=cv2.INTER_CUBIC)

    return new_image
