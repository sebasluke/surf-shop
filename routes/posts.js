const express = require('express');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
	res.send('/posts');
});

/* GET posts index /posts */
router.get('/new', (req, res, next) => {
	res.send('/posts/new');
});

router.post('/', (req, res, next) => {
	res.send('/posts/POST');
});

router.get('/:id', (req, res, next) => {
	res.send('/:id/SHOW!!');
});

router.get('/:id/edit', (req, res, next) => {
	res.send('Edit this!!');
});

router.put('/:id', (req, res, next) => {
	res.send('This is edited!!');
});

router.delete('/:id', (req, res, next) => {
	res.send('Deleted dude!!');
});

module.exports = router;
