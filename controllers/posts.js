const Post = require('./../models/post'),
	mongoose = require('mongoose');
// get, getNew, post, getId, getIdEdit
module.exports = {
	// GET 'posts/'
	async getPost(req, res, next) {
		let posts = await Post.find({});
		res.render('posts', { posts });
	},
	// GET posts/new
	getNewPost(req, res, next) {
		res.render('posts/new');
	},
	// GET posts/:id
	async getIdPost(req, res, next) {
		const id = req.params.id,
			post = await Post.findById(id);

		res.render('posts/show', { post });
	},

	async postPost(req, res, next) {
		const postBody = req.body.post;
		const NewPost = new Post(postBody);
		await NewPost.save();
		console.log(NewPost);
		res.redirect(`posts/${NewPost._id}`);
	},

	async getIdEditPost(req, res, next) {
		const id = req.params.id;
		console.log(id);
		let post = await Post.findById(id);
		res.render('posts/edit', { post });
	},

	async putIdPost(req, res, next) {
		const id = req.params.id;
		await Post.findByIdAndUpdate(id, req.body.post);
		res.redirect(`${id}`);
	},

	async deleteIdPost(req, res, next) {
		const id = req.params.id;
		await Post.findOneAndDelete({ _id: id });
		res.redirect('/');
	}
};
