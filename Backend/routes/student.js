import express from "express";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.send("Hello Student!");
});

export default studentRouter;