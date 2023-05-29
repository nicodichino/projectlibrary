//Creacion de las routes para las librerias

const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  getAllLibraries,
  getLibraryById,
  createLibrary,
  updateLibrary,
  deleteLibrary,
} = require('../controllers/libraries');

router.get('/', getAllLibraries);
router.get('/:id', getLibraryById);
router.post('/', passport.authenticate('jwt', { session: false }), createLibrary);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateLibrary);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteLibrary);

module.exports = router;


