const express = require('express'),
	router = express.Router(),
	{ errorHandler } = require('./../middleware'),
	{
		getPost,
		getNewPost,
		postPost,
		getIdPost,
		getIdEditPost,
		putIdPost,
		deleteIdPost
	} = require('./../controllers/posts'),
	bodyParser = require('body-parser');

/* GET posts index /posts */
router.get('/', errorHandler(getPost));

/* GET posts index /posts */
router.get('/new', errorHandler(getNewPost));

router.post('/', errorHandler(postPost));

router.get('/:id', errorHandler(getIdPost));

router.get('/:id/edit', errorHandler(getIdEditPost));

router.put('/:id', putIdPost);

router.delete('/:id', deleteIdPost);

module.exports = router;
