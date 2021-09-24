#!/bin/bash

cd rest_image_uploader || exit



python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --no-input

#coverage run --source='.' manage.py test
#coverage report

##coverage annotate -d annotates/
#
exec gunicorn rest_image_uploader.wsgi:application -b 0.0.0.0:8000 --reload
#python manage.py test images.tests