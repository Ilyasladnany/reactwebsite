let Product=require('../models/productModel')
exports.getAllProducts = async (req,res)=>{
    const produits= await Product.find()
    
    res.status(200).json({ 
        success:true,
        count:produits.length,
        produits
     })
}

//------------------ajout-------------------------------------

exports.addProduct= async (req,res)=>{
    const produit= new Product(req.body)
    await produit.save()
    res.status(200).json({
        success:true,
        produit
    })
}

exports.getProductById = async (req,res)=>{
    
    const produit= await Product.findOne({
        _id:req.params.idproduct
    })
    res.status(200).json({
        success:true,
        produit
    })
}

//------------------------------update---------------
exports.updateProduct = async (req,res)=>{
    const update_prod= await Product.updateOne( 
        {_id:req.params.idproduct},
        {
            $set:req.body
        }
    )
    res.status(200).json({
        success:true,
        update_prod
    })
}


//-----------------suppresion------------------------
exports.deleteProduct = async(req,res)=>{
    const del_prod= await Product.deleteOne(
        {_id:req.params.idproduit}
    )
    res.status(200).json({
        deleted:true,
        del_prod
    })
}