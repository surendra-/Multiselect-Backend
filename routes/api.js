var express = require('express');
var router = express.Router();

router.route('/clothes')
	
	//return all posts
	.get(function(req,res){

		var jsonObj = require("./test.json");
		
 		res.jsonp(jsonObj);
	})


  .post(function(req,res){

  });




module.exports = router;

