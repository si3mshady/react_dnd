FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

ENV REACT_APP_PORT="888"
ENV REACT_APP_HOST="localhost"
EXPOSE 3000

CMD ["npm", "run", "start"]