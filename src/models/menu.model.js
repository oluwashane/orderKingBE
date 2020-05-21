const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
},{ timestamps: true })

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
