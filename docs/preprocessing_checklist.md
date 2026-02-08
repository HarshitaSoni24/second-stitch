Preprocessing Checklist (v1)

1. Iterate over all JSON files in annotations/train/
2. For each JSON:
   - Load corresponding image from images/train/
   - Read item1 only
   - Read bounding_box [x1, y1, x2, y2]
3. Crop EXACT bounding box (no padding)
4. Compute crop width and height
5. If width < 50 OR height < 50 → skip
6. Save cropped image as <split>_<image_id>.jpg (split = train)
7. Record label entry:
   - image_id
   - image_path
   - category_id
   - style
   - occlusion
8. Append entry to processed/train/labels.json
