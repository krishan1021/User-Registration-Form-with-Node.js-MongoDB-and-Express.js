let express = require("express");
let mongodb = require("mongodb");
let fs = require("fs");



let connectDB = async () => {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("expressDB");
  let collection = database.collection("users");
  return collection;
};




let app = express();

app.use(express.urlencoded({ extended: true })); 

//! home page
app.get("/", (req, res) => {
  res.send("home page");
});



//! form page
app.get("/register", (req, res) => {
  
  res.sendFile(__dirname + "/Pages/form.html");
});



//! blog page
app.get("/blogs", (req, res) => {
  res.send("blogs page");
});



//! page not found
app.get("*", (req, res) => {
  res.send("page not found");
});



//! handle form submit
app.post("/abc", async (req, res) => {

  

  let { userEmail, userName, userPassword } = req.body;
  //   console.log(userEmail, userPassword, userName);


// to save data in a file 
  fs.appendFileSync( "./data.txt", `name: ${userName}, email: ${userEmail}, password: ${userPassword},\n`);



// to call the collection (mongo db)
  let myCollection = await connectDB();
  myCollection.insertOne({ userEmail, userName, userPassword });

  

  res.send(`user with the email: ${userEmail} has registered successfully`);
});





app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at http://localhost:9000");
});

