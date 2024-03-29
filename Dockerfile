FROM node:18.13.0-alpine
RUN apk update && apk upgrade && apk add --no-cache git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm cache clean --force && npm install
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 5173
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
