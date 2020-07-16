FROM node:12.18.0 AS build

RUN apt-get update && \
    apt-get install -y libgl1-mesa-glx

COPY package.json \
     package-lock.json \
     /app/

WORKDIR /app

RUN npm install

COPY . /app

ENV GATSBY_TELEMETRY_DISABLED=1
RUN ./node_modules/.bin/gatsby build --prefix-paths

FROM nginx:alpine
EXPOSE 8080

RUN adduser -D -u 1001 appuser

RUN touch /var/run/nginx.pid && \
    chown -R appuser /var/run/nginx.pid && \
    chown -R appuser /var/cache/nginx

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/public /usr/share/nginx/html

USER appuser
