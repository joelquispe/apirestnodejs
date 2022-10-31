const express = require('express');
const router = express.Router();
const userSchema = require('../models/user.model');
const multer = require('../libs/multer')
router.post('/users',multer.array('images',2),(req,res)=>{
    
    req.body['photo']= req.files[0].originalname;
    req.body['portada'] = req.files[1].originalname;
    const user = userSchema(req.body);
    user.save().then((data)=>{
        res.send("correcto")
    }).catch(e=>{
        res.send(e)
    })
})

router.post('/users/login',(req,res)=>{
    
    const {email,password} = req.body;
    
    
        userSchema.findOne({'email':email,'password':password}).then((data)=>{
            res.json(data);
        }).catch(e=>{
            res.send(e);
        })
    
})

module.exports = router;










