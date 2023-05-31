//Creando los controladores de las librerias

const { Library, Book } = require('../models');

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await Library.findAll({ include: Book });
    res.json(libraries);
  } catch (error) {
    console.error('Error retrieving libraries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getLibraryById = async (req, res) => {
  const { id } = req.params;
  try {
    const library = await Library.findByPk(id, { include: Book });
    if (!library) {
      return res.status(404).json({ error: 'Library not found' });
    }
    res.json(library);
  } catch (error) {
    console.error('Error retrieving library:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createLibrary = async (req, res) => {
  const { name, location, phoneNumber } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const library = await Library.create({ name, location, phoneNumber });
    res.json(library);
  } catch (error) {
    console.error('Error creating library:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateLibrary = async (req, res) => {
  const { id } = req.params;
  const { name, location, phoneNumber } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const library = await Library.findOne({ where: { id } });
    if (!library) {
      return res.status(404).json({ error: 'Library not found' });
    }
    library.name = name;
    library.location = location;
    library.phoneNumber = phoneNumber;
    await library.save();
    res.json(library);
  } catch (error) {
    console.error('Error updating library:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteLibrary = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const library = await Library.findOne({ where: { id } });
    if (!library) {
      return res.status(404).json({ error: 'Library not found' });
    }
    library.deleted = true;
    await library.save();
    res.json({ message: 'Library deleted' });
  } catch (error) {
    console.error('Error deleting library:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllLibraries,
  getLibraryById,
  createLibrary,
  updateLibrary,
  deleteLibrary,
};