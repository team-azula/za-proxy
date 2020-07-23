FROM node:alpine

WORKDIR /preview
ADD package.json /preview/package.json
RUN npm install --silent

ADD . /preview


CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
