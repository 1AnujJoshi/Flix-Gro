const express = require("express");
const port = 8000;
const app = express();
app.use(express.urlencoded({ extended: false }));

const db = require("./config/mongoose");

// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
