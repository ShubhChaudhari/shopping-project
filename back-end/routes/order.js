const router = require("express").Router();
const Product = require("../model/product");
const Order = require("../model/order");
const OrderItem = require("../model/orderItem");

// Get all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get a product by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Create a new product
router.post("/", async (req, res) => {
  try {
    const { userId, totalAmount, items } = req.body;
    // Create the order
    console.log('req.body', req.body)
    const order = new Order({ userId, totalAmount });
    await order.save();

    // Create the order items
    for (const item of items) {
      const { productId, quantity, price } = item;
      const orderItem = new OrderItem({
        orderId: order._id,
        productId,
        quantity,
        price,
      });
      await orderItem.save();
    }
    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
