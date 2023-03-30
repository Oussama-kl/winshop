const mongoose = require('mongoose');
const Review = require('../models/reviewModel');
const logoUpload = require('../middlewares/multerMiddleware/logoUpload');
const faviconUpload = require('../middlewares/multerMiddleware/faviconUpload');
const heroImageUpload = require('../middlewares/multerMiddleware/heroImageUpload');

// get all reviews
const getReviews = async (req, res) => {
  const reviews = await Review.find({});
  if (!reviews) {
    return res.status(404).json({ error: 'there are no reviews' });
  }
  res.status(200).json(reviews);
};

// get a review
const getReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'review does not exist' });
  }
  const review = await Review.findById(id);
  if (!review) {
    return res.status(404).json({ error: 'review does not exist' });
  }
  res.status(200).json(review);
};

// create a review
const createReview = async (req, res) => {
  // code for creating a new review
};

// update a review
const updateReview = async (req, res) => {
  // code for updating a review
};

// delete a review
const deleteReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'review does not exist' });
  }
  const review = await Review.findOneAndDelete({ _id: id });
  if (!review) {
    return res.status(404).json({ error: 'review does not exist' });
  }
  res.status(200).json(review);
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};