FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# uninstall the current bcrypt modules
RUN npm uninstall bcrypt

# install the bcrypt modules for the machine
RUN npm install bcrypt

COPY . .

RUN npm run build

EXPOSE 9001

CMD ["npm", "start"]