const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const orderRouter = require("./routes/order.routes");
const menuRouter = require("./routes/menu.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(orderRouter);
app.use(menuRouter);

module.exports = app;
