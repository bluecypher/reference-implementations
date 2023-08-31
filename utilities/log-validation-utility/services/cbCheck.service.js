const path = require("path");
const logger = require("../utils/logger");
const vl = require("../utils/validateLogUtil");
const v2=require("../utils/validateRspLogUtil");

const fs = require("fs");

const validateLog = async (domain, dirPath) => {
  logger.info("Inside Log Validation Service...");
  const logsPath = path.join(__dirname, "..", dirPath);
  switch (domain) {
    case "retail":
      vl.validateLogs(logsPath);
      break;
    case "rsp":
      v2.validateLogs(logsPath);
      break;
    default:
      logger.warn("Invalid Domain!!");
  }
};

module.exports = { validateLog };
