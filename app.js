const express = require("express");
const app = express();


app.use(express.static('public'))

app.get("/home", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + '/public/views/home.html')

});

app.get("/about", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/about.html')
})

app.get("/work", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/work.html')
})

app.get("/photoGallery", (req, res, next) => {
    console.log(req);
    res.sendFile(__dirname + '/public/views/photoGallery.html')
})

app.listen(3000, () => console.log("Server running on port 3000"));
