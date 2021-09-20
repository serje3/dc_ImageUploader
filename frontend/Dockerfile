FROM node:16-alpine3.11 as builder
WORKDIR /front-app
ENV PATH /front-app/node_modules/.bin:$PATH
COPY image-uploader/package*.json ./

RUN npm install

COPY ./image-uploader/ ./


CMD ["npm", "start"]
