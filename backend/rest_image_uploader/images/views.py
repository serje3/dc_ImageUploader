from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .models import Image
from .serializers import ImageSerializer


# Create your views here.
class CreateImage(CreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        print(request.data['url'].image)
        print(response.data)
        return response
