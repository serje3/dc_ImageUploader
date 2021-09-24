from rest_framework import serializers
from .models import Image


class ImageSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.ImageField(source='img_url', use_url=True)

    class Meta:
        model = Image
        fields = ('url',)
