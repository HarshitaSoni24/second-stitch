#EDIT THIS FILE IN GOOGLE COLAB
import json
from pathlib import Path
from PIL import Image
from torch.utils.data import Dataset


class SecondStitchDataset(Dataset):
    """
    Returns:
    image, category_id, occlusion
    """

    def __init__(self, data_dir, transform=None):
        self.data_dir = Path(data_dir)
        self.images_dir = self.data_dir / "images"
        self.transform = transform

        labels_path = self.data_dir / "labels.json"
        with open(labels_path, "r") as f:
            self.labels = json.load(f)

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        entry = self.labels[idx]

        # --- Load image ---
        image_name = Path(entry["image_path"]).name
        image_path = self.images_dir / image_name
        image = Image.open(image_path).convert("RGB")

        if self.transform is not None:
            image = self.transform(image)

        # --- Targets (0-based) ---
        category_id = int(entry["category_id"]) - 1   # 0–12
        occlusion = int(entry["occlusion"]) - 1       # 0–2
