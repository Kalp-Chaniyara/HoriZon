import { Router } from "express";
import { AddUserToDB } from "../controllers/user.controller.js";
import bodyParser from "body-parser";

const route = Router();

route.post("/add-user-to-db",bodyParser.raw({ type: 'application/json' }),AddUserToDB);

export default route;