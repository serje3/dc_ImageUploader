from django.db import models
import secrets


# Create your models here.
class Image(models.Model):
    img = models.ImageField(verbose_name='Photo', upload_to='photos/%Y/%m/%d')
    url = models.CharField(max_length=8, verbose_name='Photo URL')

    def __str__(self):
        return self.img.name[:50]
