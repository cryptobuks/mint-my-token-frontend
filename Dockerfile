FROM mhart/alpine-node:10
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
