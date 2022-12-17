FROM node:14.17.3-alpine

RUN mkdir -p /var/www/docs
WORKDIR /var/www/docs/

# Cria as pastas
RUN mkdir -p /var/www/docs/.cache
RUN mkdir -p /var/www/docs/static
RUN mkdir -p /var/www/docs/public

# Copias as pastas do projeto
COPY ../cache .cache/
COPY ../static static/
COPY ../package.json .
COPY ../yarn.lock .
COPY ../gatsby-config.js .
#COPY public public/ lincado durante a execucao

RUN ls

# Instala os pacotes para rodar o servidor
RUN yarn install --production

EXPOSE 9000

ENTRYPOINT [ "yarn", "serve" ]
