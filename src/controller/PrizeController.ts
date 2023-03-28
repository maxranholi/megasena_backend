import { Request, Response } from "express";
import { PrizeBusiness } from "../business/PrizeBusiness";
import { prizeDTO } from "../types/prizeDTO";

const prizeBusiness = new PrizeBusiness();

export class PrizeController {
  async createPrize(req: Request, res: Response) {
    try {
      const { name, prizeNumber, prizeDate, drawNumbers } = req.body;

      const newPrize: prizeDTO = {
        name,
        prizeNumber,
        prizeDate,
        drawNumbers,
      };

      await prizeBusiness.createPrize(newPrize);

      res.status(200).send({ prize: `Sorteio ${name} criado com sucesso.` });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async getPrize(req: Request, res: Response) {
    try {
      const name: string = req.body;

      const result = await prizeBusiness.getPrize(name);
      res.status(200).send(result);
      console.log(`controller ${name}`)
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

