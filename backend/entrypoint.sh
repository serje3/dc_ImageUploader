#!/bin/bash

cd rest_image_uploader || exit



python manage.py makemigrations --no-input
python manage.py migrate --no-input
python manage.py collectstatic --no-input

exec gunicorn rest_image_uploader.wsgi:application -b 0.0.0.0:8000 --reload
