const express = require("express");
const app = express();
const mongoose = require('mongoose');
let User = require("./Schemas/users");


const port = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://admin:pass@comp3123cluster.arhm6.mongodb.net/user?retryWrites=true&w=majority";
mongoose.connect(uri,{
    pkFactory: { createPk: () =>  new UUID().toBinary() }
})

app.post('/users', async (req,res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        city: req.body.city,
        web: req.body.web,
        zip: req.body.zip,
        phone: req.body.phone,
      })
    try{
        await user.save();
        res.status(201).send("User created Sucsesfully");
    }catch(err){
        console.log("ERROR: " + err);
        res.status(500).send(err);
    }
    
})

app.listen(port, () => {
    
})