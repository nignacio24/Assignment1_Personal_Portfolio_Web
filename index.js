const express = require("express");
const app = express();
const Joi =  require("joi");

app.use(express.static('public'));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    res.render("pages/index");
});

app.listen(5000, ()=>{
    console.log("App is running");
})