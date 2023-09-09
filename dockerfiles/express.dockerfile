# Fetching the minified node image on alpine linux
FROM node:slim

ENV NODE_ENV development
ENV PORT 8000

WORKDIR /express-server

COPY ./packages/backend .

RUN npm install

CMD [ "npm", "run", "dev"]

EXPOSE 8000
