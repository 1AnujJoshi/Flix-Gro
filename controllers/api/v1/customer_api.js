const Customer = require("../../../models/customer");

//api to fetch list of all the customers
module.exports.index = async function (req, res) {
  try {
    let customers = await Customer.find({}).sort("-createdAt");
    return res.status(200).json({
      message: "List of Customers",
      customers,
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//api to create a customer
module.exports.createCustomer = async function (req, res) {
  try {
    const customer = await Customer.create(req.body);
    return res.status(200).json({
      message: "Customer created successfully !!",
      customer,
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
