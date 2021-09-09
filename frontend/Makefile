run:
	sudo docker run -it --rm \
-v ${PWD}/image-uploader:/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
image-uploader:dev
