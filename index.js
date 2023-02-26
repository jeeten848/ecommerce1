// import {connectToMongo} from "./db.js";
import express from 'express';
import cors from 'cors';
import plants from "./api/plants.js"
import { connect } from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const connectToMongo = ()=>{
    connect(process.env.DB_URI,()=>{
       console.log("Connected to mongo app!");
    })
}
connectToMongo();
const app = express()
const port = process.env.DB_URI || 5000

app.use(cors())
app.use(express.json())


app.use("/api/v1/plants", plants)
// app.use("/holy:id", plants)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
