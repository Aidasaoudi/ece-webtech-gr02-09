FROM node:18

WORKDIR /usr/src/app/backend

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm i

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]