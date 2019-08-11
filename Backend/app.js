const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const multer=require('multer');
const nodemailer=require("nodemailer")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('Going to Store the Data in Disk');
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log('File name is ',file.fieldname);
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
  })
app.use(express.static('../FrontEnd'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use( multer({ storage: storage }).single('file'));

app.use('/',require('./routes/routes'))
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        throw err;
    }
    else{
    console.log('Server Start');
    }
})