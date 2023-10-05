const express = require("express");
const app = express();
const Joi =  require("joi");
const router = express.Router();

app.use(express.static('public'));
app.use(express.json());
app.use('/', router);

app.set("view engine", "ejs");

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/aboutUs", (req, res) => {
    res.render("pages/aboutus", {
        title: "About Us",
        details: [
            
        ],
    });
});

router.get("/projects", (req, res) => {
    res.render("pages/projects", {
        title: "Lists of Projects",
        details: [
            
        ],
    });
});

router.get("/services", (req, res) => {
    res.render("pages/services", {
        title: "Lists of Services",
        details: [
            
        ],
    });
});

router.get("/contactUs", (req, res) => {
    res.render("pages/contactus", {
        title: "Contact Us",
        details: [
            
        ],
    });
});



app.listen(5000, ()=>{
    console.log("App is running");
})

