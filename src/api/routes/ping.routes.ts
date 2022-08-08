import { Request, Response, Router } from "express";

import { PingDummyRepository } from "../../repositories/dummydb/ping.repository";
import { PingService } from "../../services/ping.service";

const pingRepository = new PingDummyRepository();
const pingService = new PingService(pingRepository);
const router = Router();
/**
 * @openapi
 * /ping:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds "pong" if the app is up and running.
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const response = await pingService.store();
    res.send(response);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send(err.message);
    }
  }
});

module.exports = router;
