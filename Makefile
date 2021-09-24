build:
	sudo docker-compose build
up:
	sudo docker-compose up --remove-orphans
down:
	sudo docker-compose down

build-up:
	sudo docker-compose up --build --remove-orphans

react-build:
	sudo docker-compose run front-web npm run build
	cd frontend/image-uploader/build && ~/Dev/Reps/mkcert/mkcert localhost

permissions:
	sudo chown -R serje3:serje3 .
	sudo chown -R serje3:serje3 ./backend/rest_image_uploader/
	sudo chown -R serje3:serje3 ./backend/rest_image_uploader/*