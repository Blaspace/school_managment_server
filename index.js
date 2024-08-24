import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import route from './router/allRouter.js'
import dotenv from 'dotenv'
import studentRoute from './router/studentRoute.js'
import teacherRoute from './router/teacherRoute.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(route)
app.use(studentRoute)
app.use(teacherRoute)

app.get('/',(req,res)=>{
    res.send({msg:'welcome to my school management sytem api'})
})

mongoose.connect(process.env.DB_URL)
.then(()=>{
    app.listen('8000', ()=>{
        console.log('server listening on port 8000')
    })
})

