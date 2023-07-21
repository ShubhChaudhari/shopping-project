const router = require("express").Router();
const Product = require("../model/product");
const ProductAttribute = require("../model/productAttribute")
const auth = require("../middleware/auth");

// Get all products
router.get("/",auth, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a product by ID
router.get("/:id",auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new product
router.post("/",auth, async (req, res) => {
  try {
    const { name, price,description, attributes } = req.body;
    const product = new Product({name, price,description});
    await product.save();

    // Create the product attributes
    for (const attribute of attributes) {
      const { productSize, productColour } = attribute;
      const productAttribute = new ProductAttribute({
        productId: product._id,
        productSize,
        productColour,
      });
      await productAttribute.save();
    }
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product
router.put("/:id",auth, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a product
router.delete("/:id",auth, async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
