const {Schema, model, ObjectId}=require("mongoose")

const Hookah=new Schema({
    title: {type: String, required: true},
    ingrs: {type: String, required: true},
    price: {type: Number, required: true},
    files:[{type: ObjectId, ref:'File'}]
})

module.exports=model('Hookah',Hookah)