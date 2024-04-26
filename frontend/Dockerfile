FROM node:19-bullseye

WORKDIR /frontend

COPY . .

RUN npm install --save

EXPOSE 5173

CMD ["npm", "run", "dev"]
