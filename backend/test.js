import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(5001, () => {
  console.log("Server running on 5001");
});

setInterval(() => {
  console.log("Alive...");
}, 5000);