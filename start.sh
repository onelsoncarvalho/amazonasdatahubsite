#!/usr/bin/env bash
CONTAINER_NAME="amazonasdatahub_dev"

handler(){
  echo "Processing the Ctrl + C"
  echo "Stopping the container '$CONTAINER_NAME' immediately"
  docker stop -t 0 "$CONTAINER_NAME"
  exit 0
}
trap handler INT

START_CMD=${1:-dev-start}

docker build --build-arg START_CMD="$START_CMD" -t amazonasdatahubsite . || exit 1

docker stop -t 0 "$CONTAINER_NAME" 2>/dev/null
docker rm -f "$CONTAINER_NAME" 2>/dev/null

docker run -it --rm \
  --name "$CONTAINER_NAME" \
  -v /home/nelsonworkstation/Documents/work/amazonasdatahubsite:/usr/src/app:delegated \
  -p 3000:3000 \
  amazonasdatahubsite
