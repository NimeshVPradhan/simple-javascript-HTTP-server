const express = require('express');
const cors = require	('cors');
const app = express();
const axios_ops = require('../model/axios_ops');

function serve(port) {
  app.locals.port = port;
  setupRoutes(app);
	app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });
}

function setupRoutes(app) {
	app.use(cors());
	app.get('/proxy/*', getData(app));
	app.post('/proxy/*',postData(app));
}

function getData(app){
  return function(request, response, next) {
      axios_ops.getData(request.url.substring(7)).
			then(function(results) {
				response.json(results);
			}).
		catch((err) => {
	  		response.json(err);
			});
    }
}

function postData(app){
  return function(request, response, next) {
      axios_ops.postData(request.url.substring(7)).
			then(function(results) {
				response.json(results);
			}).
		catch((err) => {
	  		response.json(err);
			});
    }
}

module.exports = {
  serve: serve
}

