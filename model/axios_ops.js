const axios = require('axios');

function getData(url) {
	  return axios.get(url)
    .then(function (res){
        return res.data;
    }).catch(function(err){
      	return err;
    })
}

function postData(url) {
	  return axios.post(url)
    .then(function (res){
        return res.data;
    }).catch(function(err){
      	return err;
    })
}

module.exports = {
  getData: getData,
  postData: postData
}
