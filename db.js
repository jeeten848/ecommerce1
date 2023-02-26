// import app from "./server.js"
import { connect } from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

const connectToMongo = ()=>{
    connect(process.env.DB_URI,()=>{
       console.log("Connected to mongo app!");
    })
}

module.exports = connectToMongo