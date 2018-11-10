FROM mhart/alpine-node:10
RUN apk update && apk add vim curl

ADD ./components /srv/components
ADD ./pages /srv/pages
ADD ./static /srv/static
ADD ./helpers /srv/helpers
ADD ./next.config.js /srv
ADD ./package.json /srv
ADD ./yarn.lock /srv
WORKDIR /srv
RUN yarn
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn", "serve"]
