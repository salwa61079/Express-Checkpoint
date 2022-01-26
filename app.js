//this file isn't for the ckechpoint
const express = require("express");
const app = express();

// tu use json method of express to convert all to json
app.use(express.json());
// static data
const users = [
    { id: "0", name: "yassine", age: "30" },
    { id: "1", name: "achref", age: "19" },
];
//get all users
app.get("/users", (req, res) => {
    res.send({ msg: "get user success ", allusers: users });
});
// get a single user by id
app.get("/users/:id", (req, res) => {
    // const id = req.paramas.id : we can use both methods
    const { id } = req.params;
    const user = users.find((el) => el.id === id);
    return res.send(user);
});

app.post("/add", (req, res) => {
    // it needs a body to post it
    const user = req.body;
    res.send({ msg: "user added", newUser: user });
});
const port = 3000;
app.listen(port, () => console.log(`this server is running on ${port}`));
