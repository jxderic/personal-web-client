#!/bin/bash
echo "deploying"
docker-compose up -d
docker-compose ps
docker-compose logs server
echo "deploy done"