import Express from "express";
import { Request } from "express";
import { Response } from "express";
const Route = Express.Router();

Route.get("/", async (req: Request, res: Response) => {
  res.send("ola mundo");
});

export default Route;
