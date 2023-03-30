const express = require('express');
const { getReviews, getReview, createReview, deleteReview, updateReview } = require('../controllers/reviewController');
const router = express.Router();

// get all reviews
router.get('/', getReviews);
// get one review
router.get('/:id', getReview);
// post a review
router.post('/', createReview);
// delete a review
router.delete('/:id', deleteReview);
// update a review
router.patch('/:id', updateReview);

module.exports = router;