import { Router } from "express";
import { AddChannelToDB } from "../controllers/channel.controller.js";
import { FindChannelInDB } from "../controllers/channel.controller.js";
import { FindChannelOfSpecificTypeInDB } from "../controllers/channel.controller.js";

const route = Router();

route.post("/create-channel",AddChannelToDB);
route.post("/get-channel",FindChannelInDB);
route.post("/get-channel-under-specific-type",FindChannelOfSpecificTypeInDB);

// route.post()

export default route;