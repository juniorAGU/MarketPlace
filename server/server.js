import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { ConnectDB } from './DBconfig/db.js';
import cookiePerser from 'cookie-parser';
import helmet from 'helmet';
import sanitizer from 'mongo-sanitize';
import { xss } from 'express-xss-sanitizer';

// imported files
import { authRoute } from './routes/Authroute.js';
import { basicLimiter } from './middlewears/ratelimiter.js';
import { productRouth } from './routes/productRoutes.js';



const app = express();
app.use(helmet());

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
ConnectDB();
app.use(express.json());
app.use(cookiePerser());
app.use(xss());
app.use(basicLimiter);


app.get("/", (req,res) => {
    res.send("backend is running underground")
})

// api Routes 
app.use("/", authRoute);
app.use("/", productRouth);




app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:5000")
})