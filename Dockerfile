FROM node:16.14-alpine

WORKDIR /todo-list-back-project

EXPOSE 3000

ENV PATH /todo-list-back-project/node_modules/.bin:$PATH

COPY package*.json /todo-list-back-project/
RUN npm install
RUN npm run build

CMD ["npm", "start"]