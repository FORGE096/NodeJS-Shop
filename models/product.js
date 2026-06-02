const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stuck: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    purchased: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Product", productSchema);