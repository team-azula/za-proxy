#Install the latest node dependency
FROM node:alpine

# Set the working directory
WORKDIR /review

# Copy root directory into docker root directory
COPY . /review

# Command to run upon mounting image
RUN cd /review/client && npm install --silent
RUN cd /review/server && npm install --silent

# Command to access the bash of the image
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
