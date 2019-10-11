# Welcome to demo application of dockerized stack with SailsJS and ReactJS

This repository is an umbrella repo that has 2 submodules: api and web.

It contains code to set up a full stack denvironment with:
- SailsJS API application
- ReactJS web application
- MongoDB database
- Redis cache
- RabbitMQ queue
- Nginx reverse proxy

# Getting started

Add 2 names into /etc/hosts:

```
127.0.0.1 api.players.local #for the API
127.0.0.1 app.players.local #for the web APP
```

Clone this repo and run:

```
git submodule init
git submodule update
docker-compose up
```

Open http://app.players.local in the browser ;) 
