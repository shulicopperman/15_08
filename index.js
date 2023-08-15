const express = require("express");
const app = express();
const port = 3000;
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
app.post("/user2", (req, res) => {
  res.send("has posted");
});
app.delete("/user3", (req, res) => {
  res.send("user has deleted");
});
app.put("/user4", (req, res) => {
  const newUser = { id: req.params.user4, email: req.body.email, password };
  array.push(newUser);
  res.send(array);
});
app.listen(port, () => {
  console.log("");
});
