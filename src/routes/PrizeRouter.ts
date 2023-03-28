import express from "express";
import { PrizeController } from "../controller/PrizeController";

export const prizeRouter = express.Router()

const prizeController = new PrizeController();

prizeRouter.post("/create", prizeController.createPrize);

prizeRouter.get("/get", prizeController.getPrize)
