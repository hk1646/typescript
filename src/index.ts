import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router/index"

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());

app.use(cookieParser());
app.use(bodyParser.json());



const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server running on port 8080 -> ")
})

mongoose.Promise = Promise;
const MONGODB_URI = "mongodb+srv://hemanthkumar:gemanth123@cluster0.bjacwk3.mongodb.net";
mongoose.connect(MONGODB_URI);

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use('/',router())