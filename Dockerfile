FROM ubuntu:16.04

RUN apt-get update
RUN apt-get -y install curl build-essential
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get -y install nodejs

RUN mkdir /var/reactserver
RUN cd /var/reactserver

COPY . ./

RUN npm install
RUN npm rebuild node-sass --force
RUN npm run build

CMD ["nodejs", "./server.js"]