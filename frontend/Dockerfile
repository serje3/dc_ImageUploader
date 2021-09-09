FROM node:16-alpine3.11 as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY image-uploader/package.json ./
COPY image-uploader/package-lock.json ./
RUN chown -Rh $user:$user /app
RUN npm install set unsafe-perm true

COPY ./image-uploader/ ./

CMD ["npm", "start"]
