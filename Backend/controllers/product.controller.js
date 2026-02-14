const db = require('../services/dynamodb.service');

exports.getProducts = async (req, res) => {
  const products = await db.scan('LeatherProducts');
  res.json(products);
};
