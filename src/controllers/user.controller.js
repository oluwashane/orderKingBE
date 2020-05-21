const User = require("../models/user.model");

const newUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateToken();
        res.status(201).send({
            user,
            token
        });
    } catch (e) {
        res.status(400).send(e);
    }
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.send({
            user,
            token
        });
    } catch (e) {
        res.status(400).send();
    }
}

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
}

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send();
    } catch (e) {
        res.status(500).send();
    }
}

const getUsers = async (req, res) => {
    try {
        const details = await User.find({});
        res.send(details);
    } catch (e) {
        res.status(500).send()
    }
}

const viewProfile = async (req, res) => {
    res.send(req.user);
}

const updateProfile = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["password", "tel", "address", "username"];
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValid) {
        return res.status(400).send({ Error: "Invalid update!"});
    }

    try {
        const user = req.user;
        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e)
    }
}

const deleteUser = async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user);
    } catch (e) {
        res.status(500).send()
    }
}

module.exports = {
    newUser,
    loginUser,
    logoutUser,
    logoutAll,
    getUsers,
    viewProfile,
    updateProfile,
    deleteUser   
}
