/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const router = require('express').Router();
const Cart = require('../models/Cart_model');

router.route('/').get((req, res) => {
  Cart.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { cartId } = req.body;
  const { sku } = req.body;
  const  nUnits  = Number(req.body.nUnits);

  const newCart = new Cart({
    cartId,
    sku,
    nUnits,
  });

  newCart.save()
    .then(() => res.json('Cart added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/:id').get((req, res) => {
  Cart.findById(req.params.id)
    .then((Cart) => res.json(Cart))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then(() => res.json('Cart deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/update/:id').patch((req, res) => {
  Cart.findById(req.params.id)
    .then((Cart) => {
      Cart.cartId = req.body.cartId;
      Cart.sku = req.body.sku;
      Cart.nUnits = Number(req.body.nUnits);
      Cart.save()
        .then(() => res.json('Cart updated'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
