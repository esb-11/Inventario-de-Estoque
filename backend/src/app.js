import express from "express";
import router from "./routes/router.js";
import cors from "cors";

const PORT = 3390;
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", express.text({ limit: "10mb" }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
