FROM node:alpine

WORKDIR /info
ADD package.json /info/package.json
RUN npm install --silent
ADD . /info


CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
