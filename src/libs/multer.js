const multer = require('multer')
const path = require('path')

const Storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/img'),
    filename: (req,file,cb)=>{
       return  cb(null,file.originalname)
    }
})

module.exports = multer({dest: path.join(__dirname,'public/img'),storage: Storage});