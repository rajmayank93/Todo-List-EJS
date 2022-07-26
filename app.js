const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");

const app=express();

let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
   let day=date.getDate();
    
    res.render("list",{listTitle:day,newListItem:items});
});

app.post("/",function(req,res){
    item=req.body.newItem;
    console.log(req.body.list);

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newListItem:workItems});
});


app.get("/about",function(req,res){
    res.render("about");

})


app.listen(3000,function(req,res){
    console.log("The server is started at port 3000");
});