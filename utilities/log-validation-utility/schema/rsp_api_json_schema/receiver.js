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
          const: "receiver_recon",
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
                    state: {
                      type: "string",
                      const: "Completed",
                    },
                    provider: {
                      type: "object",
                      properties: {
                        name: {
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
                        address: {
                          type: "string",
                        },
                      },
                      required: ["name", "address"],
                    },
                    payment: {
                      type: "object",
                      properties: {
                        uri: {
                          type: "string",
                        },
                        tl_method: {
                          type: "string",
                        },
                        params: {
                          type: "object",
                          properties: {
                            transaction_id: {
                              type: "string",
                            },
                            transaction_status: {
                              type: "string",
                              const: "PAID",
                            },
                            amount: {
                              type: "string",
                            },
                            currency: {
                              type: "string",
                            },
                          },
                          required: [
                            "transaction_id",
                            "transaction_status",
                            "amount",
                            "currency",
                          ],
                        },
                        type: {
                          type: "string",
                        },
                        status: {
                          type: "string",
                          const: "PAID",
                        },
                        collected_by: {
                          type: "string",
                          enum: ["BAP", "BPP"],
                        },
                        "@ondc/org/collected_by_status": {
                          type: "string",
                        },
                        "@ondc/org/buyer_app_finder_fee_type": {
                          type: "string",
                        },
                        "@ondc/org/buyer_app_finder_fee_amount": {
                          type: "string",
                        },
                        "@ondc/org/withholding_amount": {
                          type: "string",
                        },
                        "@ondc/org/withholding_amount_status": {
                          type: "string",
                        },
                        "@ondc/org/return_window": {
                          type: "string",
                        },
                        "@ondc/org/return_window_status": {
                          type: "string",
                        },
                        "@ondc/org/settlement_basis": {
                          type: "string",
                        },
                        "@ondc/org/settlement_basis_status": {
                          type: "string",
                        },
                        "@ondc/org/settlement_window": {
                          type: "string",
                        },
                        "@ondc/org/settlement_window_status": {
                          type: "string",
                        },
                        "@ondc/org/settlement_details": {
                          type: "array",
                          items: [
                            {
                              type: "object",
                              properties: {
                                settlement_counterparty: {
                                  type: "string",
                                  enum: ["buyer-app", "seller-app"],
                                },
                                settlement_phase: {
                                  type: "string",
                                },
                                settlement_amount: {
                                  type: "integer",
                                },
                                settlement_type: {
                                  type: "string",
                                },
                                settlement_bank_account_no: {
                                  type: "string",
                                },
                                settlement_ifsc_code: {
                                  type: "string",
                                },
                                upi_address: {
                                  type: "string",
                                },
                                bank_name: {
                                  type: "string",
                                },
                                branch_name: {
                                  type: "string",
                                },
                                beneficiary_address: {
                                  type: "string",
                                },
                                beneficiary_name: {
                                  type: "string",
                                },
                                settlement_status: {
                                  type: "string",
                                  const: "PAID",
                                },
                                settlement_reference: {
                                  type: "string",
                                },
                                settlement_timestamp: {
                                  type: "string",
                                  format: "date-time",
                                },
                              },
                              required: [
                                "settlement_counterparty",
                                "settlement_phase",
                                "settlement_amount",
                                "settlement_type",
                                "settlement_bank_account_no",
                                "settlement_ifsc_code",
                                "upi_address",
                                "bank_name",
                                "branch_name",
                                "beneficiary_address",
                                "beneficiary_name",
                                "settlement_status",
                                "settlement_reference",
                                "settlement_timestamp",
                              ],
                            },
                          ],
                        },
                      },
                      required: [
                        "params",
                        "type",
                        "status",
                        "collected_by",
                        "@ondc/org/collected_by_status",
                        "@ondc/org/buyer_app_finder_fee_type",
                        "@ondc/org/buyer_app_finder_fee_amount",
                        "@ondc/org/withholding_amount",
                        "@ondc/org/withholding_amount_status",
                        "@ondc/org/return_window",
                        "@ondc/org/return_window_status",
                        "@ondc/org/settlement_basis",
                        "@ondc/org/settlement_basis_status",
                        "@ondc/org/settlement_window",
                        "@ondc/org/settlement_window_status",
                        "@ondc/org/settlement_details",
                      ],
                    },
                    withholding_tax_gst: {
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
                    withholding_tax_tds: {
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
                    deduction_by_collector: {
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
                    payerdetails: {
                      type: "object",
                      properties: {
                        payer_name: {
                          type: "string",
                        },
                        payer_address: {
                          type: "string",
                        },
                        payer_account_no: {
                          type: "integer",
                        },
                        payer_bank_code: {
                          type: "string",
                        },
                        payer_virtual_payment_address: {
                          type: "string",
                        },
                      },
                      required: [
                        "payer_name",
                        "payer_address",
                        "payer_account_no",
                        "payer_bank_code",
                        "payer_virtual_payment_address",
                      ],
                    },
                    settlement_reason_code: {
                      type: "string",
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
                    recon_status: {
                      type: "string",
                    },
                    order_recon_status: {
                      type: "string",
                      const: "01",
                    },
                    created_at: {
                      type: "string",
                    },
                    updated_at: {
                      type: "string",
                    },
                  },
                  required: [
                    "id",
                    "invoice_no",
                    "collector_app_id",
                    "receiver_app_id",
                    "state",
                    "provider",
                    "payment",
                    "withholding_tax_gst",
                    "withholding_tax_tds",
                    "deduction_by_collector",
                    "payerdetails",
                    "settlement_reason_code",
                    "transaction_id",
                    "settlement_id",
                    "settlement_reference_no",
                    "recon_status",
                    "order_recon_status",
                    "created_at",
                    "updated_at",
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
