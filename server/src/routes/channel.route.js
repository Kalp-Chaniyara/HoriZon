import { Router } from "express";
import { AddChannelToDB } from "../controllers/channel.controller.js";
import { FindChannelInDB } from "../controllers/channel.controller.js";

const route = Router();

route.post("/create-channel",AddChannelToDB);
route.post("/get-channel",FindChannelInDB);

// route.post()

export default route;