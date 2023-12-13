const {Schema, model, ObjectId}=require("mongoose")

const Beverage=new Schema({
    title: {type: String, required: true},
    ingrs: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    files:[{type: ObjectId, ref:'File'}]
})

module.exports=model('Beverage',Beverage)