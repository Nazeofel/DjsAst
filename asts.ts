import { $ } from "bun"
import { ChannelType, SlashCommandBuilder } from "discord.js"

export const ast3 = {
    "type": "Module",
    "span": {
      "start": 0,
      "end": 87,
      "ctxt": 0
    },
    "body": [
      {
        "type": "ExpressionStatement",
        "span": {
          "start": 0,
          "end": 87,
          "ctxt": 0
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 0,
            "end": 87,
            "ctxt": 0
          },
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 0,
              "end": 65,
              "ctxt": 0
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 0,
                "end": 45,
                "ctxt": 0
              },
              "callee": {
                "type": "MemberExpression",
                "span": {
                  "start": 0,
                  "end": 38,
                  "ctxt": 0
                },
                "object": {
                  "type": "NewExpression",
                  "span": {
                    "start": 0,
                    "end": 25,
                    "ctxt": 0
                  },
                  "callee": {
                    "type": "Identifier",
                    "span": {
                      "start": 4,
                      "end": 23,
                      "ctxt": 1
                    },
                    "value": "SlashCommandBuilder",
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "span": {
                    "start": 31,
                    "end": 38,
                    "ctxt": 0
                  },
                  "value": "setName",
                  "optional": false
                }
              },
              "arguments": [
                {
                  "spread": null,
                  "expression": {
                    "type": "StringLiteral",
                    "span": {
                      "start": 39,
                      "end": 44,
                      "ctxt": 0
                    },
                    "value": "fun",
                    "raw": "\"fun\""
                  }
                }
              ],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "span": {
                "start": 51,
                "end": 65,
                "ctxt": 0
              },
              "value": "setDescription",
              "optional": false
            }
          },
          "arguments": [
            {
              "spread": null,
              "expression": {
                "type": "StringLiteral",
                "span": {
                  "start": 66,
                  "end": 86,
                  "ctxt": 0
                },
                "value": "Replies with Pong!",
                "raw": "\"Replies with Pong!\""
              }
            }
          ],
          "typeArguments": null
        }
      }
    ],
    "interpreter": null
  }
