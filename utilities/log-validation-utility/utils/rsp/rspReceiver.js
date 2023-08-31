const fs = require("fs");
const _ = require("lodash");
const dao = require("../../dao/dao");
const { checkContext } = require("../../services/service");
const constants = require("../constants");
const validateSchema = require("../schemaValidation");

const checkReceiver = (dirPath, msgIdSet) => {
  let rcvrObj = {};
  try {
    var receiver = fs.readFileSync(dirPath + `/${constants.RSP_RECEIVER}.json`);
    receiver = JSON.parse(receiver);

    try {
      console.log(`Validating Schema for receiver API`);
      const vs = validateSchema("rsp", constants.RSP_RECEIVER, receiver);
      if (vs != "error") {
        // console.log(vs);
        Object.assign(rcvrObj, vs);
      }
    } catch (error) {
      console.log(
        `!!Error occurred while performing schema validation for /receiver`,
        error
      );
    }


    dao.setValue("rcvrObj", rcvrObj);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`!!File not found for /receiver API!`);
    } else {
      console.log(
        `!!Some error occurred while checking /receiver API`,
        err
      );
    }
  }
};

module.exports = checkReceiver;
