const Menu = require("../models/menu.model");

const addMenu = async (req, res) => {
    const menu = new Menu(req.body);
    try {
        await menu.save();
        res.status(201).send(menu);
    } catch (e) {
        res.status(400).send(e);
    }
}

const getMenu = async (req, res) => {
    const menu = await Menu.find({});
    res.status(200).send(menu);
}

const updateMenu = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "price", "image"];
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValid) {
        return res.status(400).send({ Error: "Invalid Update" });
    }

    try {
        const menu = await Menu.findById(req.params.id);
        updates.forEach((update) => {
            menu[update] = req.body[update]
        })

        await menu.save();
    
        if (!menu) {
            return res.status(404).send()
        }

        res.send(menu);
    } catch (e) {
        res.status(500).send(e)
    }
}

const deleteMenu = async () => {
    
}

module.exports = {
    addMenu,
    getMenu,
    updateMenu,
    deleteMenu
}
