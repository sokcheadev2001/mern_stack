const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 6000;
const colors = require("colors");
const connectDB = require("./config/db");
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/routes"));

//  overide express default error handler
app.use(errorHandler);
app.listen(port, () => console.log(`Server started at port ${port}`));
