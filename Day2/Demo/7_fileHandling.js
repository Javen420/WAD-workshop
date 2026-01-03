const express = require("express");
const multer = require('multer');
const path = require('path')

const app = express();
const PORT = 3000

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.resolve(__dirname,'profile_images'));  // Save files to 'profile_images' folder
  },
  filename: function (req, file, cb) {
    // Save file with original name
    cb(null, createFileName(file.originalname));
  }
});

function createFileName(fileName){
    //Do something to file name
    return fileName
}

const uploadMiddleware = multer({storage: storage}).single("avatar");

app.get("/", (req,res) => {
    res.render('7_upload')
})

app.post("/profile/upload", uploadMiddleware, (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    res.send('Profile photo has been uploaded');
});

app.get("/profile/:img", (req,res) => {
    /*
    ThunderClient cannot render images on it's free tier.
    Try it on your browser instead!
    */
   
    //This route takes the file name from the query and loads the correct image
    //The query must include the file extension

    //Creating an aboslute path to the image before sending it to the client.
    res.sendFile(path.resolve(__dirname,'profile_images', req.params.img));
});


app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${PORT}`); // Log server start message
});