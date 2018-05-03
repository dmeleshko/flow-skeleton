FROM node:carbon

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

CMD ["node", "dist/bundle.js"]
