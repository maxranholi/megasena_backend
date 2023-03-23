import { app } from "./app";
import { prizeRouter } from "./routes/PrizeRouter";

app.use("/prize", prizeRouter)