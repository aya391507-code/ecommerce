const express=require('express');
const dotenv =require('dotenv')
const mongoose =require("mongoose")
const app=express()
dotenv.config() 
app.use(express.json())
const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")

// Connexion à la base données
mongoose.connect(process.env.databasecloud)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });

app.get("/",(req,res)=>{
        res.send("page d'acceuil");
})
app.get("/contact",(req,res)=>{
        res.send("Bienvenue");
})
const categorieRouter =require("./routes/categorie.route")
app.use('/api/categories', categorieRouter);
const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);
const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter);

app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
module.exports = app;
