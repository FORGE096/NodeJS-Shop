const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adminRouter = require("./routes/users/admin_router.js");
const userRouter = require("./routes/users/user_router.js");

const app = express();
const PORT = 65510;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((request, response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
});

app.use(express.json());

app.use("/admin", adminRouter);

app.use(userRouter);

mongoose.connect("mongodb://localhost/Shop").then(result => console.log("Connected")).catch(error => console.log(error));


app.listen(PORT, () => {
    console.log(`Rinning On Port ${PORT}`);
});