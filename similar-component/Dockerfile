FROM node:alpine

WORKDIR /similar
ADD package.json /similar/package.json
RUN npm install --silent

ADD . /similar


CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
