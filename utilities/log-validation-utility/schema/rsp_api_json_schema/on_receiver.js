module.exports = {
  type: "object",
  properties: {
    context: {
      type: "object",
      properties: {
        domain: {
          type: "string",
          const: "ONDC:NTS10",
        },
        country: {
          type: "string",
          const: "IND",
        },
        city: {
          type: "string",
        },
        action: {
          type: "string",
          const: "on_receiver_recon",
        },
        core_version: {
          type: "string",
          const: "1.0.0",
        },
        bap_id: {
          type: "string",
        },
        bap_uri: {
          type: "string",
        },
        bpp_id: {
          type: "string",
        },
        bpp_uri: {
          type: "string",
        },
        transaction_id: {
          type: "string",
        },
        message_id: {
          type: "string",
        },
        timestamp: {
          type: "string",
          format: "date-time",
        },
        ttl: {
          type: "string",
          const: "P2D",
        },
      },
      required: [
        "domain",
        "country",
        "city",
        "action",
        "core_version",
        "bap_id",
        "bap_uri",
        "bpp_id",
        "bpp_uri",
        "transaction_id",
        "message_id",
        "timestamp",
        "ttl",
      ],
    },
    message: {
      type: "object",
      properties: {
        orderbook: {
          type: "object",
          properties: {
            orders: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                    },
                    invoice_no: {
                      type: "string",
                    },
                    collector_app_id: {
                      type: "string",
                    },
                    receiver_app_id: {
                      type: "string",
                    },
                    order_recon_status: {
                      type: "string",
                      const: "02",
                    },
                    transaction_id: {
                      type: "string",
                    },
                    settlement_id: {
                      type: "string",
                    },
                    settlement_reference_no: {
                      type: "string",
                    },
                    counterparty_recon_status: {
                      type: "string",
                    },
                    counterparty_diff_amount: {
                      type: "object",
                      properties: {
                        currency: {
                          type: "string",
                        },
                        value: {
                          type: "string",
                        },
                      },
                      required: ["currency", "value"],
                    },
                    message: {
                      type: "object",
                      properties: {
                        name: {
                          type: "string",
                        },
                        code: {
                          type: "string",
                        },
                      },
                      required: ["name", "code"],
                    },
                  },
                  required: [
                    "id",
                    "invoice_no",
                    "collector_app_id",
                    "receiver_app_id",
                    "order_recon_status",
                    "transaction_id",
                    "settlement_id",
                    "settlement_reference_no",
                    "counterparty_recon_status",
                    "counterparty_diff_amount",
                    "message",
                  ],
                },
              ],
            },
          },
          required: ["orders"],
        },
      },
      required: ["orderbook"],
    },
  },
  required: ["context", "message"],
};
