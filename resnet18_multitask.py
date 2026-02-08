#In models folder, add a new file, and copy paste this text. Also add another "__init__.py"
import torch
import torch.nn as nn
from torchvision import models


class ResNet18MultiTask(nn.Module):
    def __init__(self, num_categories=13, num_occlusions=3):
        super().__init__()

        # Backbone
        self.backbone = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Identity()

        # Heads
        self.category_head = nn.Linear(in_features, num_categories)
        self.occlusion_head = nn.Linear(in_features, num_occlusions)

    def forward(self, x):
        features = self.backbone(x)

        category_logits = self.category_head(features)
        occlusion_logits = self.occlusion_head(features)

        return category_logits, occlusion_logits
