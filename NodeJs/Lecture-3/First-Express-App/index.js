const express = require("express");
const app = express();
const port = 3000;
const dog = `<img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">`;
const cat = `<img src="https://media.istockphoto.com/photos/three-agile-cats-in-the-summer-in-a-sunny-meadow-they-play-on-the-picture-id1300278981?b=1&k=20&m=1300278981&s=170667a&w=0&h=dmPRBgANppR5lfRaefo8AcNNj9CgruuP0TeKp5j5Us4=">`;
// console.log(app);

// lisiten an incomming request at port
// app.use((req, res) => {
//   // console.log(req);
//   // console.log("you made a request");
//   // res.send("you made a request successfully and this is your response");
//   res.send(`<h1 style="color:green;">this is your response</h1>`);
// });

// *********************routing******************************************

app.get("/", (req, res) => {
  res.send("<h1>you made a request to home directoy</h1>");
});

app.get("/dog", (req, res) => {
  res.send(dog);
});

app.get("/cat", (req, res) => {
  res.send(cat);
});

app.get("*", (req, res) => {
  res.send(`<h1 style="color:red;">you made a wrong request</h1>`);
});

// *****************starting server and start listining at port***********************
app.listen(port, () => {
  console.log("server running at port 3000");
});
