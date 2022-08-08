import { Express } from "express";

export default async (app: Express): Promise<void> => {
  app.use("/api/v1/ping", require("./ping.routes"));

  // const router = Router();
  //   // fg.sync("**/src/api/routes/**routes.*").map(async (file) =>
  //   (await import(`../../../${file}`)).default(router)
  // );
};
