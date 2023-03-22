import BaseDataBase from "./baseDataBase";
import { Prize } from "../types/prize";

export class PrizeDataBase extends BaseDataBase {
  public async createPrize(prize: Prize) {
    await BaseDataBase.connection("prize").insert({
      id: prize.id,
      name: prize.name,
      prizeNumber: prize.prizeNumber,
      prizeDate: prize.prizeDate,
      drawNumbers: prize.drawNumbers
    })

  }
}
