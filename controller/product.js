const Product = require("../models/model");

const getallproducts = async (req,res) =>
{

    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};

    if(company)
    {
        queryObject.company = company;
    }
    if(featured)
    {
        queryObject.featured = featured;
    }
    if(name)
    {
        queryObject.name = { $regex: name, $options:"i"};
    }
    let apidata = Product.find(queryObject);
    if(sort)
    {
        let sortfix = sort.replace(","," ");
        apidata = apidata.sort(sortfix);
    }
    if(select)
        {
            let selectfix = select.split(",").join(" ");
            apidata = apidata.select(selectfix);
        }

    const myData = await apidata;
   res.status(200).json({myData});
};

const getallproductstesting = async (req,res) =>
{
    const myData = await Product.find(req.query).select("name");
    res.status(200).json({myData});
};

module.exports = {getallproducts, getallproductstesting};