const ast = {
    "type": "Module",
    "span": {
      "start": 0,
      "end": 1285,
      "ctxt": 0
    },
    "body": [
      {
        "type": "ExpressionStatement",
        "span": {
          "start": 0,
          "end": 1285,
          "ctxt": 0
        },
        "expression": {
          "type": "AssignmentExpression",
          "span": {
            "start": 0,
            "end": 1284,
            "ctxt": 0
          },
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "span": {
              "start": 0,
              "end": 14,
              "ctxt": 0
            },
            "object": {
              "type": "Identifier",
              "span": {
                "start": 0,
                "end": 6,
                "ctxt": 1
              },
              "value": "module",
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "span": {
                "start": 7,
                "end": 14,
                "ctxt": 0
              },
              "value": "exports",
              "optional": false
            }
          },
          "right": {
            "type": "ObjectExpression",
            "span": {
              "start": 17,
              "end": 1284,
              "ctxt": 0
            },
            "properties": [
              {
                "type": "KeyValueProperty",
                "key": {
                  "type": "Identifier",
                  "span": {
                    "start": 21,
                    "end": 25,
                    "ctxt": 0
                  },
                  "value": "data",
                  "optional": false
                },
                "value": {
                  "type": "CallExpression",
                  "span": {
                    "start": 27,
                    "end": 802,
                    "ctxt": 0
                  },
                  "callee": {
                    "type": "MemberExpression",
                    "span": {
                      "start": 27,
                      "end": 578,
                      "ctxt": 0
                    },
                    "object": {
                      "type": "CallExpression",
                      "span": {
                        "start": 27,
                        "end": 559,
                        "ctxt": 0
                      },
                      "callee": {
                        "type": "MemberExpression",
                        "span": {
                          "start": 27,
                          "end": 465,
                          "ctxt": 0
                        },
                        "object": {
                          "type": "CallExpression",
                          "span": {
                            "start": 27,
                            "end": 446,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 27,
                              "end": 135,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "CallExpression",
                              "span": {
                                "start": 27,
                                "end": 114,
                                "ctxt": 0
                              },
                              "callee": {
                                "type": "MemberExpression",
                                "span": {
                                  "start": 27,
                                  "end": 92,
                                  "ctxt": 0
                                },
                                "object": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 27,
                                    "end": 72,
                                    "ctxt": 0
                                  },
                                  "callee": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 27,
                                      "end": 65,
                                      "ctxt": 0
                                    },
                                    "object": {
                                      "type": "NewExpression",
                                      "span": {
                                        "start": 27,
                                        "end": 52,
                                        "ctxt": 0
                                      },
                                      "callee": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 31,
                                          "end": 50,
                                          "ctxt": 1
                                        },
                                        "value": "SlashCommandBuilder",
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "typeArguments": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 58,
                                        "end": 65,
                                        "ctxt": 0
                                      },
                                      "value": "setName",
                                      "optional": false
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 66,
                                          "end": 71,
                                          "ctxt": 0
                                        },
                                        "value": "fun",
                                        "raw": "\"fun\""
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 78,
                                    "end": 92,
                                    "ctxt": 0
                                  },
                                  "value": "setDescription",
                                  "optional": false
                                }
                              },
                              "arguments": [
                                {
                                  "spread": null,
                                  "expression": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 93,
                                      "end": 113,
                                      "ctxt": 0
                                    },
                                    "value": "Replies with Pong!",
                                    "raw": "\"Replies with Pong!\""
                                  }
                                }
                              ],
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 120,
                                "end": 135,
                                "ctxt": 0
                              },
                              "value": "addStringOption",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "span": {
                                  "start": 136,
                                  "end": 440,
                                  "ctxt": 0
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 137,
                                      "end": 148,
                                      "ctxt": 3
                                    },
                                    "value": "option",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TsTypeAnnotation",
                                      "span": {
                                        "start": 143,
                                        "end": 148,
                                        "ctxt": 0
                                      },
                                      "typeAnnotation": {
                                        "type": "TsKeywordType",
                                        "span": {
                                          "start": 145,
                                          "end": 148,
                                          "ctxt": 0
                                        },
                                        "kind": "any"
                                      }
                                    }
                                  }
                                ],
                                "body": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 159,
                                    "end": 440,
                                    "ctxt": 0
                                  },
                                  "callee": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 159,
                                      "end": 285,
                                      "ctxt": 0
                                    },
                                    "object": {
                                      "type": "CallExpression",
                                      "span": {
                                        "start": 159,
                                        "end": 265,
                                        "ctxt": 0
                                      },
                                      "callee": {
                                        "type": "MemberExpression",
                                        "span": {
                                          "start": 159,
                                          "end": 259,
                                          "ctxt": 0
                                        },
                                        "object": {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 159,
                                            "end": 238,
                                            "ctxt": 0
                                          },
                                          "callee": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 159,
                                              "end": 218,
                                              "ctxt": 0
                                            },
                                            "object": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 159,
                                                "end": 194,
                                                "ctxt": 0
                                              },
                                              "callee": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 159,
                                                  "end": 182,
                                                  "ctxt": 0
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 159,
                                                    "end": 165,
                                                    "ctxt": 3
                                                  },
                                                  "value": "option",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 175,
                                                    "end": 182,
                                                    "ctxt": 0
                                                  },
                                                  "value": "setName",
                                                  "optional": false
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "spread": null,
                                                  "expression": {
                                                    "type": "StringLiteral",
                                                    "span": {
                                                      "start": 183,
                                                      "end": 193,
                                                      "ctxt": 0
                                                    },
                                                    "value": "category",
                                                    "raw": "\"category\""
                                                  }
                                                }
                                              ],
                                              "typeArguments": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 204,
                                                "end": 218,
                                                "ctxt": 0
                                              },
                                              "value": "setDescription",
                                              "optional": false
                                            }
                                          },
                                          "arguments": [
                                            {
                                              "spread": null,
                                              "expression": {
                                                "type": "StringLiteral",
                                                "span": {
                                                  "start": 219,
                                                  "end": 237,
                                                  "ctxt": 0
                                                },
                                                "value": "The gif category",
                                                "raw": "\"The gif category\""
                                              }
                                            }
                                          ],
                                          "typeArguments": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 248,
                                            "end": 259,
                                            "ctxt": 0
                                          },
                                          "value": "setRequired",
                                          "optional": false
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "spread": null,
                                          "expression": {
                                            "type": "BooleanLiteral",
                                            "span": {
                                              "start": 260,
                                              "end": 264,
                                              "ctxt": 0
                                            },
                                            "value": true
                                          }
                                        }
                                      ],
                                      "typeArguments": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 275,
                                        "end": 285,
                                        "ctxt": 0
                                      },
                                      "value": "addChoices",
                                      "optional": false
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "ObjectExpression",
                                        "span": {
                                          "start": 297,
                                          "end": 334,
                                          "ctxt": 0
                                        },
                                        "properties": [
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 299,
                                                "end": 303,
                                                "ctxt": 0
                                              },
                                              "value": "name",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 305,
                                                "end": 312,
                                                "ctxt": 0
                                              },
                                              "value": "Funny",
                                              "raw": "\"Funny\""
                                            }
                                          },
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 314,
                                                "end": 319,
                                                "ctxt": 0
                                              },
                                              "value": "value",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 321,
                                                "end": 332,
                                                "ctxt": 0
                                              },
                                              "value": "gif_funny",
                                              "raw": "\"gif_funny\""
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "ObjectExpression",
                                        "span": {
                                          "start": 346,
                                          "end": 381,
                                          "ctxt": 0
                                        },
                                        "properties": [
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 348,
                                                "end": 352,
                                                "ctxt": 0
                                              },
                                              "value": "name",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 354,
                                                "end": 360,
                                                "ctxt": 0
                                              },
                                              "value": "Meme",
                                              "raw": "\"Meme\""
                                            }
                                          },
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 362,
                                                "end": 367,
                                                "ctxt": 0
                                              },
                                              "value": "value",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 369,
                                                "end": 379,
                                                "ctxt": 0
                                              },
                                              "value": "gif_meme",
                                              "raw": "\"gif_meme\""
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "ObjectExpression",
                                        "span": {
                                          "start": 393,
                                          "end": 430,
                                          "ctxt": 0
                                        },
                                        "properties": [
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 395,
                                                "end": 399,
                                                "ctxt": 0
                                              },
                                              "value": "name",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 401,
                                                "end": 408,
                                                "ctxt": 0
                                              },
                                              "value": "Movie",
                                              "raw": "\"Movie\""
                                            }
                                          },
                                          {
                                            "type": "KeyValueProperty",
                                            "key": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 410,
                                                "end": 415,
                                                "ctxt": 0
                                              },
                                              "value": "value",
                                              "optional": false
                                            },
                                            "value": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 417,
                                                "end": 428,
                                                "ctxt": 0
                                              },
                                              "value": "gif_movie",
                                              "raw": "\"gif_movie\""
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "async": false,
                                "generator": false,
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          ],
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "span": {
                            "start": 452,
                            "end": 465,
                            "ctxt": 0
                          },
                          "value": "addUserOption",
                          "optional": false
                        }
                      },
                      "arguments": [
                        {
                          "spread": null,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "span": {
                              "start": 466,
                              "end": 553,
                              "ctxt": 0
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "span": {
                                  "start": 467,
                                  "end": 473,
                                  "ctxt": 4
                                },
                                "value": "option",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "body": {
                              "type": "CallExpression",
                              "span": {
                                "start": 484,
                                "end": 553,
                                "ctxt": 0
                              },
                              "callee": {
                                "type": "MemberExpression",
                                "span": {
                                  "start": 484,
                                  "end": 547,
                                  "ctxt": 0
                                },
                                "object": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 484,
                                    "end": 535,
                                    "ctxt": 0
                                  },
                                  "callee": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 484,
                                      "end": 524,
                                      "ctxt": 0
                                    },
                                    "object": {
                                      "type": "CallExpression",
                                      "span": {
                                        "start": 484,
                                        "end": 509,
                                        "ctxt": 0
                                      },
                                      "callee": {
                                        "type": "MemberExpression",
                                        "span": {
                                          "start": 484,
                                          "end": 498,
                                          "ctxt": 0
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 484,
                                            "end": 490,
                                            "ctxt": 4
                                          },
                                          "value": "option",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 491,
                                            "end": 498,
                                            "ctxt": 0
                                          },
                                          "value": "setName",
                                          "optional": false
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "spread": null,
                                          "expression": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 499,
                                              "end": 508,
                                              "ctxt": 0
                                            },
                                            "value": "targetx",
                                            "raw": "\"targetx\""
                                          }
                                        }
                                      ],
                                      "typeArguments": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 510,
                                        "end": 524,
                                        "ctxt": 0
                                      },
                                      "value": "setDescription",
                                      "optional": false
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 525,
                                          "end": 534,
                                          "ctxt": 0
                                        },
                                        "value": "user x ",
                                        "raw": "\"user x \""
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 536,
                                    "end": 547,
                                    "ctxt": 0
                                  },
                                  "value": "setRequired",
                                  "optional": false
                                }
                              },
                              "arguments": [
                                {
                                  "spread": null,
                                  "expression": {
                                    "type": "BooleanLiteral",
                                    "span": {
                                      "start": 548,
                                      "end": 552,
                                      "ctxt": 0
                                    },
                                    "value": true
                                  }
                                }
                              ],
                              "typeArguments": null
                            },
                            "async": false,
                            "generator": false,
                            "typeParameters": null,
                            "returnType": null
                          }
                        }
                      ],
                      "typeArguments": null
                    },
                    "property": {
                      "type": "Identifier",
                      "span": {
                        "start": 565,
                        "end": 578,
                        "ctxt": 0
                      },
                      "value": "addSubcommand",
                      "optional": false
                    }
                  },
                  "arguments": [
                    {
                      "spread": null,
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "span": {
                          "start": 579,
                          "end": 796,
                          "ctxt": 0
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "span": {
                              "start": 580,
                              "end": 590,
                              "ctxt": 5
                            },
                            "value": "subcommand",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "span": {
                            "start": 601,
                            "end": 796,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 601,
                              "end": 712,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "CallExpression",
                              "span": {
                                "start": 601,
                                "end": 689,
                                "ctxt": 0
                              },
                              "callee": {
                                "type": "MemberExpression",
                                "span": {
                                  "start": 601,
                                  "end": 661,
                                  "ctxt": 0
                                },
                                "object": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 601,
                                    "end": 637,
                                    "ctxt": 0
                                  },
                                  "callee": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 601,
                                      "end": 628,
                                      "ctxt": 0
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 601,
                                        "end": 611,
                                        "ctxt": 5
                                      },
                                      "value": "subcommand",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 621,
                                        "end": 628,
                                        "ctxt": 0
                                      },
                                      "value": "setName",
                                      "optional": false
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 629,
                                          "end": 636,
                                          "ctxt": 0
                                        },
                                        "value": "user3",
                                        "raw": "\"user3\""
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 647,
                                    "end": 661,
                                    "ctxt": 0
                                  },
                                  "value": "setDescription",
                                  "optional": false
                                }
                              },
                              "arguments": [
                                {
                                  "spread": null,
                                  "expression": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 662,
                                      "end": 688,
                                      "ctxt": 0
                                    },
                                    "value": "Info about a user TAGEUL",
                                    "raw": "\"Info about a user TAGEUL\""
                                  }
                                }
                              ],
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 699,
                                "end": 712,
                                "ctxt": 0
                              },
                              "value": "addUserOption",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "span": {
                                  "start": 713,
                                  "end": 786,
                                  "ctxt": 0
                                },
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 714,
                                      "end": 720,
                                      "ctxt": 6
                                    },
                                    "value": "option",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "body": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 735,
                                    "end": 786,
                                    "ctxt": 0
                                  },
                                  "callee": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 735,
                                      "end": 774,
                                      "ctxt": 0
                                    },
                                    "object": {
                                      "type": "CallExpression",
                                      "span": {
                                        "start": 735,
                                        "end": 759,
                                        "ctxt": 0
                                      },
                                      "callee": {
                                        "type": "MemberExpression",
                                        "span": {
                                          "start": 735,
                                          "end": 749,
                                          "ctxt": 0
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 735,
                                            "end": 741,
                                            "ctxt": 6
                                          },
                                          "value": "option",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 742,
                                            "end": 749,
                                            "ctxt": 0
                                          },
                                          "value": "setName",
                                          "optional": false
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "spread": null,
                                          "expression": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 750,
                                              "end": 758,
                                              "ctxt": 0
                                            },
                                            "value": "target",
                                            "raw": "\"target\""
                                          }
                                        }
                                      ],
                                      "typeArguments": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 760,
                                        "end": 774,
                                        "ctxt": 0
                                      },
                                      "value": "setDescription",
                                      "optional": false
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 775,
                                          "end": 785,
                                          "ctxt": 0
                                        },
                                        "value": "The user",
                                        "raw": "\"The user\""
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "async": false,
                                "generator": false,
                                "typeParameters": null,
                                "returnType": null
                              }
                            }
                          ],
                          "typeArguments": null
                        },
                        "async": false,
                        "generator": false,
                        "typeParameters": null,
                        "returnType": null
                      }
                    }
                  ],
                  "typeArguments": null
                }
              },
              {
                "type": "MethodProperty",
                "key": {
                  "type": "Identifier",
                  "span": {
                    "start": 812,
                    "end": 819,
                    "ctxt": 0
                  },
                  "value": "execute",
                  "optional": false
                },
                "params": [
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 820,
                      "end": 831,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 820,
                        "end": 831,
                        "ctxt": 7
                      },
                      "value": "interaction",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 833,
                      "end": 835,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 833,
                        "end": 835,
                        "ctxt": 7
                      },
                      "value": "hi",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 837,
                      "end": 840,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 837,
                        "end": 840,
                        "ctxt": 7
                      },
                      "value": "lol",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 842,
                      "end": 843,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 842,
                        "end": 843,
                        "ctxt": 7
                      },
                      "value": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 845,
                      "end": 848,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 845,
                        "end": 848,
                        "ctxt": 7
                      },
                      "value": "idk",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Parameter",
                    "span": {
                      "start": 850,
                      "end": 851,
                      "ctxt": 0
                    },
                    "decorators": [],
                    "pat": {
                      "type": "Identifier",
                      "span": {
                        "start": 850,
                        "end": 851,
                        "ctxt": 7
                      },
                      "value": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "decorators": [],
                "span": {
                  "start": 806,
                  "end": 1281,
                  "ctxt": 7
                },
                "body": {
                  "type": "BlockStatement",
                  "span": {
                    "start": 853,
                    "end": 1281,
                    "ctxt": 7
                  },
                  "stmts": [
                    {
                      "type": "ExpressionStatement",
                      "span": {
                        "start": 859,
                        "end": 892,
                        "ctxt": 0
                      },
                      "expression": {
                        "type": "AwaitExpression",
                        "span": {
                          "start": 859,
                          "end": 891,
                          "ctxt": 0
                        },
                        "argument": {
                          "type": "CallExpression",
                          "span": {
                            "start": 865,
                            "end": 891,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 865,
                              "end": 882,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "Identifier",
                              "span": {
                                "start": 865,
                                "end": 876,
                                "ctxt": 7
                              },
                              "value": "interaction",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 877,
                                "end": 882,
                                "ctxt": 0
                              },
                              "value": "reply",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 883,
                                  "end": 890,
                                  "ctxt": 0
                                },
                                "value": "Pong!",
                                "raw": "\"Pong!\""
                              }
                            }
                          ],
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "ForOfStatement",
                      "span": {
                        "start": 918,
                        "end": 976,
                        "ctxt": 0
                      },
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "span": {
                          "start": 923,
                          "end": 941,
                          "ctxt": 0
                        },
                        "kind": "const",
                        "declare": false,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "span": {
                              "start": 929,
                              "end": 941,
                              "ctxt": 0
                            },
                            "id": {
                              "type": "ArrayPattern",
                              "span": {
                                "start": 929,
                                "end": 941,
                                "ctxt": 0
                              },
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 930,
                                    "end": 933,
                                    "ctxt": 8
                                  },
                                  "value": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 935,
                                    "end": 940,
                                    "ctxt": 8
                                  },
                                  "value": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ]
                      },
                      "right": {
                        "type": "CallExpression",
                        "span": {
                          "start": 945,
                          "end": 967,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 945,
                            "end": 959,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "Identifier",
                            "span": {
                              "start": 945,
                              "end": 951,
                              "ctxt": 1
                            },
                            "value": "Object",
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 952,
                              "end": 959,
                              "ctxt": 0
                            },
                            "value": "entries",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "Identifier",
                              "span": {
                                "start": 960,
                                "end": 966,
                                "ctxt": 1
                              },
                              "value": "random",
                              "optional": false
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "body": {
                        "type": "BlockStatement",
                        "span": {
                          "start": 969,
                          "end": 976,
                          "ctxt": 9
                        },
                        "stmts": []
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "span": {
                        "start": 1103,
                        "end": 1139,
                        "ctxt": 0
                      },
                      "expression": {
                        "type": "AwaitExpression",
                        "span": {
                          "start": 1103,
                          "end": 1138,
                          "ctxt": 0
                        },
                        "argument": {
                          "type": "CallExpression",
                          "span": {
                            "start": 1109,
                            "end": 1138,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 1109,
                              "end": 1126,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "Identifier",
                              "span": {
                                "start": 1109,
                                "end": 1120,
                                "ctxt": 7
                              },
                              "value": "interaction",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 1121,
                                "end": 1126,
                                "ctxt": 0
                              },
                              "value": "reply",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 1127,
                                  "end": 1137,
                                  "ctxt": 0
                                },
                                "value": "Pong'-j!",
                                "raw": "\"Pong'-j!\""
                              }
                            }
                          ],
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "span": {
                        "start": 1144,
                        "end": 1189,
                        "ctxt": 0
                      },
                      "expression": {
                        "type": "AwaitExpression",
                        "span": {
                          "start": 1144,
                          "end": 1188,
                          "ctxt": 0
                        },
                        "argument": {
                          "type": "CallExpression",
                          "span": {
                            "start": 1150,
                            "end": 1188,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 1150,
                              "end": 1167,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "Identifier",
                              "span": {
                                "start": 1150,
                                "end": 1161,
                                "ctxt": 7
                              },
                              "value": "interaction",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 1162,
                                "end": 1167,
                                "ctxt": 0
                              },
                              "value": "reply",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 1168,
                                  "end": 1187,
                                  "ctxt": 0
                                },
                                "value": "Pongjz'a(-jza'-j!",
                                "raw": "\"Pongjz'a(-jza'-j!\""
                              }
                            }
                          ],
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "span": {
                        "start": 1194,
                        "end": 1239,
                        "ctxt": 0
                      },
                      "expression": {
                        "type": "AwaitExpression",
                        "span": {
                          "start": 1194,
                          "end": 1238,
                          "ctxt": 0
                        },
                        "argument": {
                          "type": "CallExpression",
                          "span": {
                            "start": 1200,
                            "end": 1238,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 1200,
                              "end": 1217,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "Identifier",
                              "span": {
                                "start": 1200,
                                "end": 1211,
                                "ctxt": 7
                              },
                              "value": "interaction",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 1212,
                                "end": 1217,
                                "ctxt": 0
                              },
                              "value": "reply",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 1218,
                                  "end": 1237,
                                  "ctxt": 0
                                },
                                "value": "Ponzergzegajajag!",
                                "raw": "\"Ponzergzegajajag!\""
                              }
                            }
                          ],
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "span": {
                        "start": 1244,
                        "end": 1277,
                        "ctxt": 0
                      },
                      "expression": {
                        "type": "AwaitExpression",
                        "span": {
                          "start": 1244,
                          "end": 1276,
                          "ctxt": 0
                        },
                        "argument": {
                          "type": "CallExpression",
                          "span": {
                            "start": 1250,
                            "end": 1276,
                            "ctxt": 0
                          },
                          "callee": {
                            "type": "MemberExpression",
                            "span": {
                              "start": 1250,
                              "end": 1267,
                              "ctxt": 0
                            },
                            "object": {
                              "type": "Identifier",
                              "span": {
                                "start": 1250,
                                "end": 1261,
                                "ctxt": 7
                              },
                              "value": "interaction",
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "span": {
                                "start": 1262,
                                "end": 1267,
                                "ctxt": 0
                              },
                              "value": "reply",
                              "optional": false
                            }
                          },
                          "arguments": [
                            {
                              "spread": null,
                              "expression": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 1268,
                                  "end": 1275,
                                  "ctxt": 0
                                },
                                "value": "Pong!",
                                "raw": "\"Pong!\""
                              }
                            }
                          ],
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "async": true,
                "typeParameters": null,
                "returnType": null
              }
            ]
          }
        }
      }
    ],
    "interpreter": null
}
const ast2 = {
  "type": "Module",
  "span": {
    "start": 0,
    "end": 532,
    "ctxt": 0
  },
  "body": [
    {
      "type": "ExpressionStatement",
      "span": {
        "start": 0,
        "end": 532,
        "ctxt": 0
      },
      "expression": {
        "type": "CallExpression",
        "span": {
          "start": 0,
          "end": 532,
          "ctxt": 0
        },
        "callee": {
          "type": "MemberExpression",
          "span": {
            "start": 0,
            "end": 438,
            "ctxt": 0
          },
          "object": {
            "type": "CallExpression",
            "span": {
              "start": 0,
              "end": 419,
              "ctxt": 0
            },
            "callee": {
              "type": "MemberExpression",
              "span": {
                "start": 0,
                "end": 108,
                "ctxt": 0
              },
              "object": {
                "type": "CallExpression",
                "span": {
                  "start": 0,
                  "end": 87,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 0,
                    "end": 65,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 0,
                      "end": 45,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 0,
                        "end": 38,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "NewExpression",
                        "span": {
                          "start": 0,
                          "end": 25,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 4,
                            "end": 23,
                            "ctxt": 1
                          },
                          "value": "SlashCommandBuilder",
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 31,
                          "end": 38,
                          "ctxt": 0
                        },
                        "value": "setName",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "StringLiteral",
                          "span": {
                            "start": 39,
                            "end": 44,
                            "ctxt": 0
                          },
                          "value": "fun",
                          "raw": "\"fun\""
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 51,
                      "end": 65,
                      "ctxt": 0
                    },
                    "value": "setDescription",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 66,
                        "end": 86,
                        "ctxt": 0
                      },
                      "value": "Replies with Pong!",
                      "raw": "\"Replies with Pong!\""
                    }
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "span": {
                  "start": 93,
                  "end": 108,
                  "ctxt": 0
                },
                "value": "addStringOption",
                "optional": false
              }
            },
            "arguments": [
              {
                "spread": null,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "span": {
                    "start": 109,
                    "end": 413,
                    "ctxt": 0
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "span": {
                        "start": 110,
                        "end": 121,
                        "ctxt": 3
                      },
                      "value": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TsTypeAnnotation",
                        "span": {
                          "start": 116,
                          "end": 121,
                          "ctxt": 0
                        },
                        "typeAnnotation": {
                          "type": "TsKeywordType",
                          "span": {
                            "start": 118,
                            "end": 121,
                            "ctxt": 0
                          },
                          "kind": "any"
                        }
                      }
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "span": {
                      "start": 132,
                      "end": 413,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 132,
                        "end": 258,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 132,
                          "end": 238,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 132,
                            "end": 232,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 132,
                              "end": 211,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 132,
                                "end": 191,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 132,
                                  "end": 167,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 132,
                                    "end": 155,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 132,
                                      "end": 138,
                                      "ctxt": 3
                                    },
                                    "value": "option",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 148,
                                      "end": 155,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 156,
                                        "end": 166,
                                        "ctxt": 0
                                      },
                                      "value": "category",
                                      "raw": "\"category\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 177,
                                  "end": 191,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 192,
                                    "end": 210,
                                    "ctxt": 0
                                  },
                                  "value": "The gif category",
                                  "raw": "\"The gif category\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 221,
                              "end": 232,
                              "ctxt": 0
                            },
                            "value": "setRequired",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "BooleanLiteral",
                              "span": {
                                "start": 233,
                                "end": 237,
                                "ctxt": 0
                              },
                              "value": true
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 248,
                          "end": 258,
                          "ctxt": 0
                        },
                        "value": "addChoices",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 270,
                            "end": 307,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 272,
                                  "end": 276,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 278,
                                  "end": 285,
                                  "ctxt": 0
                                },
                                "value": "Funny",
                                "raw": "\"Funny\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 287,
                                  "end": 292,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 294,
                                  "end": 305,
                                  "ctxt": 0
                                },
                                "value": "gif_funny",
                                "raw": "\"gif_funny\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 319,
                            "end": 354,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 321,
                                  "end": 325,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 327,
                                  "end": 333,
                                  "ctxt": 0
                                },
                                "value": "Meme",
                                "raw": "\"Meme\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 335,
                                  "end": 340,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 342,
                                  "end": 352,
                                  "ctxt": 0
                                },
                                "value": "gif_meme",
                                "raw": "\"gif_meme\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 366,
                            "end": 403,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 368,
                                  "end": 372,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 374,
                                  "end": 381,
                                  "ctxt": 0
                                },
                                "value": "Movie",
                                "raw": "\"Movie\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 383,
                                  "end": 388,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 390,
                                  "end": 401,
                                  "ctxt": 0
                                },
                                "value": "gif_movie",
                                "raw": "\"gif_movie\""
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "async": false,
                  "generator": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "span": {
              "start": 425,
              "end": 438,
              "ctxt": 0
            },
            "value": "addUserOption",
            "optional": false
          }
        },
        "arguments": [
          {
            "spread": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "span": {
                "start": 439,
                "end": 526,
                "ctxt": 0
              },
              "params": [
                {
                  "type": "Identifier",
                  "span": {
                    "start": 440,
                    "end": 446,
                    "ctxt": 4
                  },
                  "value": "option",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "CallExpression",
                "span": {
                  "start": 457,
                  "end": 526,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 457,
                    "end": 520,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 457,
                      "end": 508,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 457,
                        "end": 497,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 457,
                          "end": 482,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 457,
                            "end": 471,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "Identifier",
                            "span": {
                              "start": 457,
                              "end": 463,
                              "ctxt": 4
                            },
                            "value": "option",
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 464,
                              "end": 471,
                              "ctxt": 0
                            },
                            "value": "setName",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "StringLiteral",
                              "span": {
                                "start": 472,
                                "end": 481,
                                "ctxt": 0
                              },
                              "value": "targetx",
                              "raw": "\"targetx\""
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 483,
                          "end": 497,
                          "ctxt": 0
                        },
                        "value": "setDescription",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "StringLiteral",
                          "span": {
                            "start": 498,
                            "end": 507,
                            "ctxt": 0
                          },
                          "value": "user x ",
                          "raw": "\"user x \""
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 509,
                      "end": 520,
                      "ctxt": 0
                    },
                    "value": "setRequired",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "BooleanLiteral",
                      "span": {
                        "start": 521,
                        "end": 525,
                        "ctxt": 0
                      },
                      "value": true
                    }
                  }
                ],
                "typeArguments": null
              },
              "async": false,
              "generator": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ],
        "typeArguments": null
      }
    }
  ],
  "interpreter": null
}
export const testast2 = {
  "type": "Module",
  "span": {
    "start": 0,
    "end": 532,
    "ctxt": 0
  },
  "body": [
    {
      "type": "ExpressionStatement",
      "span": {
        "start": 0,
        "end": 532,
        "ctxt": 0
      },
      "expression": {
        "type": "CallExpression",
        "span": {
          "start": 0,
          "end": 532,
          "ctxt": 0
        },
        "callee": {
          "type": "MemberExpression",
          "span": {
            "start": 0,
            "end": 438,
            "ctxt": 0
          },
          "object": {
            "type": "CallExpression",
            "span": {
              "start": 0,
              "end": 419,
              "ctxt": 0
            },
            "callee": {
              "type": "MemberExpression",
              "span": {
                "start": 0,
                "end": 108,
                "ctxt": 0
              },
              "object": {
                "type": "CallExpression",
                "span": {
                  "start": 0,
                  "end": 87,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 0,
                    "end": 65,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 0,
                      "end": 45,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 0,
                        "end": 38,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "NewExpression",
                        "span": {
                          "start": 0,
                          "end": 25,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 4,
                            "end": 23,
                            "ctxt": 1
                          },
                          "value": "SlashCommandBuilder",
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 31,
                          "end": 38,
                          "ctxt": 0
                        },
                        "value": "setName",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "StringLiteral",
                          "span": {
                            "start": 39,
                            "end": 44,
                            "ctxt": 0
                          },
                          "value": "fun",
                          "raw": "\"fun\""
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 51,
                      "end": 65,
                      "ctxt": 0
                    },
                    "value": "setDescription",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 66,
                        "end": 86,
                        "ctxt": 0
                      },
                      "value": "Replies with Pong!",
                      "raw": "\"Replies with Pong!\""
                    }
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "span": {
                  "start": 93,
                  "end": 108,
                  "ctxt": 0
                },
                "value": "addStringOption",
                "optional": false
              }
            },
            "arguments": [
              {
                "spread": null,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "span": {
                    "start": 109,
                    "end": 413,
                    "ctxt": 0
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "span": {
                        "start": 110,
                        "end": 121,
                        "ctxt": 3
                      },
                      "value": "option",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TsTypeAnnotation",
                        "span": {
                          "start": 116,
                          "end": 121,
                          "ctxt": 0
                        },
                        "typeAnnotation": {
                          "type": "TsKeywordType",
                          "span": {
                            "start": 118,
                            "end": 121,
                            "ctxt": 0
                          },
                          "kind": "any"
                        }
                      }
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "span": {
                      "start": 132,
                      "end": 413,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 132,
                        "end": 258,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 132,
                          "end": 238,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 132,
                            "end": 232,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 132,
                              "end": 211,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 132,
                                "end": 191,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 132,
                                  "end": 167,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 132,
                                    "end": 155,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 132,
                                      "end": 138,
                                      "ctxt": 3
                                    },
                                    "value": "option",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 148,
                                      "end": 155,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 156,
                                        "end": 166,
                                        "ctxt": 0
                                      },
                                      "value": "category",
                                      "raw": "\"category\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 177,
                                  "end": 191,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 192,
                                    "end": 210,
                                    "ctxt": 0
                                  },
                                  "value": "The gif category",
                                  "raw": "\"The gif category\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 221,
                              "end": 232,
                              "ctxt": 0
                            },
                            "value": "setRequired",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "BooleanLiteral",
                              "span": {
                                "start": 233,
                                "end": 237,
                                "ctxt": 0
                              },
                              "value": true
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 248,
                          "end": 258,
                          "ctxt": 0
                        },
                        "value": "addChoices",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 270,
                            "end": 307,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 272,
                                  "end": 276,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 278,
                                  "end": 285,
                                  "ctxt": 0
                                },
                                "value": "Funny",
                                "raw": "\"Funny\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 287,
                                  "end": 292,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 294,
                                  "end": 305,
                                  "ctxt": 0
                                },
                                "value": "gif_funny",
                                "raw": "\"gif_funny\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 319,
                            "end": 354,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 321,
                                  "end": 325,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 327,
                                  "end": 333,
                                  "ctxt": 0
                                },
                                "value": "Meme",
                                "raw": "\"Meme\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 335,
                                  "end": 340,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 342,
                                  "end": 352,
                                  "ctxt": 0
                                },
                                "value": "gif_meme",
                                "raw": "\"gif_meme\""
                              }
                            }
                          ]
                        }
                      },
                      {
                        "spread": null,
                        "expression": {
                          "type": "ObjectExpression",
                          "span": {
                            "start": 366,
                            "end": 403,
                            "ctxt": 0
                          },
                          "properties": [
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 368,
                                  "end": 372,
                                  "ctxt": 0
                                },
                                "value": "name",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 374,
                                  "end": 381,
                                  "ctxt": 0
                                },
                                "value": "Movie",
                                "raw": "\"Movie\""
                              }
                            },
                            {
                              "type": "KeyValueProperty",
                              "key": {
                                "type": "Identifier",
                                "span": {
                                  "start": 383,
                                  "end": 388,
                                  "ctxt": 0
                                },
                                "value": "value",
                                "optional": false
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 390,
                                  "end": 401,
                                  "ctxt": 0
                                },
                                "value": "gif_movie",
                                "raw": "\"gif_movie\""
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "async": false,
                  "generator": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "span": {
              "start": 425,
              "end": 438,
              "ctxt": 0
            },
            "value": "addUserOption",
            "optional": false
          }
        },
        "arguments": [
          {
            "spread": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "span": {
                "start": 439,
                "end": 526,
                "ctxt": 0
              },
              "params": [
                {
                  "type": "Identifier",
                  "span": {
                    "start": 440,
                    "end": 446,
                    "ctxt": 4
                  },
                  "value": "option",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "CallExpression",
                "span": {
                  "start": 457,
                  "end": 526,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 457,
                    "end": 520,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 457,
                      "end": 508,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 457,
                        "end": 497,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 457,
                          "end": 482,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 457,
                            "end": 471,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "Identifier",
                            "span": {
                              "start": 457,
                              "end": 463,
                              "ctxt": 4
                            },
                            "value": "option",
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 464,
                              "end": 471,
                              "ctxt": 0
                            },
                            "value": "setName",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "StringLiteral",
                              "span": {
                                "start": 472,
                                "end": 481,
                                "ctxt": 0
                              },
                              "value": "targetx",
                              "raw": "\"targetx\""
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 483,
                          "end": 497,
                          "ctxt": 0
                        },
                        "value": "setDescription",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "StringLiteral",
                          "span": {
                            "start": 498,
                            "end": 507,
                            "ctxt": 0
                          },
                          "value": "user x ",
                          "raw": "\"user x \""
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 509,
                      "end": 520,
                      "ctxt": 0
                    },
                    "value": "setRequired",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "BooleanLiteral",
                      "span": {
                        "start": 521,
                        "end": 525,
                        "ctxt": 0
                      },
                      "value": true
                    }
                  }
                ],
                "typeArguments": null
              },
              "async": false,
              "generator": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ],
        "typeArguments": null
      }
    }
  ],
  "interpreter": null
}
export const astswsub ={
  "type": "Module",
  "span": {
    "start": 0,
    "end": 1685,
    "ctxt": 0
  },
  "body": [
    {
      "type": "ExpressionStatement",
      "span": {
        "start": 0,
        "end": 1685,
        "ctxt": 0
      },
      "expression": {
        "type": "CallExpression",
        "span": {
          "start": 0,
          "end": 1685,
          "ctxt": 0
        },
        "callee": {
          "type": "MemberExpression",
          "span": {
            "start": 0,
            "end": 1125,
            "ctxt": 0
          },
          "object": {
            "type": "CallExpression",
            "span": {
              "start": 0,
              "end": 1111,
              "ctxt": 0
            },
            "callee": {
              "type": "MemberExpression",
              "span": {
                "start": 0,
                "end": 551,
                "ctxt": 0
              },
              "object": {
                "type": "CallExpression",
                "span": {
                  "start": 0,
                  "end": 532,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 0,
                    "end": 438,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 0,
                      "end": 419,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 0,
                        "end": 108,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 0,
                          "end": 87,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 0,
                            "end": 65,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 0,
                              "end": 45,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 0,
                                "end": 38,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "NewExpression",
                                "span": {
                                  "start": 0,
                                  "end": 25,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 4,
                                    "end": 23,
                                    "ctxt": 1
                                  },
                                  "value": "SlashCommandBuilder",
                                  "optional": false
                                },
                                "arguments": [],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31,
                                  "end": 38,
                                  "ctxt": 0
                                },
                                "value": "setName",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 39,
                                    "end": 44,
                                    "ctxt": 0
                                  },
                                  "value": "fun",
                                  "raw": "\"fun\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 51,
                              "end": 65,
                              "ctxt": 0
                            },
                            "value": "setDescription",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "StringLiteral",
                              "span": {
                                "start": 66,
                                "end": 86,
                                "ctxt": 0
                              },
                              "value": "Replies with Pong!",
                              "raw": "\"Replies with Pong!\""
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 93,
                          "end": 108,
                          "ctxt": 0
                        },
                        "value": "addStringOption",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "span": {
                            "start": 109,
                            "end": 413,
                            "ctxt": 0
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "span": {
                                "start": 110,
                                "end": 121,
                                "ctxt": 3
                              },
                              "value": "option",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TsTypeAnnotation",
                                "span": {
                                  "start": 116,
                                  "end": 121,
                                  "ctxt": 0
                                },
                                "typeAnnotation": {
                                  "type": "TsKeywordType",
                                  "span": {
                                    "start": 118,
                                    "end": 121,
                                    "ctxt": 0
                                  },
                                  "kind": "any"
                                }
                              }
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "span": {
                              "start": 132,
                              "end": 413,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 132,
                                "end": 258,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 132,
                                  "end": 238,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 132,
                                    "end": 232,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "CallExpression",
                                    "span": {
                                      "start": 132,
                                      "end": 211,
                                      "ctxt": 0
                                    },
                                    "callee": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 132,
                                        "end": 191,
                                        "ctxt": 0
                                      },
                                      "object": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 132,
                                          "end": 167,
                                          "ctxt": 0
                                        },
                                        "callee": {
                                          "type": "MemberExpression",
                                          "span": {
                                            "start": 132,
                                            "end": 155,
                                            "ctxt": 0
                                          },
                                          "object": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 132,
                                              "end": 138,
                                              "ctxt": 3
                                            },
                                            "value": "option",
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 148,
                                              "end": 155,
                                              "ctxt": 0
                                            },
                                            "value": "setName",
                                            "optional": false
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "spread": null,
                                            "expression": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 156,
                                                "end": 166,
                                                "ctxt": 0
                                              },
                                              "value": "category",
                                              "raw": "\"category\""
                                            }
                                          }
                                        ],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 177,
                                          "end": 191,
                                          "ctxt": 0
                                        },
                                        "value": "setDescription",
                                        "optional": false
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "spread": null,
                                        "expression": {
                                          "type": "StringLiteral",
                                          "span": {
                                            "start": 192,
                                            "end": 210,
                                            "ctxt": 0
                                          },
                                          "value": "The gif category",
                                          "raw": "\"The gif category\""
                                        }
                                      }
                                    ],
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 221,
                                      "end": 232,
                                      "ctxt": 0
                                    },
                                    "value": "setRequired",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "BooleanLiteral",
                                      "span": {
                                        "start": 233,
                                        "end": 237,
                                        "ctxt": 0
                                      },
                                      "value": true
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 248,
                                  "end": 258,
                                  "ctxt": 0
                                },
                                "value": "addChoices",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 270,
                                    "end": 307,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 272,
                                          "end": 276,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 278,
                                          "end": 285,
                                          "ctxt": 0
                                        },
                                        "value": "Funny",
                                        "raw": "\"Funny\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 287,
                                          "end": 292,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 294,
                                          "end": 305,
                                          "ctxt": 0
                                        },
                                        "value": "gif_funny",
                                        "raw": "\"gif_funny\""
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 319,
                                    "end": 354,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 321,
                                          "end": 325,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 327,
                                          "end": 333,
                                          "ctxt": 0
                                        },
                                        "value": "Meme",
                                        "raw": "\"Meme\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 335,
                                          "end": 340,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 342,
                                          "end": 352,
                                          "ctxt": 0
                                        },
                                        "value": "gif_meme",
                                        "raw": "\"gif_meme\""
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 366,
                                    "end": 403,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 368,
                                          "end": 372,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 374,
                                          "end": 381,
                                          "ctxt": 0
                                        },
                                        "value": "Movie",
                                        "raw": "\"Movie\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 383,
                                          "end": 388,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 390,
                                          "end": 401,
                                          "ctxt": 0
                                        },
                                        "value": "gif_movie",
                                        "raw": "\"gif_movie\""
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "async": false,
                          "generator": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 425,
                      "end": 438,
                      "ctxt": 0
                    },
                    "value": "addUserOption",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "span": {
                        "start": 439,
                        "end": 526,
                        "ctxt": 0
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "span": {
                            "start": 440,
                            "end": 446,
                            "ctxt": 4
                          },
                          "value": "option",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "span": {
                          "start": 457,
                          "end": 526,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 457,
                            "end": 520,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 457,
                              "end": 508,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 457,
                                "end": 497,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 457,
                                  "end": 482,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 457,
                                    "end": 471,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 457,
                                      "end": 463,
                                      "ctxt": 4
                                    },
                                    "value": "option",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 464,
                                      "end": 471,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 472,
                                        "end": 481,
                                        "ctxt": 0
                                      },
                                      "value": "targetx",
                                      "raw": "\"targetx\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 483,
                                  "end": 497,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 498,
                                    "end": 507,
                                    "ctxt": 0
                                  },
                                  "value": "user x ",
                                  "raw": "\"user x \""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 509,
                              "end": 520,
                              "ctxt": 0
                            },
                            "value": "setRequired",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "BooleanLiteral",
                              "span": {
                                "start": 521,
                                "end": 525,
                                "ctxt": 0
                              },
                              "value": true
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "async": false,
                      "generator": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "span": {
                  "start": 538,
                  "end": 551,
                  "ctxt": 0
                },
                "value": "addSubcommand",
                "optional": false
              }
            },
            "arguments": [
              {
                "spread": null,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "span": {
                    "start": 552,
                    "end": 1105,
                    "ctxt": 0
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "span": {
                        "start": 553,
                        "end": 563,
                        "ctxt": 5
                      },
                      "value": "subcommand",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "span": {
                      "start": 574,
                      "end": 1105,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 574,
                        "end": 794,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 574,
                          "end": 769,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 574,
                            "end": 685,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 574,
                              "end": 662,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 574,
                                "end": 634,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 574,
                                  "end": 610,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 574,
                                    "end": 601,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 574,
                                      "end": 584,
                                      "ctxt": 5
                                    },
                                    "value": "subcommand",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 594,
                                      "end": 601,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 602,
                                        "end": 609,
                                        "ctxt": 0
                                      },
                                      "value": "user3",
                                      "raw": "\"user3\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 620,
                                  "end": 634,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 635,
                                    "end": 661,
                                    "ctxt": 0
                                  },
                                  "value": "Info about a user TAGEUL",
                                  "raw": "\"Info about a user TAGEUL\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 672,
                              "end": 685,
                              "ctxt": 0
                            },
                            "value": "addUserOption",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "ArrowFunctionExpression",
                              "span": {
                                "start": 686,
                                "end": 759,
                                "ctxt": 0
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "span": {
                                    "start": 687,
                                    "end": 693,
                                    "ctxt": 6
                                  },
                                  "value": "option",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "body": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 708,
                                  "end": 759,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 708,
                                    "end": 747,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "CallExpression",
                                    "span": {
                                      "start": 708,
                                      "end": 732,
                                      "ctxt": 0
                                    },
                                    "callee": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 708,
                                        "end": 722,
                                        "ctxt": 0
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 708,
                                          "end": 714,
                                          "ctxt": 6
                                        },
                                        "value": "option",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 715,
                                          "end": 722,
                                          "ctxt": 0
                                        },
                                        "value": "setName",
                                        "optional": false
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "spread": null,
                                        "expression": {
                                          "type": "StringLiteral",
                                          "span": {
                                            "start": 723,
                                            "end": 731,
                                            "ctxt": 0
                                          },
                                          "value": "target",
                                          "raw": "\"target\""
                                        }
                                      }
                                    ],
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 733,
                                      "end": 747,
                                      "ctxt": 0
                                    },
                                    "value": "setDescription",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 748,
                                        "end": 758,
                                        "ctxt": 0
                                      },
                                      "value": "The user",
                                      "raw": "\"The user\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "async": false,
                              "generator": false,
                              "typeParameters": null,
                              "returnType": null
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 779,
                          "end": 794,
                          "ctxt": 0
                        },
                        "value": "addStringOption",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "span": {
                            "start": 795,
                            "end": 1099,
                            "ctxt": 0
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "span": {
                                "start": 796,
                                "end": 807,
                                "ctxt": 7
                              },
                              "value": "option",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TsTypeAnnotation",
                                "span": {
                                  "start": 802,
                                  "end": 807,
                                  "ctxt": 0
                                },
                                "typeAnnotation": {
                                  "type": "TsKeywordType",
                                  "span": {
                                    "start": 804,
                                    "end": 807,
                                    "ctxt": 0
                                  },
                                  "kind": "any"
                                }
                              }
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "span": {
                              "start": 818,
                              "end": 1099,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 818,
                                "end": 944,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 818,
                                  "end": 924,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 818,
                                    "end": 918,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "CallExpression",
                                    "span": {
                                      "start": 818,
                                      "end": 897,
                                      "ctxt": 0
                                    },
                                    "callee": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 818,
                                        "end": 877,
                                        "ctxt": 0
                                      },
                                      "object": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 818,
                                          "end": 853,
                                          "ctxt": 0
                                        },
                                        "callee": {
                                          "type": "MemberExpression",
                                          "span": {
                                            "start": 818,
                                            "end": 841,
                                            "ctxt": 0
                                          },
                                          "object": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 818,
                                              "end": 824,
                                              "ctxt": 7
                                            },
                                            "value": "option",
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 834,
                                              "end": 841,
                                              "ctxt": 0
                                            },
                                            "value": "setName",
                                            "optional": false
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "spread": null,
                                            "expression": {
                                              "type": "StringLiteral",
                                              "span": {
                                                "start": 842,
                                                "end": 852,
                                                "ctxt": 0
                                              },
                                              "value": "category",
                                              "raw": "\"category\""
                                            }
                                          }
                                        ],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 863,
                                          "end": 877,
                                          "ctxt": 0
                                        },
                                        "value": "setDescription",
                                        "optional": false
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "spread": null,
                                        "expression": {
                                          "type": "StringLiteral",
                                          "span": {
                                            "start": 878,
                                            "end": 896,
                                            "ctxt": 0
                                          },
                                          "value": "The gif category",
                                          "raw": "\"The gif category\""
                                        }
                                      }
                                    ],
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 907,
                                      "end": 918,
                                      "ctxt": 0
                                    },
                                    "value": "setRequired",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "BooleanLiteral",
                                      "span": {
                                        "start": 919,
                                        "end": 923,
                                        "ctxt": 0
                                      },
                                      "value": true
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 934,
                                  "end": 944,
                                  "ctxt": 0
                                },
                                "value": "addChoices",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 956,
                                    "end": 993,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 958,
                                          "end": 962,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 964,
                                          "end": 971,
                                          "ctxt": 0
                                        },
                                        "value": "Funny",
                                        "raw": "\"Funny\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 973,
                                          "end": 978,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 980,
                                          "end": 991,
                                          "ctxt": 0
                                        },
                                        "value": "gif_funny",
                                        "raw": "\"gif_funny\""
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 1005,
                                    "end": 1040,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1007,
                                          "end": 1011,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 1013,
                                          "end": 1019,
                                          "ctxt": 0
                                        },
                                        "value": "Meme",
                                        "raw": "\"Meme\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1021,
                                          "end": 1026,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 1028,
                                          "end": 1038,
                                          "ctxt": 0
                                        },
                                        "value": "gif_meme",
                                        "raw": "\"gif_meme\""
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                "spread": null,
                                "expression": {
                                  "type": "ObjectExpression",
                                  "span": {
                                    "start": 1052,
                                    "end": 1089,
                                    "ctxt": 0
                                  },
                                  "properties": [
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1054,
                                          "end": 1058,
                                          "ctxt": 0
                                        },
                                        "value": "name",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 1060,
                                          "end": 1067,
                                          "ctxt": 0
                                        },
                                        "value": "Movie",
                                        "raw": "\"Movie\""
                                      }
                                    },
                                    {
                                      "type": "KeyValueProperty",
                                      "key": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1069,
                                          "end": 1074,
                                          "ctxt": 0
                                        },
                                        "value": "value",
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "StringLiteral",
                                        "span": {
                                          "start": 1076,
                                          "end": 1087,
                                          "ctxt": 0
                                        },
                                        "value": "gif_movie",
                                        "raw": "\"gif_movie\""
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "async": false,
                          "generator": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "async": false,
                  "generator": false,
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "span": {
              "start": 1112,
              "end": 1125,
              "ctxt": 0
            },
            "value": "addSubcommand",
            "optional": false
          }
        },
        "arguments": [
          {
            "spread": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "span": {
                "start": 1126,
                "end": 1679,
                "ctxt": 0
              },
              "params": [
                {
                  "type": "Identifier",
                  "span": {
                    "start": 1127,
                    "end": 1137,
                    "ctxt": 8
                  },
                  "value": "subcommand",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "CallExpression",
                "span": {
                  "start": 1148,
                  "end": 1679,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 1148,
                    "end": 1368,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 1148,
                      "end": 1343,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 1148,
                        "end": 1259,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 1148,
                          "end": 1236,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 1148,
                            "end": 1208,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 1148,
                              "end": 1184,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 1148,
                                "end": 1175,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 1148,
                                  "end": 1158,
                                  "ctxt": 8
                                },
                                "value": "subcommand",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 1168,
                                  "end": 1175,
                                  "ctxt": 0
                                },
                                "value": "setName",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 1176,
                                    "end": 1183,
                                    "ctxt": 0
                                  },
                                  "value": "user3",
                                  "raw": "\"user3\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 1194,
                              "end": 1208,
                              "ctxt": 0
                            },
                            "value": "setDescription",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "StringLiteral",
                              "span": {
                                "start": 1209,
                                "end": 1235,
                                "ctxt": 0
                              },
                              "value": "Info about a user TAGEUL",
                              "raw": "\"Info about a user TAGEUL\""
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 1246,
                          "end": 1259,
                          "ctxt": 0
                        },
                        "value": "addUserOption",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "span": {
                            "start": 1260,
                            "end": 1333,
                            "ctxt": 0
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "span": {
                                "start": 1261,
                                "end": 1267,
                                "ctxt": 9
                              },
                              "value": "option",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "span": {
                              "start": 1282,
                              "end": 1333,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 1282,
                                "end": 1321,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 1282,
                                  "end": 1306,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 1282,
                                    "end": 1296,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1282,
                                      "end": 1288,
                                      "ctxt": 9
                                    },
                                    "value": "option",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1289,
                                      "end": 1296,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 1297,
                                        "end": 1305,
                                        "ctxt": 0
                                      },
                                      "value": "target",
                                      "raw": "\"target\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 1307,
                                  "end": 1321,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 1322,
                                    "end": 1332,
                                    "ctxt": 0
                                  },
                                  "value": "The user",
                                  "raw": "\"The user\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "async": false,
                          "generator": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 1353,
                      "end": 1368,
                      "ctxt": 0
                    },
                    "value": "addStringOption",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "span": {
                        "start": 1369,
                        "end": 1673,
                        "ctxt": 0
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "span": {
                            "start": 1370,
                            "end": 1381,
                            "ctxt": 10
                          },
                          "value": "option",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TsTypeAnnotation",
                            "span": {
                              "start": 1376,
                              "end": 1381,
                              "ctxt": 0
                            },
                            "typeAnnotation": {
                              "type": "TsKeywordType",
                              "span": {
                                "start": 1378,
                                "end": 1381,
                                "ctxt": 0
                              },
                              "kind": "any"
                            }
                          }
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "span": {
                          "start": 1392,
                          "end": 1673,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 1392,
                            "end": 1518,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 1392,
                              "end": 1498,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 1392,
                                "end": 1492,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 1392,
                                  "end": 1471,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 1392,
                                    "end": 1451,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "CallExpression",
                                    "span": {
                                      "start": 1392,
                                      "end": 1427,
                                      "ctxt": 0
                                    },
                                    "callee": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 1392,
                                        "end": 1415,
                                        "ctxt": 0
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1392,
                                          "end": 1398,
                                          "ctxt": 10
                                        },
                                        "value": "option",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 1408,
                                          "end": 1415,
                                          "ctxt": 0
                                        },
                                        "value": "setName",
                                        "optional": false
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "spread": null,
                                        "expression": {
                                          "type": "StringLiteral",
                                          "span": {
                                            "start": 1416,
                                            "end": 1426,
                                            "ctxt": 0
                                          },
                                          "value": "category",
                                          "raw": "\"category\""
                                        }
                                      }
                                    ],
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1437,
                                      "end": 1451,
                                      "ctxt": 0
                                    },
                                    "value": "setDescription",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 1452,
                                        "end": 1470,
                                        "ctxt": 0
                                      },
                                      "value": "The gif category",
                                      "raw": "\"The gif category\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 1481,
                                  "end": 1492,
                                  "ctxt": 0
                                },
                                "value": "setRequired",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "BooleanLiteral",
                                  "span": {
                                    "start": 1493,
                                    "end": 1497,
                                    "ctxt": 0
                                  },
                                  "value": true
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 1508,
                              "end": 1518,
                              "ctxt": 0
                            },
                            "value": "addChoices",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 1530,
                                "end": 1567,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1532,
                                      "end": 1536,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1538,
                                      "end": 1545,
                                      "ctxt": 0
                                    },
                                    "value": "Funny",
                                    "raw": "\"Funny\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1547,
                                      "end": 1552,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1554,
                                      "end": 1565,
                                      "ctxt": 0
                                    },
                                    "value": "gif_funny",
                                    "raw": "\"gif_funny\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 1579,
                                "end": 1614,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1581,
                                      "end": 1585,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1587,
                                      "end": 1593,
                                      "ctxt": 0
                                    },
                                    "value": "Meme",
                                    "raw": "\"Meme\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1595,
                                      "end": 1600,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1602,
                                      "end": 1612,
                                      "ctxt": 0
                                    },
                                    "value": "gif_meme",
                                    "raw": "\"gif_meme\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 1626,
                                "end": 1663,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1628,
                                      "end": 1632,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1634,
                                      "end": 1641,
                                      "ctxt": 0
                                    },
                                    "value": "Movie",
                                    "raw": "\"Movie\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 1643,
                                      "end": 1648,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 1650,
                                      "end": 1661,
                                      "ctxt": 0
                                    },
                                    "value": "gif_movie",
                                    "raw": "\"gif_movie\""
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "async": false,
                      "generator": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ],
                "typeArguments": null
              },
              "async": false,
              "generator": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ],
        "typeArguments": null
      }
    }
  ],
  "interpreter": null
}
export const subastonly = {
  "type": "Module",
  "span": {
    "start": 0,
    "end": 573,
    "ctxt": 0
  },
  "body": [
    {
      "type": "ExpressionStatement",
      "span": {
        "start": 0,
        "end": 573,
        "ctxt": 0
      },
      "expression": {
        "type": "CallExpression",
        "span": {
          "start": 0,
          "end": 573,
          "ctxt": 0
        },
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 0,
            "end": 13,
            "ctxt": 1
          },
          "value": "addSubcommand",
          "optional": false
        },
        "arguments": [
          {
            "spread": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "span": {
                "start": 14,
                "end": 567,
                "ctxt": 0
              },
              "params": [
                {
                  "type": "Identifier",
                  "span": {
                    "start": 15,
                    "end": 25,
                    "ctxt": 3
                  },
                  "value": "subcommand",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "CallExpression",
                "span": {
                  "start": 36,
                  "end": 567,
                  "ctxt": 0
                },
                "callee": {
                  "type": "MemberExpression",
                  "span": {
                    "start": 36,
                    "end": 256,
                    "ctxt": 0
                  },
                  "object": {
                    "type": "CallExpression",
                    "span": {
                      "start": 36,
                      "end": 231,
                      "ctxt": 0
                    },
                    "callee": {
                      "type": "MemberExpression",
                      "span": {
                        "start": 36,
                        "end": 147,
                        "ctxt": 0
                      },
                      "object": {
                        "type": "CallExpression",
                        "span": {
                          "start": 36,
                          "end": 124,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 36,
                            "end": 96,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 36,
                              "end": 72,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 36,
                                "end": 63,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 36,
                                  "end": 46,
                                  "ctxt": 3
                                },
                                "value": "subcommand",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 56,
                                  "end": 63,
                                  "ctxt": 0
                                },
                                "value": "setName",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 64,
                                    "end": 71,
                                    "ctxt": 0
                                  },
                                  "value": "user3",
                                  "raw": "\"user3\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 82,
                              "end": 96,
                              "ctxt": 0
                            },
                            "value": "setDescription",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "StringLiteral",
                              "span": {
                                "start": 97,
                                "end": 123,
                                "ctxt": 0
                              },
                              "value": "Info about a user TAGEUL",
                              "raw": "\"Info about a user TAGEUL\""
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "span": {
                          "start": 134,
                          "end": 147,
                          "ctxt": 0
                        },
                        "value": "addUserOption",
                        "optional": false
                      }
                    },
                    "arguments": [
                      {
                        "spread": null,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "span": {
                            "start": 148,
                            "end": 221,
                            "ctxt": 0
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "span": {
                                "start": 149,
                                "end": 155,
                                "ctxt": 4
                              },
                              "value": "option",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "span": {
                              "start": 170,
                              "end": 221,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 170,
                                "end": 209,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 170,
                                  "end": 194,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 170,
                                    "end": 184,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 170,
                                      "end": 176,
                                      "ctxt": 4
                                    },
                                    "value": "option",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 177,
                                      "end": 184,
                                      "ctxt": 0
                                    },
                                    "value": "setName",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 185,
                                        "end": 193,
                                        "ctxt": 0
                                      },
                                      "value": "target",
                                      "raw": "\"target\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 195,
                                  "end": 209,
                                  "ctxt": 0
                                },
                                "value": "setDescription",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "StringLiteral",
                                  "span": {
                                    "start": 210,
                                    "end": 220,
                                    "ctxt": 0
                                  },
                                  "value": "The user",
                                  "raw": "\"The user\""
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "async": false,
                          "generator": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      }
                    ],
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "span": {
                      "start": 241,
                      "end": 256,
                      "ctxt": 0
                    },
                    "value": "addStringOption",
                    "optional": false
                  }
                },
                "arguments": [
                  {
                    "spread": null,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "span": {
                        "start": 257,
                        "end": 561,
                        "ctxt": 0
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "span": {
                            "start": 258,
                            "end": 269,
                            "ctxt": 5
                          },
                          "value": "option",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TsTypeAnnotation",
                            "span": {
                              "start": 264,
                              "end": 269,
                              "ctxt": 0
                            },
                            "typeAnnotation": {
                              "type": "TsKeywordType",
                              "span": {
                                "start": 266,
                                "end": 269,
                                "ctxt": 0
                              },
                              "kind": "any"
                            }
                          }
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "span": {
                          "start": 280,
                          "end": 561,
                          "ctxt": 0
                        },
                        "callee": {
                          "type": "MemberExpression",
                          "span": {
                            "start": 280,
                            "end": 406,
                            "ctxt": 0
                          },
                          "object": {
                            "type": "CallExpression",
                            "span": {
                              "start": 280,
                              "end": 386,
                              "ctxt": 0
                            },
                            "callee": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 280,
                                "end": 380,
                                "ctxt": 0
                              },
                              "object": {
                                "type": "CallExpression",
                                "span": {
                                  "start": 280,
                                  "end": 359,
                                  "ctxt": 0
                                },
                                "callee": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 280,
                                    "end": 339,
                                    "ctxt": 0
                                  },
                                  "object": {
                                    "type": "CallExpression",
                                    "span": {
                                      "start": 280,
                                      "end": 315,
                                      "ctxt": 0
                                    },
                                    "callee": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 280,
                                        "end": 303,
                                        "ctxt": 0
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 280,
                                          "end": 286,
                                          "ctxt": 5
                                        },
                                        "value": "option",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 296,
                                          "end": 303,
                                          "ctxt": 0
                                        },
                                        "value": "setName",
                                        "optional": false
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "spread": null,
                                        "expression": {
                                          "type": "StringLiteral",
                                          "span": {
                                            "start": 304,
                                            "end": 314,
                                            "ctxt": 0
                                          },
                                          "value": "category",
                                          "raw": "\"category\""
                                        }
                                      }
                                    ],
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 325,
                                      "end": 339,
                                      "ctxt": 0
                                    },
                                    "value": "setDescription",
                                    "optional": false
                                  }
                                },
                                "arguments": [
                                  {
                                    "spread": null,
                                    "expression": {
                                      "type": "StringLiteral",
                                      "span": {
                                        "start": 340,
                                        "end": 358,
                                        "ctxt": 0
                                      },
                                      "value": "The gif category",
                                      "raw": "\"The gif category\""
                                    }
                                  }
                                ],
                                "typeArguments": null
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 369,
                                  "end": 380,
                                  "ctxt": 0
                                },
                                "value": "setRequired",
                                "optional": false
                              }
                            },
                            "arguments": [
                              {
                                "spread": null,
                                "expression": {
                                  "type": "BooleanLiteral",
                                  "span": {
                                    "start": 381,
                                    "end": 385,
                                    "ctxt": 0
                                  },
                                  "value": true
                                }
                              }
                            ],
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "span": {
                              "start": 396,
                              "end": 406,
                              "ctxt": 0
                            },
                            "value": "addChoices",
                            "optional": false
                          }
                        },
                        "arguments": [
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 418,
                                "end": 455,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 420,
                                      "end": 424,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 426,
                                      "end": 433,
                                      "ctxt": 0
                                    },
                                    "value": "Funny",
                                    "raw": "\"Funny\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 435,
                                      "end": 440,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 442,
                                      "end": 453,
                                      "ctxt": 0
                                    },
                                    "value": "gif_funny",
                                    "raw": "\"gif_funny\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 467,
                                "end": 502,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 469,
                                      "end": 473,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 475,
                                      "end": 481,
                                      "ctxt": 0
                                    },
                                    "value": "Meme",
                                    "raw": "\"Meme\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 483,
                                      "end": 488,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 490,
                                      "end": 500,
                                      "ctxt": 0
                                    },
                                    "value": "gif_meme",
                                    "raw": "\"gif_meme\""
                                  }
                                }
                              ]
                            }
                          },
                          {
                            "spread": null,
                            "expression": {
                              "type": "ObjectExpression",
                              "span": {
                                "start": 514,
                                "end": 551,
                                "ctxt": 0
                              },
                              "properties": [
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 516,
                                      "end": 520,
                                      "ctxt": 0
                                    },
                                    "value": "name",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 522,
                                      "end": 529,
                                      "ctxt": 0
                                    },
                                    "value": "Movie",
                                    "raw": "\"Movie\""
                                  }
                                },
                                {
                                  "type": "KeyValueProperty",
                                  "key": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 531,
                                      "end": 536,
                                      "ctxt": 0
                                    },
                                    "value": "value",
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 538,
                                      "end": 549,
                                      "ctxt": 0
                                    },
                                    "value": "gif_movie",
                                    "raw": "\"gif_movie\""
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        "typeArguments": null
                      },
                      "async": false,
                      "generator": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ],
                "typeArguments": null
              },
              "async": false,
              "generator": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ],
        "typeArguments": null
      }
    }
  ],
  "interpreter": null
}




  

