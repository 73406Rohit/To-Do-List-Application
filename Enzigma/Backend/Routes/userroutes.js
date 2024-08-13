const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./../handler/handler");

router.post("/", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const user = await addUser(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    const user = await getUser(req.params["id"]);
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    const user = await updateUser(req.params["id"], req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("id", req.params["id"]);
    const user = await deleteUser(req.params["id"]);
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
});

module.exports = router;
