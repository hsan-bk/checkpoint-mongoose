const express=require('express')
const personRouter=express.Router()
const Person =require('../models/person')

//add person to db

personRouter.post('/add',async (req,res)=>{
    try{
        let newPerson= new Person(req.body)
    let savedPerson= await newPerson.save()
    res.send({savedPerson,msg:"person added successefully"})
    } catch (error){
console.log(error)
    }
})


//get all persons

personRouter.get('/all',async (req,res)=>{
    try{
    let allPersons= await Person.find()
    res.send({allPersons})
    } catch (error){
console.log(error)
    }
})

//get person by id

personRouter.get('/:id',async (req,res)=>{
    try{
    let onePerson= await Person.findById(req.params.id)
    res.send({onePerson})
    } catch (error){
console.log(error)
    }
})


//delete by id
personRouter.delete('/:id',async (req,res)=>{
    try{
    let persons= await Person.findByIdAndDelete(req.params.id)
    res.send({persons,msg:"person deleted"})
    } catch (error){
console.log(error)
    }
})

//update by id
personRouter.put('/:id',async (req,res)=>{
    try{
    let persons= await Person.findByIdAndUpdate({_id:req.params.id},{$set:{ ...req.body}})
    res.send({msg:"person updated"})
    } catch (error){
console.log(error)
    }
})

module.exports=personRouter