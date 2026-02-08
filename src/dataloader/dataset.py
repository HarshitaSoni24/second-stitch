import json
from pathlib import Path
from PIL import Image


class SecondStitchDataset:
    def __init__(self, data_dir):
        self.data_dir = Path(data_dir)
        self.images_dir = self.data_dir / "images"
        labels_path = self.data_dir / "labels.json"

        with open(labels_path, "r") as f:
            self.labels = json.load(f)

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        entry = self.labels[idx]

        image_path = self.images_dir / entry["image_path"].split("/")[-1]
        image = Image.open(image_path).convert("RGB")

        category_id = entry["category_id"]
        style = entry["style"]
        occlusion = entry["occlusion"]

        return image, category_id, style, occlusion
