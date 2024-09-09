function hi() {

    let myGlobal = 34
    const cmdname = "hi"
    if(cmdname == 'hi'){
        myGlobal = 50
    }
}

const ast = {
    "type": "Module",
    "span": {
      "start": 0,
      "end": 124,
      "ctxt": 0
    },
    "body": [
      {
        "type": "FunctionDeclaration",
        "identifier": {
          "type": "Identifier",
          "span": {
            "start": 9,
            "end": 11,
            "ctxt": 2
          },
          "value": "hi",
          "optional": false
        },
        "declare": false,
        "params": [],
        "decorators": [],
        "span": {
          "start": 0,
          "end": 124,
          "ctxt": 3
        },
        "body": {
          "type": "BlockStatement",
          "span": {
            "start": 14,
            "end": 124,
            "ctxt": 3
          },
          "stmts": [
            {
              "type": "VariableDeclaration",
              "span": {
                "start": 21,
                "end": 41,
                "ctxt": 0
              },
              "kind": "let",
              "declare": false,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "span": {
                    "start": 25,
                    "end": 41,
                    "ctxt": 0
                  },
                  "id": {
                    "type": "Identifier",
                    "span": {
                      "start": 25,
                      "end": 33,
                      "ctxt": 3
                    },
                    "value": "myGlobal",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "StringLiteral",
                    "span": {
                      "start": 36,
                      "end": 41,
                      "ctxt": 0
                    },
                    "value": 34,
                    "raw": "\"34\""
                  },
                  "definite": false
                }
              ]
            },
            {
              "type": "VariableDeclaration",
              "span": {
                "start": 46,
                "end": 66,
                "ctxt": 0
              },
              "kind": "const",
              "declare": false,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "span": {
                    "start": 52,
                    "end": 66,
                    "ctxt": 0
                  },
                  "id": {
                    "type": "Identifier",
                    "span": {
                      "start": 52,
                      "end": 59,
                      "ctxt": 3
                    },
                    "value": "cmdname",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "StringLiteral",
                    "span": {
                      "start": 62,
                      "end": 66,
                      "ctxt": 0
                    },
                    "value": "hi",
                    "raw": "\"hi\""
                  },
                  "definite": false
                }
              ]
            },
            {
              "type": "IfStatement",
              "span": {
                "start": 71,
                "end": 122,
                "ctxt": 0
              },
              "test": {
                "type": "BinaryExpression",
                "span": {
                  "start": 74,
                  "end": 89,
                  "ctxt": 0
                },
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "span": {
                    "start": 74,
                    "end": 81,
                    "ctxt": 3
                  },
                  "value": "cmdname",
                  "optional": false
                },
                "right": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 85,
                    "end": 89,
                    "ctxt": 0
                  },
                  "value": "hi",
                  "raw": "'hi'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "span": {
                  "start": 90,
                  "end": 122,
                  "ctxt": 4
                },
                "stmts": [
                  {
                    "type": "ExpressionStatement",
                    "span": {
                      "start": 100,
                      "end": 116,
                      "ctxt": 0
                    },
                    "expression": {
                      "type": "AssignmentExpression",
                      "span": {
                        "start": 100,
                        "end": 116,
                        "ctxt": 0
                      },
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "span": {
                          "start": 100,
                          "end": 108,
                          "ctxt": 3
                        },
                        "value": "myGlobal",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "StringLiteral",
                        "span": {
                          "start": 111,
                          "end": 116,
                          "ctxt": 0
                        },
                        "value": "oui",
                        "raw": "\"oui\""
                      }
                    }
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "generator": false,
        "async": false,
        "typeParameters": null,
        "returnType": null
      }
    ],
    "interpreter": null
  }
