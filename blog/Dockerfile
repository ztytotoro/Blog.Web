FROM node:12
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
COPY ["package-lock.json*", "./"]
RUN apt-get update
RUN apt-get install python gcc g++ make
RUN npm install --production=false
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm start