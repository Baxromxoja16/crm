const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const priceRouter = require("./routes/price");
const MongoDB = require("./config/db");
const path = require("path");

MongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000 || process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "client","build","index.html"));
    
  });
}

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
