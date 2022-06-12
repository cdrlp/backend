FROM node:16.14.2-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN yarn install
RUN yarn build

FROM node:16.14.2-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --only=production
COPY --from=0 /usr/src/app/dist ./dist


ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000
CMD ["node", "dist/app.js"]
