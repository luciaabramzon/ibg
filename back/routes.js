const express=require('express')
const router=express.Router()
const axios=require('axios')
const dotenv=require('dotenv')
dotenv.config()

const apiKey=process.env.NASA_API_KEY

router.get('/apod',async(req,res)=>{
    try{
        const response=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        res.status(200).json(response.data)
    }catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/apodbydate',async(req,res)=>{
    try{
        const {searchDate}=req.query
        const response=await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${searchDate}`)
        res.status(200).json(response.data)
    }catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/mars',async(req,res)=>{
    try{
        const response=await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}&page=1&per_page=14`)
        res.status(200).json(response.data)
    }catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/neo',async(req,res)=>{
    try{
        const response=await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`)
        res.status(200).json(response.data)
    }catch(err){
        res.status(500).json({error:err})
    }
})

module.exports=router