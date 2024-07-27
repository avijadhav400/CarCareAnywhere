import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

const connectDb = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    if(conn){
        console.log("Database connected 🚀")
    }
    else{
        console.log("Database not connected ❌")
    }
}
connectDb()


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})