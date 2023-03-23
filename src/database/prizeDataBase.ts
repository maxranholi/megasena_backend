import BaseDataBase from "./baseDataBase";
import { Prize } from "../types/prize";

export class PrizeDataBase extends BaseDataBase {
  public async createPrize(prize: Prize) {
    await BaseDataBase.connection("prize").insert({
      id: prize.id,
      name: prize.name,
      prize_number: prize.prizeNumber,
      prize_date: prize.prizeDate,
      draw_Numbers: prize.drawNumbers
    })

  }
}
