FROM node:14-alpine AS build

#ENV NODE_OPTIONS=--openssl-legacy-provider

# build app
WORKDIR /app
COPY ./package*.json .
RUN npm ci --production --legacy-peer-deps --registry=http://nexus.gazprom-neft.local:8080/repository/npm-nodejs-external-dso/
COPY ./webpack ./webpack
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
RUN npm run build:prod

# start APP
FROM node:14-alpine AS web-service
WORKDIR /app
COPY --from=build ./app/dist ./dist
RUN npm i express@4.18.2 --registry=http://nexus.gazprom-neft.local:8080/repository/npm-nodejs-external-dso/
COPY server.js .
CMD node server.js
