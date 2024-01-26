const express = require("express")
const mongoose = require("mongoose")
const { validateForm, isvalidated } = require("./Middlewears")
const { addform } = require("./Controllers/form")
const app = express()

app.get('/', function (req,res) {
res.send("hello world")
})

 mongoose.connect("mongodb://localhost:27017").then(()=>{
   console.log("Database Connected")

  })
  app.post("/addForm",validateForm,isvalidated,addform)
app.listen(5000)