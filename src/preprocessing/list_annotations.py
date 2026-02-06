import json
from pathlib import Path
from PIL import Image

# ===== CHANGE THIS ONLY =====
SPLIT = "validation"  # "train", "val", or "test"
# ===========================

ANNOTATION_DIR = Path(f"data/deepfashion2/annotations/{SPLIT}")
IMAGE_DIR = Path(f"data/deepfashion2/images/{SPLIT}")
OUTPUT_DIR = Path(f"data/processed/{SPLIT}/images")
LABELS_FILE = Path(f"data/processed/{SPLIT}/labels.json")

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Load existing labels if resuming
if LABELS_FILE.exists():
    with open(LABELS_FILE, "r") as f:
        labels = json.load(f)
    existing_ids = {entry["image_id"] for entry in labels}
else:
    labels = []
    existing_ids = set()

json_files = sorted(ANNOTATION_DIR.glob("*.json"))
print(f"[{SPLIT}] Processing {len(json_files)} annotation files...")

for json_file in json_files:
    image_id = json_file.stem
    out_image_id = f"{SPLIT}_{image_id}"
    out_image_name = f"{out_image_id}.jpg"
    out_path = OUTPUT_DIR / out_image_name

    # Skip if already processed
    if out_image_id in existing_ids:
        continue

    with open(json_file, "r") as f:
        data = json.load(f)

    if "item1" not in data:
        continue

    item1 = data["item1"]
    x1, y1, x2, y2 = item1["bounding_box"]

    image_path = IMAGE_DIR / f"{image_id}.jpg"
    if not image_path.exists():
        continue

    img = Image.open(image_path).convert("RGB")
    crop = img.crop((x1, y1, x2, y2))
    w, h = crop.size

    if w < 50 or h < 50:
        continue

    crop.save(out_path)

    label_entry = {
        "image_id": out_image_id,
        "image_path": f"images/{out_image_name}",
        "category_id": item1["category_id"],
        "occlusion": item1["occlusion"]
    }

    labels.append(label_entry)
    existing_ids.add(out_image_id)

with open(LABELS_FILE, "w") as f:
    json.dump(labels, f, indent=2)

print(f"[{SPLIT}] Done. Total saved samples: {len(labels)}")
