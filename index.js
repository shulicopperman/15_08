const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();

const port = 3000;

app.use(express.json());
array = [
  { id: "1", email: "123@123", password: "123456" },
  { id: "2", email: "456@456", password: "234567" },
  { id: "3", email: "576@567", password: "345678" },
];
app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = array.find((element) => element.id === id);
  res.send(user);
});
app.get("/allUsers", (req, res) => {
  res.send(array);
});
app.put("/user2", (req, res) => {
  res.send("has putted");
});

app.post("/createUser", (req, res) => {
  const newUser = {
    id: uuidv4(),
    email: req.body.email,
    password: req.body.password,
  };
  array.push(newUser);
  res.send(array);
});
app.delete("/deleteUser/:id", (req, res) => {
  const indexElement = array.findIndex((object) => object.id === req.params.id);
  console.log(array);
  const deleteUser = array.splice(indexElement, 1);
  console.log(array);
  res.send(deleteUser);
  console.log(uuidv4());
});
app.post("/email/password", (req, res) => {
  const details = { email: req.body.email, password: req.body.password };
  if (
    array.find(
      (user) =>
        user.email === req.body.email && user.password === req.body.password
    )
  ) {
    res.send("wrong credentials");
  } else {
    res.send("User is connected");
  }
  console.log(res);
  // for (i = 0; i < array.length; i++)
  //   if (
  //     details.email === array[i].email &&
  //     details.password === array[i].password
  //   ) {
  //     res.send("wrong credentials");
  //     console.log(details);
  //   } else {
  //     res.send("User is connected");
  //   }
});
app.post("/enterPassword",(req,res)=>{
  async checkPassword()
})

app.listen(port, () => {
  console.log("listening on port 3000");
});
