#!/bin/bash
cd "$(dirname "$0")"
cd ../docker
docker-compose --env-file .env.dev up
