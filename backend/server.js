const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 6000;
const app = express();

app.listen(port, () => console.log(`Server started at port ${port}`));
