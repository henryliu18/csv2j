FROM node
ARG http_proxy
ARG https_proxy
RUN mkdir -p /api/routes; mkdir -p /api/controllers
WORKDIR /api
COPY ./index.js /api/
COPY ./routes/* /api/routes
COPY ./controllers/* /api/controllers
WORKDIR /api
RUN npm install express body-parser cors express-fileupload morgan lodash csvtojson --save
CMD [ "node","/api/index.js" ]
