const express = require('express');
const multer = require('multer');
const uploadConfig = require('../src/config/upload');

const PostController = require('../src/controllers/PostController');
const LikeController = require('../src/controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;