from django.urls import path
from .views import CreateImage

urlpatterns = [
    path('api/image', CreateImage.as_view()),
]