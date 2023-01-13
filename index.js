const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const vsc = require("./model/vehicle.js");
const vehicle = require("./model/vehicle.js");
const express= require("express");
dotenv.config()
mongoose.connect(process.env.URI)
.then(res=>{
    console.log("connected to MongoDB Server")
})
.catch(err=>{
    console.log(err)
})
app.use(bodyParser.urlencoded({extended:true}))


app.set("view engine","ejs");
//route

app.get("/",async(req,res)=>{
    const vehicles = await vsc.find();
    res.render("show.ejs",{
        vehicles:vehicles
    })});

app.get("/edit/:id", async (req, res) => {
    const vehicle = await vsc.findById(req.params.id);
    res.render("edit.ejs", { vehicle: vehicle });
});

app.post("/update/:id", async (req, res) => {
    await vsc.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    await vsc.findByIdAndDelete(req.params.id);
    res.redirect("/");
});


app.get("/newform",(req,res)=>{
    res.render("index.ejs");
})
app.use(express.urlencoded({extended:true}));
app.post("/save",(req,res)=>{
    const data = new vsc(req.body);
    // res.send("Data Save...............");
    data.save();
    res.redirect("/");
});
// server
// app.get("/",async(req,res)=>{
//     const vehicles = await vehicle.find();
//     res.render("index",{
//         vehicles:vehicles
//     })
// })

// for filter
app.get("/", async (req, res) => {
    const query = req.query.search;
    const vehicles = await vsc.find({
        $or: [
            { v_type: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { engine: { $regex: query, $options: 'i' } },
            { color: { $regex: query, $options: 'i' } }
        ]
    });
    res.render("show.ejs", {
        vehicles: vehicles
    });
});



app.listen(process.env.PORT,()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})

