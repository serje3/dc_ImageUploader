# Generated by Django 3.2.6 on 2021-08-04 23:12

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
                ('img', models.ImageField(upload_to='photos/', verbose_name='Photo')),
                ('url', models.CharField(max_length=8, verbose_name='Photo URL')),
            ],
        ),
    ]
