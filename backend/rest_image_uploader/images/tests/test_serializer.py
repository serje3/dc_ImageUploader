from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from ..serializers import ImageSerializer
from ..models import Image


class ImageSerializerTestCase(TestCase):

    def test_assert_url(self):
        with open('_test.jpg', 'rb') as f:
            in_memory = f.read()

        newPhoto = Image()
        newPhoto.url = SimpleUploadedFile(name='test_image.jpg', content=in_memory,
                                          content_type='image/jpeg')
        newPhoto.save()

        serializerData = ImageSerializer(newPhoto).data
        print(serializerData)

