const Product = require("../models/model");

const getallproducts = async (req,res) =>
{
    const myData = await Product.find({name:"iphone"});
   res.status(200).json({myData});
};

const getallproductstesting = async (req,res) =>
{
    res.status(200).json({msg:"i am getallproductstesting"});
};

module.exports = {getallproducts, getallproductstesting};