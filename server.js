const express = require("express");
const app = express();

const expressFormidable = require("express-formidable");
app.use(expressFormidable());

const cors = require("cors");
app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

/*************************/
app.listen(3001, () => {
  console.log("Server on the moon");
});
