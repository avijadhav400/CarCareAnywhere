import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import { postService } from './controllers/Services.js'
import { getLogin, postSignup } from './controllers/User.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

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

app.get('/health', (req, res)=>{
    res.json({
        success: true,
        message: 'Server is healthy'
    })
})

app.post('/service', postService)

app.post('/signup', postSignup)

app.post('/login', getLogin)