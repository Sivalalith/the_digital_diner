const express = require("express");

const app = express();

try {
  app.listen(3000, () => {
    console.log(
      "Server has started successfully and is listening on port 3000..."
    );
  });
} catch (err) {
  console.error("Error occurred while starting the server. Please check code.");
}
