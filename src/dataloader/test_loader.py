from dataset import SecondStitchDataset
import matplotlib.pyplot as plt

dataset = SecondStitchDataset("data/processed/train")

image, category_id, style, occlusion = dataset[0]

print("Category:", category_id)
print("Style:", style)
print("Occlusion:", occlusion)

plt.imshow(image)
plt.axis("off")
plt.show()
