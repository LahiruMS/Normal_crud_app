const routes = require("express").Router();

const UserRoutes = require("../../controller/user/user.controller");

routes.post("/register", UserRoutes.register);

module.exports = routes;