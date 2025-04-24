import express from "express";
import { fileURLToPath } from "url";
import * as path from 'path';

import indexRouter from "./routes/index.routes.js";   

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));  
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRouter);

export default app;