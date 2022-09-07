const Product = require("../../../models/product");

//to create product
module.exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).json({
      message: "Your product is successfully created!!",
      product,
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//to update price
module.exports.updatePrice = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        price: req.body.price,
      },
      {
        new: true,
      }
    );
    await product.save();
    return res.status(200).json({
      message: "Price updated successfully!!",
      product,
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//to get all the products
module.exports.index = async function (req, res) {
  try {
    let products = await Product.find({}).sort("-createdAt");
    return res.status(200).json({
      message: "List of Products",
      products,
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
