FROM python:3

COPY . /app
WORKDIR /app
RUN apt update -qq
RUN apt install npm nodejs -yqq
RUN npm i -g yarn n
RUN n stable
#RUN yarn set version latest

COPY . /app
WORKDIR /app

RUN cd kebab && \
    yarn && \
    yarn build 
RUN cd kibbeh && \
    yarn add utf-8-validate && \
    yarn && \
    yarn build