export const djsfile = `module.exports = {
    data: new SlashCommandBuilder()
      .setName("fun")
      .setDescription("Replies with Pong!")
      .addSubcommand((subcommand) =>
        subcommand
          .setName("user3")
          .setDescription("Info about a user TAGEUL")
          .addUserOption((option: any) =>
            option.setName("target").setDescription("The user")
            
          ).addBooleanOption(option =>
            option.setName('embed')
              .setDescription('Whether or not the echo should be embedded')).addChannelOption(option =>
                option.setName('channel')
                  .setDescription('The channel to echo into')
                  // Ensure the user can only select a TextChannel for output
                  .addChannelTypes(ChannelType.GuildText)).addStringOption(option =>
                    option.setName('input')
                      .setDescription('The input to echo back')
                      // Ensure the text will fit in an embed description, if the user chooses that option
                      .setMaxLength(2_000)).addAttachmentOption((option)=> option
                      .setRequired(true)
                      .setName("image")
                      .setDescription("The image to dither"))
              
              
              ),
      
    async execute(interaction: any, hi: any, lol: any, d: any, idk: any, g: any) {
      await interaction.reply("Pong!");
      // I am a commen
      const random = {}
      for (const [key, value] of Object.entries(random)) {
      }
  
      // FILE POUR.TS
      // FILE POUR.TS
      // FILE POUR.TS
      // FILE POUR.TS
      // FILE POUR.TS
      // FILE POUR.TS
  
      await interaction.reply("Pong'-j!");
      await interaction.reply("Pongjz'a(-jza'-j!");
      await interaction.reply("Ponzergzegajajag!");
      await interaction.reply("Pong!");
    }
  };`



