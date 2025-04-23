const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const { catchError } = require("../helper/catchError");

exports.addItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const item = req.body;

    // 1. Check if product already exists
    let product = await Product.findOne({ id: item.id });

    // 2. If product doesn't exist, insert it
    if (!product) {
      product = await Product.create(item);
    }

    // 3. Find user's cart
    let cartUser = await Cart.findOne({ userId });

    if (cartUser) {
      // 4. Check if product already exists in cart
      const existingProduct = cartUser.productsId.find(
        (p) => p.id === product.id
      );

      if (!existingProduct) {
        cartUser.productsId.push({ id: product.id, quantity: 1 });
        await cartUser.save();
      }
    } else {
      // 5. Create new cart for user with the product
      cartUser = new Cart({
        userId,
        productsId: [{ id: product.id, quantity: 1 }],
      });
      await cartUser.save();
    }

    res.status(200).json({ success: true, message: "Product added to cart." });
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};

exports.getItem = async (req, res) => {
  try {
    const userId = req.user._id;

    console.log(userId);

    const cartUser = await Cart.findOne({ userId });

    if (!cartUser) {
      return res.status(200).json({
        success: true,
        message: "Your cart is empty",
        products: null,
      });
    }

    const products = [];

    for (let obj of cartUser.productsId) {
      const product = await Product.findOne({ id: obj.id });
      if (product) {
        product.quantity = obj.quantity;
        products.push(product);
      }
    }

    res
      .status(200)
      .json({ success: true, message: "Retrieved cart items", products });
  } catch (err) {
    catchError(err, res);
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity, type } = req.body;

    if (!quantity || typeof quantity !== "number" || quantity < 1) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid quantity value" });
    }

    const cartUser = await Cart.findOne({ userId });

    if (!cartUser) {
      return res
        .status(200)
        .json({ success: true, message: "Your cart is empty", products: null });
    }

    const info = cartUser.productsId.find((p) => p.id === productId);
    if (!info) {
      return res
        .status(404)
        .json({ success: false, message: "Product ID not found in cart" });
    }

    info.quantity = type === "inc" ? info.quantity + 1 : info.quantity - 1;
    await cartUser.save();

    res
      .status(200)
      .json({ success: true, message: "Quantity updated successfully" });
  } catch (err) {
    catchError(err, res);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const user = req.user;
    const { productId } = req.body;
    console.log("productId:", productId);
    console.log("user:", user);
    

    // 1. Validate productId
    if (!productId) {
      throw new Error("Product ID is required to remove an item from the cart.");
    }

    // 2. Find the cart for the logged-in user
    const cartUser = await Cart.findOne({userId: user._id});

    // 3. If cart not found
    if (!cartUser) {
      throw new Error("Cart not found. Please login or create a cart.");
    }

    // 4. Check if the product exists in cart
    const isProductExist = cartUser.productsId.some((p) => p.id == productId);
    if (!isProductExist) {
      throw new Error("Product not found in cart.");
    }

    // 5. Filter out the product to delete
    cartUser.productsId = cartUser.productsId.filter((p) => p.id != productId);

    // 6. Save the updated cart
    await cartUser.save();

    // 7. Send response
    res.status(200).json({
      success: true,
      message: "Product successfully removed from cart.",
    });
  } catch (err) {
    catchError(err, res);
  }
};
