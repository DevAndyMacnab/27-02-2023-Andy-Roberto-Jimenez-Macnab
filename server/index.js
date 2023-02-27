import express from "express";
import cors from "cors";
import router from "./routes/manage.routes.js";
import { PORT } from "./config.js";
import morgan from "morgan";

const app= express();

//MIDDLEWARES

app.use(cors())
app.use(express.json());
app.use(router)


app.listen(PORT)
console.log(`Listening on port ${PORT}`)