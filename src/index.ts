import config from "./config";
import app from "./api/index";
import { logger } from "./common/logger";

const startServer = async () => {
  app
    .listen(config.port, () => {
      logger.info(`🛡️  Server listening on port: ${config.port} 🛡️`);
    })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
};

startServer();
