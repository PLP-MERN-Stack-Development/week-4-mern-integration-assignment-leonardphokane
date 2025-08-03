const Blog = require('../models/blogModel');

const createBlog = async (req, res, next) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    next(err);
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    next(err);
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    next(err);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
