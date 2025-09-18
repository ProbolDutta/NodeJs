const express = require('express')
const route = express.Router()
const Person=require('./../models/person')
route.post('/', async(req,res)=>{
    try{
        const data = req.body
        const newPerson=new Person(data)
        const response = await newPerson.save()
        console.log('data saved')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})
route.get('/', async(req,res)=>{
    try{
        const response=await Person.find()
        console.log('data fetched')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).send({error: 'Internal Server Error'})
    }
})

route.get('/:a',async(req,res)=>{
    try{
            const a=req.params.a
            const response=await Person.find({work:a})
            console.log('Parametrized Data Fetched for Person')
            res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

route.put('/:id', async(req,res)=>{
    try{
        const id = req.params.id
    const update = req.body
    const response = await Person.findByIdAndUpdate(id,update,{
        new: true,
        runValidators: true
    })
    console.log('updated for person')
    res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }

    })

    route.delete('/:id', async(req,res)=>{
        try{
            const id = req.params.id
        const response = await Person.findByIdAndDelete(id)
        console.log('deleted')
        res.status(200).json({message: 'deleted successfully'})
        }catch(err){
            console.log(err)
            res.status(500).json("Internal Server Error")
        }
    })

module.exports=route