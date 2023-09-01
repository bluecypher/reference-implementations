const fs = require("fs");
const _ = require("lodash");
const dao = require("../dao/dao");
// const path = require("path");
const { getObjValues } = require("./utils");
const checkReceiver = require("./Rsp/rspReceiver");
const checkOnReceiver = require("./Rsp/rspOnReceiver");

const validateLogs = (dirPath) => {
  // const dirPath = path.join(__dirname, "test_logs");

  let msgIdSet = new Set();

  //RECEIVER API

  let rcvrResp = checkReceiver(dirPath, msgIdSet);

  // ON_RECEIVER API

  let onRcvrResp = checkOnReceiver(dirPath, msgIdSet);

  let logReport = "";

  let rcvrObj = rcvrResp;
  let onRcvrObj = onRcvrResp;

  try {
    console.log("Flushing DB Data");
    dao.dropDB();
  } catch (error) {
    console.log("Error while removing LMDB");
  }

  if (!_.isEmpty(rcvrObj)) {
    logReport += `**/receiver**\n${getObjValues(rcvrObj)}\n`;
  }

  if (!_.isEmpty(onRcvrObj)) {
    logReport += `**/on_receiver**\n${getObjValues(onRcvrObj)}\n`;
  }

  fs.writeFileSync("log_report.md", logReport);

  console.log("Report Generated Successfully!!");
};

module.exports = { validateLogs };
