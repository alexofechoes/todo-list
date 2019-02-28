from django.db import models


# Create your models here.
class Todo(models.Model):
    name = models.CharField(max_length=200)
    is_open = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