export const realworldfile = `
const { SlashCommandBuilder } = require('@discordjs/builders'); // Literally required.
const { SlashCommandBuilder, SlashCommandBuilder, } = require('@discordjs/builders'); // Literally required.
const djs =  require('@discordjs/builders'); 

module.exports = {
    data: new SlashCommandBuilder()
      .setName("fun")
      .setDescription("Replies with Pong!")
      .addSubcommand((subcommand) =>
        subcommand
          .setName("user3")
          .setDescription("Info about a user TAGEUL")
          .addUserOption((option: any) =>
            option.setName("target").setDescription("The user")        
          )
          .addBooleanOption(option =>
            option.setName('embed')
            .setDescription('Whether or not the echo should be embedded'))
          .addChannelOption(option =>
            option.setName('channel')
              .setDescription('The channel to echo into')
              // Ensure the user can only select a TextChannel for output
              .addChannelTypes(ChannelType.GuildText))
          .addStringOption(option =>
            option.setName('input')
              .setDescription('The input to echo back')
              .addChoices(
                { name: 'Funny', value: 'gif_funny' },
                { name: 'Meme', value: 'gif_meme' },
                { name: 'Movie', value: 'gif_movie' },
              )
              .setNameLocalizations({
                pl: 'rasa',
                de: 'rasse',
              })
              .setDescriptionLocalizations({
                pl: 'Rasa psa',
                de: 'Hunderasse',
              })
              .setMaxLength(2000)
              .setMinLength(2000))
          .addAttachmentOption((option) => option
              .setRequired(true)
              .setName("image")
              .setDescription("The image to dither"))
              ),
    async execute(interaction: any, hi: any, lol: any, d: any, idk: any, g: any) {
      await interaction.reply("Pong!");
      // I am a comment
      const random = "dddd"
      let bonjour  = "non"
      for (const [key, value] of Object.entries(random)) {
      }

      await interaction.reply("Pong'-j!");
      await interaction.reply("Pongjz'a(-jza'-j!");
      await interaction.reply("Ponzergzegajajag!");
      await interaction.reply("Pong!");
    }
  };`


