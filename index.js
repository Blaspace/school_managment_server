import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import route from './router/allRouter.js'
import dotenv from 'dotenv'
import studentRoute from './router/studentRoute.js'
import teacherRoute from './router/teacherRoute.js'
import cloudinary from 'cloudinary'

dotenv.config()

const app = express()

const dburl = 'mongodb://localhost:27017/schoolManagement'
app.use(cors())
app.use(express.json())
app.use(route)
app.use(studentRoute)
app.use(teacherRoute)
  
cloudinary.v2.config({
    cloud_name: 'dl9dxseum', 
    api_key: '282535896357334', 
    api_secret: 'R6I7fKAgdiC_dEbhXmqskdbv6lU' 
})
app.get('/',(req,res)=>{
    res.send({msg:'welcome to my school management sytem api'})
})

mongoose.connect(process.env.DB_URL)
.then(()=>{
    app.listen('8000', ()=>{
        console.log('server listening on port 8000')
    })
})

