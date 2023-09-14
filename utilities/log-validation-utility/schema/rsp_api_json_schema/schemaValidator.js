const receiverSchema = require("./receiver.js");
const onReceiverSchema = require("./on_receiver.js");

const Ajv = require("ajv");
const ajv = new Ajv({
  $data: true,
  allErrors: true,
  strict: "log",
});
const addFormats = require("ajv-formats");
addFormats(ajv);
require("ajv-errors")(ajv);

const formatted_error = (errors) => {
  error_list = [];
  let status = "";
  errors.forEach((error) => {
    error_dict = {
      message: `${error.message}${
        error.params.allowedValues ? ` (${error.params.allowedValues})` : ""
      }${error.params.allowedValue ? ` (${error.params.allowedValue})` : ""}${
        error.params.additionalProperty
          ? ` (${error.params.additionalProperty})`
          : ""
      }`,
      details: error.instancePath,
    };
    error_list.push(error_dict);
  });
  if (error_list.length === 0) status = "pass";
  else status = "fail";
  error_json = { errors: error_list, status: status };
  return error_json;
};

const validate_schema = (data, schema) => {
  let error_list = [];
  validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    error_list = validate.errors;
  }
  return error_list;
};

const validate_schema_receiver_recon_rsp_for_json = (data) => {
  error_list = validate_schema(data, (schema = receiverSchema));
  return formatted_error(error_list);
};

const validate_schema_on_receiver_recon_rsp_for_json = (data) => {
  // transformed_item_data = transform_on_search_schema(data);
  error_list = validate_schema(data, (schema = onReceiverSchema));
  return formatted_error(error_list);
};

module.exports = {
  validate_schema_receiver_recon_rsp_for_json,
  validate_schema_on_receiver_recon_rsp_for_json,
};
