import { Express } from "express";
import { bodyParser } from "./body-parser";
import { morganDev } from "./morgan";
import { corsDev } from "./cors";
import { urlencodedM } from "./urlencoded";

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(urlencodedM);
  app.use(morganDev);
  app.use(corsDev);
};
