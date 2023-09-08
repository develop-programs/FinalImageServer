const express = require("express");
const DATA = require("../model/model");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    await DATA.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.post("/post", async (req, res) => {
  try {
    const Data = req.body;
    if (Data == 0) return res.status(404).json({ error: "Data not found" });
    DATA.create(Data)
      .then((data) => {
        res.send({ message: data });
      })
      .catch((error) => {
        res.json(error);
      });
  } catch (error) {
    return res.status(404).json({ error: "Data Not Found" });
  }
});

route.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    await DATA.findByIdAndDelete({ _id }).then(() => {
      res.json({ message: "data deleted" });
    });
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = route;
