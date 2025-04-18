let express = require("express");
let app = express();


app.use((req, res, next) => {
    console.log("midddleware 1")
    // next();
});

app.use((req, res, next) => {
    console.log("midddleware 2")
    // next();
});





app.get("/", (req, res)=>{
    res.send("this is home")
});


app.get("/about", (req, res)=>{
    res.send("this is about")
});



app.get("/download", (req, res)=>{
    res.send("this is download")
});


app.get("*", (req, res)=>{
    res.send("page not found")
});

app.listen(9000, (err) => {
    if (err) console.log(err);
    console.log("server running at http://localhost:9000");
  });














