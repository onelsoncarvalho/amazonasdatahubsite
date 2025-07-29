FROM node:24-slim

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000

#ARG START_CMD="dev-start"
#ENV START_COMMAND=${START_CMD}

#CMD ["yarn", "run", "${START_COMMAND}"]
ARG START_CMD=dev-start
ENV START_CMD=$START_CMD
CMD ["sh", "-c", "yarn run $START_CMD"]
