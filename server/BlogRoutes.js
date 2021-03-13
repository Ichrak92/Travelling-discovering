const express = require("express");
const blogRouter = express.Router();

const blogController = require("./blogControllers.js");
module.exports ={
    get:blogRouter.get("/api/blog", blogController.findAll),

    post:blogRouter.post("/api/blog", blogController.create),
    delete:blogRouter.delete("/api/blog/:id1",blogController.delete),
    update: blogRouter.patch("/api/blog/:id", blogController.update)
}
