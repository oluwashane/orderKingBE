const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_address: {
        type: String,
        required: true
    },
    customer_tel: {
        type: String,
        required: true
    }
},{ timestamps: true })

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
