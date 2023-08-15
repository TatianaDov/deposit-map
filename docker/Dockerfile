ARG DOCKER_REGISTRY
FROM $DOCKER_REGISTRY/ubi8/nodejs-14:1-101 AS build

# build app
USER root
WORKDIR /app
COPY ./package*.json ./
ARG NPM_REGISTRY
RUN npm ci --production --legacy-peer-deps --registry=$NPM_REGISTRY
COPY ./webpack ./webpack
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
RUN npm run build:prod

# start APP
FROM $DOCKER_REGISTRY/ubi8/nodejs-14:1-101 AS web-service
WORKDIR /app
COPY --from=build ./app/dist ./dist
USER root
ARG NPM_REGISTRY
RUN npm i express@4.18.2 --registry=$NPM_REGISTRY
COPY server.js .
CMD node server.js
