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




//   middleware -- > it is a function which has access to req and response objects and it comes in between the req and res.
            //       We have a next(), which have  2 functionality 
            //  if we call next(), the flow goes to the next middleware present 
            // if the middleware is not present then the req will go to the controller/server.
            //  if we dont call next(), the req will not go anywhere. 


// there are total five types of middleware
        // app level middleware
        // user defined middleware
        // built in middleware 
        // error middleware 
        // router level middleware









