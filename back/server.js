const cors=require('cors')
const express=require('express')
const routes=require('./routes')
const app=express()
const PORT=process.env.PORT ||8080
const dotenv=require('dotenv')
dotenv.config()

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use('/',routes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})