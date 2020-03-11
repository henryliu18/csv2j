FROM node
ARG http_proxy
ARG https_proxy
RUN mkdir -p /api/routes
WORKDIR /api
COPY ./index.js /api/
COPY ./routes/* /api/routes
WORKDIR /api
RUN npm install express body-parser cors express-fileupload morgan lodash csvtojson --save
CMD [ "node","/api/index.js" ]
