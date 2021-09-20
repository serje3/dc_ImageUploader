build:
	sudo docker-compose build
up:
	sudo docker-compose up
down:
	sudo docker-compose down

rb:
	make build
	make up

permissions:
	sudo chown -R serje3:serje3 .
	sudo chown -R serje3:serje3 ./backend/rest_image_uploader/
	sudo chown -R serje3:serje3 ./backend/rest_image_uploader/*