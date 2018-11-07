# base image
FROM node:9.6.1

# set working directory
COPY . .

# install and cache app dependecies
RUN cd client && npm install --silent --production
RUN cd client && npm run build
RUN npm install --silent --production

# start app
CMD ["npm", "start"]

EXPOSE 5000