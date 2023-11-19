import express from "express";
import Colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";

//config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

// middleWares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

//rest api
app.get('/', (request, response) => {
    response.send("Welcome to our medical shop")
})

//port

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
})