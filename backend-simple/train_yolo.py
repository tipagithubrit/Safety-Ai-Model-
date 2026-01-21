# YOLO Training Script
from ultralytics import YOLO # type: ignore

# Load a pre-trained model
model = YOLO('yolov8n.pt')  # Nano model for demo

# Train on a small dataset (replace with your data.yaml)
model.train(
    data='data.yaml',  # Path to your dataset config
    epochs=10,         # Few epochs for demo
    imgsz=640,         # Image size
    batch=4,           # Small batch
    name='demo_train'  # Experiment name
)

# Save the model
model.save('demo_model.pt')