const express = require("express");
const multer = require('multer');
const path = require('path')

const app = express();
const PORT = 3000

const storage = multer.diskStorage({
    dest: './profile_images',
    filename:(req, file, cb) =>
        cb(null, createFileName(file.originalname))
});

const uploadMiddleware = multer({storage}).single("avatar");

app.post("/profile/upload", uploadMiddleware, (req, res) => {

});

app.get("/profile/picture", (req,res) => {
    /*
    ThunderClient cannot render images on it's free tier.
    Try it on your browser instead!
    */
    // const path = "./profile_images/image.jpg";
    res.sendFile(path.resolve(__dirname,'profile_images', 'image.jpg'));
});


app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`); // Log server start message
});