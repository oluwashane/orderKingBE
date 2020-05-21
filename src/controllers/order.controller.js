const Order = require("../models/order.model");
// const User = require("../models/user.model");


const placeOrder = async (req, res) => {
    const order = new Order({
        ...req.body,
        customer: req.user._id,
        customer_name: req.user.name,
        customer_address: req.user.address,
        customer_tel: req.user.tel
    })

    try {
        await order.save();
        res.status(200).send(order);
    } catch (e) {
        res.status(400).send(e)
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await Order.find({});
        console.log(order);
        res.send({ order });
    } catch (e) {
        res.sendStatus(500)
    }
}

const getItemOrdered = async (req, res) => {
    try {
        await req.user.populate("orders").execPopulate();
        res.send(req.user.orders);
    } catch (e) {
        res.status(500).send()
    }
}

module.exports = {
    placeOrder,
    getOrder,
    getItemOrdered
}