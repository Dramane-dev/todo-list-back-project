FROM node:16.14-alpine

WORKDIR /todo-list-back-project

EXPOSE 3000

ENV PATH /server/node_modules/.bin:$PATH

COPY package*.json /server/
RUN npm install
RUN npm run build

CMD ["npm", "start"]