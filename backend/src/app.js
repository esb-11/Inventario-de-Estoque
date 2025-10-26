import express from "express";

const PORT = 5500;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
