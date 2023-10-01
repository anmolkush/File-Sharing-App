import express from "express";
import cors from 'cors';
import router from "./routes/routes.js";
import DBConnetion from "./database/db.js";
import dotenv from 'dotenv';

dotenv.config()
const app = express() ;


app.use(cors());
app.use('/',router)

const PORT=process.env.PORT || 3000;
DBConnetion();
app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNNING AT ${PORT} PORT`);
});