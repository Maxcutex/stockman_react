FROM node:12.2-alpine as builder

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN npm install

COPY . .

RUN npm run build && npm prune --production

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
