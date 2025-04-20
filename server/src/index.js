const express = require("express");
const cors = require("cors");
const { connectToMongoDB } = require("./configs/database");
const menuRouter = require("./routes/menu.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

connectToMongoDB()
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(3000, () => {
      console.log(
        "Server has started successfully and is listening on port 3000..."
      );
    });
  })
  .catch(() => {
    console.error(
      "Error occurred while starting the server. Please check code."
    );
  });

app.use("/menu", menuRouter);
