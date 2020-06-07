const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const userRouter = require("./routes/user.routes");
const orderRouter = require("./routes/order.routes");
const menuRouter = require("./routes/menu.routes");
const swaggerDocumentation = require("./swagger.json");
const app = express();


app.get("/test", (req, res) => {
    res.send({
        name: "shane",
        age: 22
    })
})


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation))
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(orderRouter);
app.use(menuRouter);

module.exports = app;
