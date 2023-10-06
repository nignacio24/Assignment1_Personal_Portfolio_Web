// 
//     Author: Nikko Martin Ignacio
//     Student ID: 301294860
//     Date: October 5, 2023
//     Filename: src/index.js  
// 

const express = require("express");
const app = express();
const router = express.Router();

app.use(express.static('public'));
app.use(express.json());
app.use('/', router);

app.set("view engine", "ejs");

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/about_us", (req, res) => {
    res.render("pages/aboutus", {
        title: "About Us",
        first_paragraph: "As a passionate software engineering technician currently pursuing his education at Centennial College. Nikko Martin Ignacio is a student with keen interest in web design, graphics design, and product designs.",
        second_paragraph: "He's always been drawn to the world of technology and the endless possibilities it offers. His journey in the field of software engineering began with a curiosity to understand how things work and the desire to create solutions that simplify complex problems.",
        third_paragraph: "In addition to his software engineering pursuits, Nikko have a creative side that fuels his passion for design. He believe that technology and design are intertwined, and this belief has led him to explore and excel in various design disciplines.",
        fourth_paragraph: "If you want to see Nikko's Resume, click on the button 'View Resume', if you want to download it, click 'Download Resume'."
    });
});

router.get("/projects", (req, res) => {
    res.render("pages/projects", {
        title: "Projects",
        header_details: "Welcome to Nikko's Projects Portfolio. These projects represent the dedication, creativity, and technical skills he honed throughout his studies. Each project reflects a unique aspect of his passion for software engineering, design, and innovation.",
        blog_project_details: "Dive into his world of content creation. This project demonstrates his ability to design and develop a dynamic blog platform that engages readers with informative and engaging content.",
        form_project_details: " Discover the art of user interaction. This project focuses on creating user-friendly forms and web interfaces, emphasizing seamless communication between users and applications.",
        realestate_project_details: "Experience the beauty of visually stunning and functional web design. This project showcases his talent for crafting real estate websites that captivate users and facilitate property exploration.",
        ecommerce_project_details: "Witness the fusion of technology and commerce. This project illustrates his expertise in developing e-commerce websites that facilitate online shopping and transactions.",
        game_project_details: "Enter the realm of interactive entertainment. Explore a game project that highlights his proficiency in using JavaScript to create engaging gaming experiences.",
    });
});

router.get("/services", (req, res) => {
    res.render("pages/services", {
        title: "Services",
        header_details: "Explore a world of creativity, innovation, and design. Nikko's Services Portfolio is a showcase of his expertise and dedication in the fields of web design, graphics design, and product design.",
        web_dev_details: "Nikko specialize in crafting visually appealing and user-friendly websites. His goal is to transform your online presence into a digital masterpiece that not only captures attention but also provides an exceptional user experience. He combine his technical skills with an eye for aesthetics to create websites that leave a lasting impression.",
        graphics_details: "Visual communication is a powerful tool, and he is here to help you harness its potential. From logos and branding to marketing materials and illustrations, He is dedicated to creating captivating graphics that convey your message effectively and elevate your brand.",
        product_details: "Innovation and user-centric design are at the core of my product design services. Nikko is passionate about creating products that not only look stunning but also function seamlessly. Whether it's a physical product or a digital interface, He is focus on delivering solutions that meet the needs of your target audience.",
    });
});

router.get("/contact_us", (req, res) => {
    res.render("pages/contactus", {
        title: "Contact Us",
        header_details: "Get in touch with us—we're here to listen, assist, and connect. Your questions, feedback, and inquiries are important to us. Feel free to reach out using this form or check our contact details below!",
    });
});



app.listen(5000, ()=>{
    console.log("App is running");
})

