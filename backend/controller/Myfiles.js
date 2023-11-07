const Myfile = require("../models/file");
const cloudinary = require('cloudinary');
const dotenv = require('dotenv')
dotenv.config();
var CLOUDINARY_UPLOAOD_PRESET = "hdolrq4j/mh/upload"
var CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dp5qgqy1d/mh/upload"


cloudinary.v2.config({
    cloud_name: 'dp5qgqy1d',
    api_key: process.env.CLOUDINARY_API_KEY,
    url: CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const addFile = async (req, res, next) => {
    const { title, description, filename } = req.body
    try {
        const results = await cloudinary.v2.uploader.upload(req.file.path, { resource_type: 'auto', folder: CLOUDINARY_UPLOAOD_PRESET })

        if (results?.secure_url) {
            const data = {
                Myfile,
                contentType: req.file.mimetype,
                filename,
                file_url: results?.secure_url,
                format: results?.format
            }
            const newFile = await businessDistribution.create(data)
            return res.status(200).json({ message: "File added sucessfully", file: newFile });
        }
    } catch (error) {
        if (error.code === 11000) return res.status(409).json({ message: "File title already exists" })
        return res.status(error.code || 400).json({
            message: error.message || "An error occured",
            error: error,
        });
    }

};