const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();
const db = mongoose.connect('mongodb://localhost/sentenceAPI');
const sentenceRouter = express.Router();
const port = process.env.PORT || 3000;

//sentence model
const Sentence = require('./models/sentenceModel');

// @route   GET /api/sentences/
// @desc    Get all sentences
// @access  Public
sentenceRouter.get('/sentences', async (req, res) => {
  try {
    const sentences = await Sentence.find({});
    res.send({ sentences })
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/sentences/:id
// @desc    Get a specific sentence
// @access  Public
sentenceRouter.get('/sentences/:id', async (req, res) => {
  try {
    const sentence = await Sentence.findById(req.params.id);
    res.send({ sentence });
  } catch (err) {
    res.status(404).send({ message: 'Sentence not found!' });
  }
});

// @route   POST /api/sentences/
// @desc    Create a sentence
// @access  Public
sentenceRouter.post('/sentences', async (req, res) => {
  try {
    const newSentence = await Sentence.create(req.params.id, req.body);
    res.send({ newSentence });
  } catch (err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/sentences/:id
// @desc    Update a sentence
// @access  Public
sentenceRouter.put('/sentences/:id', async (req, res) => {
  try {
    const updatedSentence = await Sentence.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'The Sentence was updated' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/sentences/:id
// @desc    Delete a sentence
// @access  Public
sentenceRouter.delete('/sentences/:id', async (req, res) => {
  try {
    const removeSentence = await Sentence.findByIdAndRemove(req.params.id);
    res.send({ message: 'The Sentence was removed' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

 
app.use('/api', sentenceRouter);


app.listen(3000, () => {
console.log(`connected to the server ${port}`);

});