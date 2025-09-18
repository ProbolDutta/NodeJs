const mongoose=require('mongoose')
const menuSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required:true
    },
    taste:{
        type: String,
        required: true
    },
    is_drink: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        enum: ["chicken wings","spices","sauces"],
        required: true
    },
    num_sales: {
        type: Number,
        required: true
    }
})
const menu= mongoose.model('menu',menuSchema)
module.exports=menu