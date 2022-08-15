require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");

const express = require("express");
const app = express();

const booksRouter = require("./routes/books");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/books">books route</a>');
});

app.use("/api/v1/books", booksRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3005;

const start = async () => {
  try {
    // connectDB
    await mongoose.connect("mongodb://localhost:27017/books");
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
