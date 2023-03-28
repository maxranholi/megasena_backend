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

  public async getPrize(name: string) {
    const getPrize = await BaseDataBase.connection("prize") 
    .select("name", "prize_number", "prize_date", "draw_Numbers")
    .where(name)
    return getPrize[0]
  }
}

// const getPrize = await BaseDataBase.connection.raw(
//   `SELECT name, prize_number FROM prize WHERE name = "name" `
// )

