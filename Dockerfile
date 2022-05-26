FROM node:16.14.2-slim 
WORKDIR /todo-list-back
EXPOSE 3000
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]