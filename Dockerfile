FROM node
ARG http_proxy
ARG https_proxy
RUN mkdir -p /api/routes; mkdir -p /api/controllers; mkdir -p /api/config; mkdir -p /api/db; mkdir -p /api/models
WORKDIR /api
COPY ./index.js /api/
COPY ./routes/* /api/routes/
COPY ./controllers/* /api/controllers/
COPY ./config/* /api/config/
COPY ./db/* /api/db/
COPY ./models/* /api/models/
WORKDIR /api
RUN npm install express cors express-fileupload morgan lodash csvtojson dotenv --save
CMD [ "node","/api/index.js" ]
