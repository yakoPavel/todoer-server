import http from "http";

import "module-alias/register";

import { app } from "@/app";
import * as config from "@/utils/config";
import * as logger from "@/utils/logger";

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}!`);
});
