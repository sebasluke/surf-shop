const User = require('../models/user'),
	passport = require('passport');

module.exports = {
	// POST /register
	async postRegister(req, res, next) {
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			image: req.body.image
		});

		await User.register(newUser, req.body.password);
		res.redirect('/');
	},
	// POST /Login
	userLogin(req, res, next) {
		passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/login'
		})(req, res, next);
	},
	// GET /Logout
	userLogout(req, res, next) {
		req.logout();
		res.send('Bye, dude!');
	}
};
