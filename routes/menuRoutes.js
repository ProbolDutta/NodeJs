const express = require('express')
const route=express.Router()

const Menu=require('./../models/menu')

route.post('/', async(req,res)=>{
    try{
        const data = req.body
    const newMenu = Menu(data)
    const response = await newMenu.save()
    console.log('data saved for menu')
    res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

route.get('/',async(req,res)=>{
    try{
        const response = await Menu.find()
        console.log('data fetched for menu item')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(200).json({error: 'Internal Server Error'})
    }
})

route.get('/:a', async(req,res)=>{
    try{
        const a = req.params.a;
    const response= await Menu.find({ingredients:a})
    console.log('data fetched for parametrize menu')
    res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal server Error'})
    }

})

route.put('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        const updated = req.body
        const response = await Menu.findByIdAndUpdate(id,updated,{
            new: true,
            runValidators: true
        })
        console.log('data updated')
        res.status(200).json(response)
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal server Error'})
    }
})

route.delete('/:id', async(req,res)=>{
    try{
        const id =req.params.id
    const response= await Menu.findByIdAndDelete(id)
    console.log('data removed')
    res.status(200).json({message: 'Deleted successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Internal server Error'})
    }
    
})
module.exports=route