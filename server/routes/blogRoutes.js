const express = require('express');
const { body } = require('express-validator');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

const router = express.Router();

// 🧼 Validation Rules
const blogValidation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('body').isLength({ min: 10 }).withMessage('Body must be at least 10 characters'),
  body('author').notEmpty().withMessage('Author is required')
];

// 🔁 CRUD Routes
router.post('/', blogValidation, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.put('/:id', blogValidation, updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
