FROM node:lts-alpine3.17
# Also exposing VSCode debug ports
EXPOSE 8001 9929 9930

RUN \
  apk add --no-cache --virtual .gyp python3 make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
 && rm -fR /var/cache/apk/*

RUN apk add vim git curl automake autoconf libtool nasm

RUN yarn global add gatsby-cli

WORKDIR /app
# COPY ./package.json .
# RUN yarn install
# COPY . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]