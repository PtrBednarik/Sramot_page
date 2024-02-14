const express = require('express');
const router = express.Router();

const {
    getAllPhotos,
    getPhotoByID,
    getPhotosByYear,
    createPhoto
} = require("../controllers/PhotoController");

router.get('/getAll', getAllPhotos);
router.get('/get/:id', getPhotoByID);
router.get('/getByYear/:year', getPhotosByYear);

router.post('/create', createPhoto);
module.exports = router
