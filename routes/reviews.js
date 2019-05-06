const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.send('respond with a resource');
});

router.get('/new', (req, res, next) => {
	res.send('Create new reviews route');
});

router.post('/', (req, res, next) => {
	res.send('Posted the new review');
});

router.get('/:id', (req, res, next) => {
	res.send('Show page for the review');
});

router.get('/:id/edit', (req, res, next) => {
	res.send('Review to edit');
});

router.put('/:id', (req, res, next) => {
	res.send('Review edited');
});

router.delete('/:id', (req, res, next) => {
	res.send('User deleted');
});

module.exports = router;
