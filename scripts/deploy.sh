#!/bin/sh
# deployment script for automated updates via github actions

# get latest repo version
git pull

# pull latest versions of services
docker-compose pull auth-proxy beerchat-proxy mapserver wiki highscore webmail manager

# update deployment
docker-compose up -d --remove-orphans

# cleanup old/stale images
docker image prune -af
