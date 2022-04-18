FROM node:alpine

LABEL version="0.10" description="node server"

WORKDIR /server

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
