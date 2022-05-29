const Price = require("../model/Price");

exports.getPrice = async (req, res) => {
  const price = await Price.find();
  var umumiy = 0;

  for (var i = 0; i < price.length; i++) {
    umumiy += price[i].natija;
  }

  const PricesFind = await Price.find();

  res
    .status(201)
    .json({ message: "Success", data: PricesFind, umumiy: umumiy });
};

exports.answerPrice = async (req, res) => {
  const { oldPrice, endPrice } = req.body;

  const event = new Date();
  const price = await Price.find();

  const answPrice = new Price({
    oldPrice,
    endPrice,
    natija: eval(endPrice - oldPrice),
    dataAdd: `Soat ${event.getHours()} : ${event.getMinutes()};   ${event.getDate()} : ${
      event.getUTCMonth() + 1
    } : ${event.getFullYear()}`,
  });

  await answPrice.save();

  const PricesFind = await Price.find({});

  res.status(201).json({ message: "Success", data: PricesFind });
};

exports.deletePrice = async (req, res) => {
  const { id } = req.params;

  await Price.findByIdAndDelete(id);

  res.status(201).json();
};

exports.editPrice = async (req, res) => {
  const { id } = req.params;
  const price = req.body;
  
  const event = new Date();
  price.natija = eval(req.body.endPrice - req.body.oldPrice);
  price.dataAdd = `Soat ${event.getHours()} : ${event.getMinutes()};   ${event.getDate()} : ${
    event.getUTCMonth() + 1
  } : ${event.getFullYear()}`;

  const updatedPrice = await Price.findByIdAndUpdate(
    id,
    { ...price, id },
    { new: true }
  );

  res.status(201).json(updatedPrice);
};