export const rld = `
const { SlashCommandBuilder } = require('@discordjs/builders'); // Literally required.
const { SlashCommandBuilder, SlashCommandBuilder, } = require('@discordjs/builders'); // Literally required.
const djs =  require('@discordjs/builders'); 

module.exports = {
    data: new SlashCommandBuilder()
          .setName("user3")
          .setDescription("Info about a user TAGEUL")
          .setDefaultMemberPermissions(lol | mdr | ok | non)
          .setDMPermission(false)
          .addChoices(
            { name: 'Funny', value: 'gif_funny' },
            { name: 'Meme', value: 'gif_meme' },
            { name: 'Movie', value: 'gif_movie' },
          )
          .addUserOption((option: any) =>
            option.setName("target").setDescription("The user")        
          )
          .addBooleanOption(option =>
            option.setName('embed')
            .setDescription('Whether or not the echo should be embedded'))
          .addChannelOption(option =>
            option.setName('channel')
              .setDescription('The channel to echo into')
              // Ensure the user can only select a TextChannel for output
              .addChannelTypes(ChannelType.GuildText))
          .addStringOption(option =>
            option.setName('input')
              .setDescription('The input to echo back')
              .addChoices(
                { name: 'Funny', value: 'gif_funny' },
                { name: 'Meme', value: 'gif_meme' },
                { name: 'Movie', value: 'gif_movie' },
              )
              .setNameLocalizations({
                pl: 'rasa',
                de: 'rasse',
              })
              .setDescriptionLocalizations({
                pl: 'Rasa psa',
                de: 'Hunderasse',
              })
              .setMaxLength(2000)
              .setMinLength(2000))
          .addAttachmentOption((option) => option
              .setRequired(true)
              .setName("image")
              .setDescription("The image to dither")),
    async execute(interaction: any, hi: any, lol: any, d: any, idk: any, g: any) {
      await interaction.reply("Pong!");
      // I am a comment
      const random: string | number | Array<Array<number | string> | number | boolean> = {a: 6}
      const lol: string = "f"
      for (const [key, value] of Object.entries(random)) {
      }

      await interaction.reply("Pong'-j!");
      await interaction.reply("Pongjz'a(-jza'-j!");
      await interaction.reply("Ponzergzegajajag!");
      await interaction.reply("Pong!");
    }
  };`


  const translatedMessage = {
    text: "lol"
  }

  export const contestCommand = `
  const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');
  const translate = require('@vitalets/google-translate-api');
  
  module.exports = {
      data: new ContextMenuCommandBuilder()
          .setName('Translate')
          .setType(ApplicationCommandType.Message),
  
      async execute(interaction) {
          try {
              const translatedMessage = await translate(interaction.target.content, { to: 'en' });
  
              interaction.reply({
                  content: 'Translated message: ${translatedMessage.text}'
              });
          } catch (error) {
              console.error('Error translating message:', error);
              interaction.reply({
                  content: 'An error occurred while translating the message.'
              });
          }
      }
  };`