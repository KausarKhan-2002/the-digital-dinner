const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userRoute } = require("./src/routes/userRoute");
const mongoose = require("mongoose");
const { restaurants } = require("./src/routes/restaurantRoutes");
const { profileRoute } = require("./src/routes/profileRoute");
const { cartRoute } = require("./src/routes/cartRoute");
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// const allowedOrigins = ["https://the-digital-dinner.onrender.com" ,"http://localhost:5173"]

app.use(
  cors({
    origin: "https://the-digital-dinner.onrender.com",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());
app.use(cookieParser());

const connectionDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("DB is already connected");
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("DB is connected ✔️");
    app.listen(PORT, () =>
      console.log(`Server is listening on ${PORT} port...`)
    );
  } catch (err) {
    console.log(err.message);
  }
};

connectionDB();

app.get("/", (req, res) => res.json({ message: "done" }));

// My Routes
app.use("/auth", userRoute);
app.use("/api", restaurants);
app.use("/profile", profileRoute);
app.use("/cart", cartRoute);
