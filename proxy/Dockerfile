FROM node:alpine

WORKDIR /proxy
ADD package.json /proxy/package.json
RUN npm install --silent
ADD . /proxy

CMD ["npm", "run", "start"]
