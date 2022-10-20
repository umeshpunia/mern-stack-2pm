const router=require("express").Router()

const CatSchema=require("../models/category.model")
const ProSchema=require("../models/product.model")
const OrderSchema=require("../models/order.model")




// get all categories

router.get("/categories",(req,res)=>{

    CatSchema.find({},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message})
        if(!data) return res.status(400).json({msg:"Something Wrong"})
        res.status(200).json({msg:data})
    })

})
// single category
router.get("/category/:_id",(req,res)=>{

    const {_id}=req.params
    CatSchema.findOne({_id},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message})
        if(!data) return res.status(400).json({msg:"Something Wrong"})
        res.status(200).json({msg:data})
    })

})

// get products by category
router.get("/products/:category",(req,res)=>{

    const {category}=req.params
    ProSchema.find({category:category},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message})
        if(!data) return res.status(400).json({msg:"Something Wrong"})
        res.status(200).json({msg:data})
    })

})


// single product
router.get("/product/:_id",(req,res)=>{

    const {_id}=req.params
    ProSchema.findOne({_id},(err,data)=>{
        if(err) return res.status(500).json({msg:err.message})
        if(!data) return res.status(400).json({msg:"Something Wrong"})
        res.status(200).json({msg:data})
    })

})

router.post("/checkout",(req,res)=>{
    const {pid,quantity,price,uid,paymentId}=req.body

    let insOrder=OrderSchema({pid,quantity,price,uid,paymentId})

    insOrder.save((err,data)=>{
        if(err){
            return res.status(500).json({msg:err.message})
        }
        if(!data)
        return res.status(400).json({msg:"Please try again"})

        res.status(200).json({msg:"Ordered Successfully"})
    })

})




module.exports=router