const Photo = require('../models/Photo')
const Todo = require("../models/Todos");

exports.getAllPhotos = async (req, res) => {
    const photos = await Photo.find();
    res.json(photos)
};
exports.getPhotoByID = async (req, res) => {
    const t = await Photo.findById({_id : req.params.id })
    res.json(t)
};
// find photos by year
exports.getPhotosByYear = async (req, res) => {
    const photos = await Photo.find({year : req.params.year})
    res.json(photos)
};
exports.createPhoto = async (req, res) => {
    const newPhoto = new Photo(
        // req.body     //what is Vue App sending to DB
        {
            title: "Baby fotka",
            filepath: "cesta-do-kelu",
            year: "2000"
        }
    );
    const savedPhoto = await newPhoto.save()
    res.json(savedPhoto)
};
