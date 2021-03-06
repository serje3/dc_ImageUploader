<!-- Please update value in the {}  -->

<h1 align="center">Image Uploader by Serje3</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/e8fc5712-82ca-4d49-8f86-f96422585afb/deploy-status)](https://app.netlify.com/sites/image-uploader-5bd5e3/deploys)


<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://github.com/serje3/dc_ImageUploader/tree/master/demo/screenshots">
      Demo
    </a>
    <span> | </span>
    <a href="https://dc-image-uploader.netlify.app/">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://raw.githubusercontent.com/serje3/dc_ImageUploader/master/demo/img/screenshot.png)

My project is hosted on two servers:
On the first https://dc-image-uploader.netlify.app/ the frontend folder is deployed, 
On the second https://151-248-121-170.cloudvps.regruhosting.ru/ the folder with the backend and image storage.

Work algorithm: a POST Ajax request is sent from the frontend to /api/image of the backend, with the image. The backend saves the resulting image to storage and saves a link to this image to the database and sends the response as this link.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Django](https://www.djangoproject.com/)
- [nginx](https://nginx.org/ru/)
- [gunicorn](https://gunicorn.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/serje3/dc_ImageUploader
$ cd dc_ImageUploader/
# Create files backend/env/pg.env and backend/env/server.env 
$ touch backend/env/pg.env backend/env/server.env
$ echo "POSTGRES_DB={db_name} 
        POSTGRES_USER={user_name}
        POSTGRES_PASSWORD={password}
        PGDATA=/var/lib/postgresql/data/pgdata" >> backend/env/pg.env
$ echo "IP=web
        PORT=8000
        DEBUG=1
        SECRET_KEY={django-secret-key}" >> backend/env/server.env
```

#### If you have [make](https://www.gnu.org/software/make/) installed
```bash
$ make react-build

$ make build

$ make up
```
#### If not =>
```bash
$ sudo docker-compose run front-web npm run build

$ sudo docker-compose build

$ sudo docker-compose up
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- [Django REST Framework](https://www.django-rest-framework.org/)
- [Django docs](https://docs.djangoproject.com/en/3.2/)
- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

- GitHub [@serje3](https://github.com/serje3)
- Telegram [@serJAYY](https://telegram.org)
