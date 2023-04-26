FROM node:16

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 9001

CMD ["yarn", "start:prod"]