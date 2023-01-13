import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
    _id: Number,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    salary: {type: Number, required: true},
    status: {type: String, required: true}
});

const Tech = mongoose.model('Tech', techSchema);

export {Tech};