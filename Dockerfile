# pull official base image
FROM node:17.4.0-alpine
# set working directory
WORKDIR /react

# add `/react/node_modules/.bin` to $PATH
ENV PATH /react/node_modules/.bin:$PATH
# install react dependencies
COPY package.json ./


# add app
COPY . ./
# start app
EXPOSE 3000
CMD ["yarn", "start"]
