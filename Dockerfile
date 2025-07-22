FROM node:24-alpine

WORKDIR /app

COPY package.* .
RUN npm i

COPY . . 
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/app.js"]