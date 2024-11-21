import numpy as np
import lime
import lime.lime_image
from PIL import Image
import tensorflow as tf
import matplotlib.pyplot as plt
from skimage.segmentation import mark_boundaries


def explain_instance(image, MODEL, num_samples=100):
    import os
    os.makedirs('./tmp', exist_ok=True)  # Create tmp directory if it doesn't exist

    explainer = lime.lime_image.LimeImageExplainer()

    def predict_fn(image):
        return MODEL.predict(image)
    
    explanation = explainer.explain_instance(
        image[0], predict_fn, top_labels=1, hide_color=0, num_samples=num_samples
    )

    # Set positive_only to False to include both positive and negative contributions
    temp, mask = explanation.get_image_and_mask(
        explanation.top_labels[0], positive_only=False, num_features=15, hide_rest=False
    )

    # Display positive (green) and negative (red) contributions with boundaries
    img_boundary = mark_boundaries(temp / 255.0, mask)

    plt.figure(figsize=(6, 6))
    plt.imshow(img_boundary)
    plt.axis('off')
    plt.savefig('./tmp/explanation.png', bbox_inches='tight', pad_inches=0)

    return './tmp/explanation.png'
