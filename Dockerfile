FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
COPY ["package-lock.json*", "./"]
RUN apk update
RUN apk add --no-cache python gcc g++ make
RUN npm install --production=false
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm start