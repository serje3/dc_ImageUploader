from django.core.validators import MaxValueValidator
from django.db import models


# Create your models here.
class Image(models.Model):
    image_height = models.PositiveIntegerField(validators=[MaxValueValidator(4096)])
    image_width = models.PositiveIntegerField(validators=[MaxValueValidator(4096)])
    img_url = models.ImageField(verbose_name='image url',
                            upload_to='photos/%Y/%m/%d',
                            height_field='image_height',
                            width_field='image_width'   )

    def get_file_name(self):
        return self.img_url.name[18:]

    def __str__(self):
        return self.get_file_name()
