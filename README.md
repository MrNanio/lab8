# Lab8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Dockerfile w wersji dev
Budowa:

`docker build -f Dockerfile.dev -t local/lab8:1 .`

Uruchomienie:

`docker run -it -p 4200:4200 -v /app/node_modules -v ${pwd}:/app local/lab8:1`

# Dockerfile w wersji prod

Budowa:

`docker build -t local/lab8:2 .`

Uruchomienie:

`docker run -d -p 4200:80 local/lab8:2`

lub 

`docker compose up`
# Travis CI

https://app.travis-ci.com/github/MrNanio/lab8/builds
