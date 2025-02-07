import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDb from "./db/index.js";
import router from "./routes/todo.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`);
});

connectDb();

app.use(router)

