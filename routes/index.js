const express = require('express'),
	router = express.Router(),
	{ postRegister } = require('../controllers'),
	{ errorHandler } = require('./../middleware'),
	passport = require('passport'),
	passportLocalMongoose = require('passport-local-mongoose');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Surf Shop - Home' });
});

router.get('/register', (req, res, next) => {
	res.send('GET  /register');
});

router.post('/register', errorHandler(postRegister));

router.get('/login', (req, res, next) => {
	res.send('GET /login');
});

router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
);

router.get('/profile', (req, res, next) => {
	res.send('GET /profile');
});

router.put('/profile/:user_id', (req, res, next) => {
	res.send('PUT /profile/:user_id');
});

router.get('/forgot', (req, res, next) => {
	res.send('GET /forgot');
});

router.put('/forgot', (req, res, next) => {
	res.send('PUT /forgot');
});

router.get('/reset/:token', (req, res, next) => {
	res.send('GET /reset:token');
});

router.put('/reset/:token', (req, res, next) => {
	res.send('PUT /reset:token');
});

router.get('/logout', (req, res, next) => {
	req.logout();
	res.send('Bye Dude!!');
});

module.exports = router;
