var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Project  = require('../models/Project.js');

/* GET Projects listing. */
router.get('/', function(req, res, next) {
	Project.find(function (err, projects) {
    if (err){
		return next(err);
	}else{
		res.json(projects);
	} 
  });
});

/* POST /projects */
router.post('/', function(req, res, next) {
  Project.create(req.body, function (err, post) {
    if (err){
		return next(err);
	} else{
		res.json(post);
	}
  });
});

/* GET /projects/:id */
router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, post) {
    if (err){
		return next(err);
	} else{
		res.json(post);
	}
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err){
		return next(err);
	} else{
		res.json(post);
	}
  });
});

/* DELETE /projects/:id */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err){
		return next(err);
	} else{
		res.json(post);
	}
  });
});

module.exports = router;
