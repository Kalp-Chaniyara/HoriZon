import { Router } from "express";
import { AddUserToDB } from "../controllers/AddUserToDB.controller.js";
import bodyParser from "body-parser";

const route = Router();

route.post("/add-user-to-db",bodyParser.raw({ type: 'application/json' }),AddUserToDB);

route.post("/add-user-to-db", (req, res, next) => {
     console.log("Route /add-user-to-db was hit");
     next();
}, bodyParser.raw({ type: 'application/json' }), AddUserToDB);


export default route;