# Generated by Django 3.2.7 on 2021-09-17 14:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_height', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(4096)])),
                ('image_width', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(4096)])),
                ('url', models.ImageField(height_field='image_height', upload_to='photos/%Y/%m/%d', verbose_name='image url', width_field='image_width')),
            ],
        ),
    ]
