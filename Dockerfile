FROM node:24-slim

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev-start"]
