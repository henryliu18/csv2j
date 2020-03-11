FROM node
WORKDIR /api
COPY *.js /api/
COPY routes/ /api/
RUN npm install express body-parser cors express-fileupload morgan lodash csvtojson --save
CMD [ "node","/api/index.js" ]
