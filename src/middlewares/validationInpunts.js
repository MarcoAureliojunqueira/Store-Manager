const { schemaSale, schemaQuantity } = require('./schemas');

const validandoSales = (req, res, next) => {
  const sales = req.body;

  const errorArr = [];

  sales.forEach(({ productId, quantity }) => {
    const { error } = schemaSale.validate({ productId, quantity });
    if (error) errorArr.push(error);
  });

  if (errorArr.length > 0) {
    return res.status(400).json({ message: errorArr[0].message });
  }

  next();
};

const validandoQuantity = (req, res, next) => {
  const sales = req.body;

  const errorArr = [];

  sales.forEach(({ productId, quantity }) => {
    const { error } = schemaQuantity.validate({ productId, quantity });

    if (error) {
      errorArr.push(error);
    }
  });

  if (errorArr.length > 0) {
    return res.status(422).json({ message: errorArr[0].message });
  }

  next();
};

module.exports = { validandoSales, validandoQuantity };
