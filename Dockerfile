FROM node:14

WORKDIR /opt/notice-alarm

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

COPY . .

RUN npm ci

CMD ["npm", "start"]
