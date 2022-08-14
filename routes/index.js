const routes = require("express").Router();

const UserRoutes = require("/user");

routes.use("/user", UserRoutes);

module.exports = routes;