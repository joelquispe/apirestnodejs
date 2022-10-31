const express = require('express');
const router = express.Router();
const productSchema = require('../models/product.model');
const multer = require('../libs/multer');
router.post('/products',multer.single('image'),(req,res)=>{
    const file = req.file;
    req.body["image"] = file.originalname;
    
    const product = productSchema(req.body)
    
    product.save().then((data)=>{
        res.send(file);
    }).catch(e=>{
        res.json({"error":e})
    })
})

// *find all products
router.get("/products",(req,res)=>{
    productSchema.find().then((data)=>
        res.json(data)).catch((e)=>
            res.json({"error":e})
        );
})

// *find by id
router.get("/products/:id",(req,res)=>{
    const {id} = req.params;
    productSchema.findById(id).then((data)=>
        res.json(data)).catch((e)=>
            res.json({"error":e})
        );
})
// *update 
router.put("/products/:id",(req,res)=>{
    const {id} = req.params;
    const {name,price,description} = req.body;
    productSchema.updateOne({_id:id},{$set: {name,price,description}}).then((data)=>
        res.json(data)).catch((e)=>
            res.json({"error":e})
        );
})

// *delete
router.delete("/products/:id",(req,res)=>{
    const {id} = req.params;
    productSchema.remove({_id:id}).then((data)=>
        res.json(data)).catch((e)=>
            res.json({"error":e})
        );
})

module.exports = router;