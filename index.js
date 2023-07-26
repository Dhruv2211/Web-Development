import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000; 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//let newItemsArray = [];

const newItemsArray = ["Sample item!"];
const workItems= ["Sample item!"];

app.get("/", (req, res) => {
    res.render("index.ejs", {newItem: newItemsArray,  listTitle: "day"});
});

app.get("/work", function(req, res){
    res.render("index.ejs", {
        listTitle: "Work List",
        newItem: workItems
    })
});

app.post("/", (req,res) =>{
    let newArrayItem = req.body.newItem;
    if(req.body.list == "Work List"){
        workItems.push(newArrayItem);
        res.redirect("/work");
    }
    else{
        newItemsArray.push(newArrayItem);
        res.redirect("/");
    }
   
   
});

app.listen(port, () =>{
    console.log(`Server is up and running on ${port}`);
});