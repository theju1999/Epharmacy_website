

var Product = require('../models/product');
 
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/project', {useNewUrlParser: true});

// var Product = require("../models/product")

// var mongoose = require("mongoose");
// const dotenv = require('dotenv').config();

// const mongo_uri = process.env.mongo_uri;



// mongoose.connect('mongodb://yourusername:yourpassword@ds121825.mlab.com:11025/yourmongodb', {useNewUrlParser: true});
//     mongoose.connection.once('open', function(){



// const connect = mongoose.createConnection('mongodb://localhost:27017/project', {useNewUrlParser: true,useUnifiedTopology: true});
// connect.then((db)=>{
//     console.log("Database Connected Successfully");
// }, (err)=>{
//     console.log("Error occur while connecting ", err);
// })

var products = [

    new Product({
        imagePath: "/images/crocinmain.png",
        Name: "Crocin Advance",

        description:
            "Crocin Advance Tablet is a drug that is used for pain relief and fever control. It is used for the treatment of a variety of disorders, including headache, body ache, toothache, and the common cold.",
            Quantity:"1 sheet(25 tablets)" ,
        
        price: 80,
        prescription:"Not-Required"
    }),
    new Product({
        imagePath: "/images/dolo3.jpeg",
        Name: "Dolo-650",
        description:
            "Dolo 650 Tablet is a medicine used to relieve pain and reduce fever. It is used to treat many conditions such as headaches, body aches, toothaches, and the common cold",
            Quantity:"1 sheet(25 tablets)" ,
        
            price: 150,
        prescription:"Not-Required"
    }),
    new Product({
        imagePath: "/images/benadryl.jpg",
        Name: "Benadryl",
        description:
            " benadryl Syrup is  anti-allergic primarily   used to treat allergic symptoms like sneezing, watery eyes, runny nose, itchy nose/throat, common cold symptoms, and cough",
            Quantity:"1 (250 ml)" ,
        
            price: 100,
        prescription:"Not-Required"
    }),
    new Product({
        imagePath: "/images/dettol2.jpg",
        Name: "Dettol Anticeptic Liquid",
        description:
            "Anticeptic liquid helps to stop the growth of microorganisms on the skin.They're used daily in medical settings to reduce the risk of infection and stop the spread of germs.",
            Quantity:"1 (60 ml)" ,
        
            price: 80,
        prescription:"Not-Required"
    }),
    new Product({
        imagePath: "/images/lifebsanitizer.jpg",
        Name: "Lifebuoy Hand Sanitizer",
        description:
            "Lifebuoy Hand Sanitizer is a water-less, alcohol-based sanitizer with 70% alcohol that instantly kills 99.99% germs & bacteria.It provides protection against stomach, respiratory and skin-infection causing germs & bacteria.  ",
            Quantity:"1 (50 ml)" ,
        
            price: 60,
        prescription:"Not-Required"
    }),
    new Product({
        imagePath: "/images/orthooil.jpg",
        Name: " Dr. Ortho Oil",
        description:
            "Dr. Ortho oil is an ayurvedic formulation blended with oil from 8 efficacious medicinal plants. These therapeutic properties of medicinal herbal oils helps in relieving pain associated with muscles and joint pains of neck, shoulder, legs and back",
            Quantity:"1(100 ml + 20 ml extra)" ,
         
            price:80,
        prescription:"Not-Required"
    }),
        new Product({
            imagePath:"/images/zerofat.jpg",
            Name: "Zerofat",
            description:
                "Zerofat 120mg Tablet is a medicine used in the treatment of obesity. It helps the body in blocking the absorption of fats from the small intestines and stomach.",
                     
                Quantity:"1 sheet(10 tablets)" ,
                price: 280,
                     
    
            prescription:"Required"
        }),
        new Product({
            imagePath:"/images/nobelplus.jpg",
            Name: "Nobel Plus",
            description:
                "Nobel Plus Tablet 10's is prescribed mainly to treat pain and get relief from discomfort caused by conditions like mild migraine, tooth pain, arthritis, period pain, back pain, cold/ flu pain and other types of short-term pains.",
                Quantity:"1 sheet(10 tablets)" , 
                price: 50,
            prescription:"Required"
        }),
    
        new Product({
               imagePath:"/images/moovspray.jpg",
                Name: "Moove Spray",
                description:
                    "Moov pain relieving spray is  made using 100% ayurvedic ingredients which  helps in relaxing muscle stiffness and relieving pain effectively.",
                    Quantity:"1 (50 ml)" ,   
                    price: 70,
                prescription:"Not-Required"
            }),
        new Product({
            imagePath:"/images/himpainbalm.jpg",
           Name: "Himalaya Pain Relief Oi",
            description:"Enriched with Sweet Flag, Drumstick, and Cedar Tree extracts, Himalaya's  Pain Relief Oil provides complete relief from neuromuscular pain and arthritis associated pain.",
            Quantity:"1 (50 gm)" ,
            price: 100,
            prescription:"Not-Required"
         }),
        new Product({
            imagePath:"/images/nutrichavanprash.jpg",
               Name: "Dabur Chyawanprash",
                 description:
                     "Dabur Chyawanprash  boosts ability to fight illnesses. It is 2 spoons of protection with good taste .Dabur Chyawanprash is a daily dose for your family to build Strength & Stamina",
                     Quantity:"1 (250 gm)" ,
                     price: 150,
                 prescription:"Not-Required"
             }),
        new Product({
            imagePath:"/images/health1.png",
              Name: "Ensure Protein",
                 description:
                     "Ensure® is a complete, balanced nutrition supplement designed for adults. A tasty and nutritious glass of Ensure® provides high quality protein and 31 other essential nutrients required for a healthy diet",
                     Quantity:"1 (100 gm)" ,       
                     price: 150,
                 prescription:"Not-Required"
             })
    // new Product({
    //     imagePath:"/images/moovspray.jpg",
    //     Name: "Moove Spray",
    //     description:
    //         "Moov pain relieving spray is  made using 100% ayurvedic ingredients which  helps in relaxing muscle stiffness and relieving pain effectively.",
    //            price: 70,
    //     prescription:"Not-Required"
    // }),
    // new Product({
    //     imagePath:"/images/himpainbalm.jpg",
    //     Name: "Himalaya Pain Relief Oi",
    //     description:"Enriched with Sweet Flag, Drumstick, and Cedar Tree extracts, Himalaya's  Pain Relief Oil provides complete relief from neuromuscular pain and arthritis associated pain.",
    //     price: 100,
    //     prescription:"Not-Required"
    // }),
    // new Product({
    //     imagePath:"/images/nutrichavanprash.jpg",
    //     Name: "Dabur Chyawanprash",
    //     description:
    //         "Dabur Chyawanprash  boosts ability to fight illnesses. It is 2 spoons of protection with good taste .Dabur Chyawanprash is a daily dose for your family to build Strength & Stamina",
    //     price: 150,
    //     prescription:"Not-Required"
    // }),
    // new Product({
    //     imagePath:"/images/health1.png",
    //     Name: "Ensure Protein",
    //     description:
    //         "Ensure® is a complete, balanced nutrition supplement designed for adults. A tasty and nutritious glass of Ensure® provides high quality protein and 31 other essential nutrients required for a healthy diet",
    //                price: 150,
    //     prescription:"Not-Required"
    // }),
    // new Product({
    //     imagePath: "/images/daburgripe.jpg",
    //     Name: "Woodwards Gripe water",
    //     description:
    //         "Woodwards Gripe water is for the symptomatic relief of distress associated with wind in infants up to one year old. These doses may be given during or after each feed or up to six times in 24 hours",
    //     price: 80,
    //     prescription:"Not-Required"
    // }),
    // new Product({
    //     imagePath: "/images/johnson.jpg",
    //     Name: "Johnson's Baby oil",
    //     description:"This medication is used as a moisturizer to treat or prevent dry, rough, scaly, itchy skin and minor skin irritations (e.g., diaper rash, skin burns from radiation therapy).Emollients are substances that soften and moisturize the skin and decrease itching and flaking",
    //     price: 100,
    //     prescription:"Not-Required"
    // })
]

var done = 0
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result){
        done++
        if (done === products.length) {
            exit()
        }
    })
}

function exit(){
    mongoose.disconnect()
}
