# YAWA - yet another weather app (MEA mobile)

## Technologies used

- PHP Laravel Framework
- Docker
- PostgreSQL
- Nginx

## START THE BACKEND

- [Install docker](https://www.docker.com/get-started/)
- Clone this repository. Run `git clone git@github.com:jsdecena/mea-mobile.git`

## CONFIGURE ENVS

1. Rename `/mea-mobile/.env.example` to `/mea-mobile/.env`
2. Rename `/mea-mobile/project/.env.example` to `/mea-mobile/project/.env`

## RUN DOCKER 

- Run `docker-compose up -d`
- Run composer install inside the container. Run `docker exec -it yawa_app bash`
- Once inside the container, run `composer install`
- Go to `http://localhost:8000` to see if the Welcome page is running

## START THE FRONTEND

- RUN `npm install` or `yarn install` in the `/frontend` folder
- Once done, run `npm start` or `yarn start` in the `/frontend` folder