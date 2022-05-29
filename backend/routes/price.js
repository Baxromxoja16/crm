const { Router } = require("express");
const router = Router();
const Price = require("../model/Price");
const { answerPrice, getPrice, deletePrice,editPrice } = require("../controllers/answer");

router.get("/", getPrice);

router.post("/add", answerPrice);
router.delete("/delete/:id", deletePrice);
router.put("/edit/:id", editPrice);

module.exports = router;
