import { Router } from "express";
import { AddChannelToDB } from "../controllers/channel.controller.js";

const route = Router();

route.post("/create-channel",AddChannelToDB);

// route.post()

export default route;