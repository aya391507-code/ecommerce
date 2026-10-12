const express=require('express');
const dotenv =require('dotenv')
const mongoose =require("mongoose")
const app=express()
dotenv.config() 

// Connexion à la base données
mongoose.connect(process.env.databaselocal)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });

app.get("/",(req,res)=>{
        res.send("page d'acceuil");
})
app.get("/contact",(req,res)=>{
        res.send("Bienvenue");
})

app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;