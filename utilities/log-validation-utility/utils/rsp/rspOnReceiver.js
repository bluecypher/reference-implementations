const fs = require("fs");
const _ = require("lodash");
const dao = require("../../dao/dao");
const { checkContext } = require("../../services/service");
const constants = require("../constants");
const validateSchema = require("../schemaValidation");

const checkOnReceiver = (dirPath, msgIdSet) => {
  let onRcvrObj = {};
  try {
    var onReceiver = fs.readFileSync(
      dirPath + `/${constants.RSP_ON_RECEIVER}.json`
    );
    onReceiver = JSON.parse(onReceiver);

    try {
      console.log(`Validating Schema for on_receiver API`);
      const vs = validateSchema("rsp", constants.RSP_ON_RECEIVER, onReceiver);
      if (vs != "error") {
        // console.log(vs);
        Object.assign(onRcvrObj, vs);
      }
    } catch (error) {
      console.log(
        `!!Error occurred while performing schema validation for /receiver`,
        error
      );
    }

    return onRcvrObj;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`!!File not found for /receiver API!`);
    } else {
      console.log(`!!Some error occurred while checking /receiver API`, err);
    }
  }
};

module.exports = checkOnReceiver;
