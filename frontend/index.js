const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const priceRouter = require("./routes/price");
const MongoDB = require("./config/db");

MongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000 || process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/price", priceRouter);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
