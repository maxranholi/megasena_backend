import { Prize } from "../types/prize";
import { prizeDTO } from "../types/prizeDTO";
import { PrizeDataBase } from "../database/prizeDataBase";
import { generateId } from "../services/GenerateId";

const prizeDataBase = new PrizeDataBase();

export class PrizeBusiness {
  async createPrize(prize: prizeDTO) {
    try {
      const { name, prizeNumber, prizeDate, drawNumbers } = prize;

      const id = generateId();

      const newPrize: Prize = {
        id,
        name,
        prizeNumber,
        prizeDate,
        drawNumbers,
      };
      console.log(newPrize);
      await prizeDataBase.createPrize(newPrize);
    } catch (error) {
      return error.message;
    }
  }

  async getPrize(name: string) {
    try {
      const result = await prizeDataBase.getPrize(name);
      console.log(result)
      return result;
    } catch (error) {
      return error.message;
    }
  }
}
