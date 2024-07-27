import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    carModel: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
    },
    date: {
        type:Date,
        required: true
    }
})

const Service = model('Service', serviceSchema)

export default Service