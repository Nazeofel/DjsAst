// vars.ts
var traverse = function(v, nodes) {
    for (const node of Object.values(nodes)) {
      v.enter(node);
      v.exit(node);
    }
    if (nodes && nodes[0] && nodes[0].body) {
      return traverse(v, nodes[0].body);
    }
    if (nodes && nodes.stmts) {
      return traverse(v, nodes.stmts);
    }
  };
  var ast = {
    type: "Module",
    span: {
      start: 0,
      end: 124,
      ctxt: 0
    },
    body: [
      {
        type: "FunctionDeclaration",
        identifier: {
          type: "Identifier",
          span: {
            start: 9,
            end: 11,
            ctxt: 2
          },
          value: "hi",
          optional: false
        },
        declare: false,
        params: [],
        decorators: [],
        span: {
          start: 0,
          end: 124,
          ctxt: 3
        },
        body: {
          type: "BlockStatement",
          span: {
            start: 14,
            end: 124,
            ctxt: 3
          },
          stmts: [
            {
              type: "VariableDeclaration",
              span: {
                start: 21,
                end: 41,
                ctxt: 0
              },
              kind: "let",
              declare: false,
              declarations: [
                {
                  type: "VariableDeclarator",
                  span: {
                    start: 25,
                    end: 41,
                    ctxt: 0
                  },
                  id: {
                    type: "Identifier",
                    span: {
                      start: 25,
                      end: 33,
                      ctxt: 3
                    },
                    value: "myGlobal",
                    optional: false,
                    typeAnnotation: null
                  },
                  init: {
                    type: "StringLiteral",
                    span: {
                      start: 36,
                      end: 41,
                      ctxt: 0
                    },
                    value: "hey",
                    raw: "\"hey\""
                  },
                  definite: false
                }
              ]
            },
            {
              type: "VariableDeclaration",
              span: {
                start: 46,
                end: 66,
                ctxt: 0
              },
              kind: "const",
              declare: false,
              declarations: [
                {
                  type: "VariableDeclarator",
                  span: {
                    start: 52,
                    end: 66,
                    ctxt: 0
                  },
                  id: {
                    type: "Identifier",
                    span: {
                      start: 52,
                      end: 59,
                      ctxt: 3
                    },
                    value: "cmdname",
                    optional: false,
                    typeAnnotation: null
                  },
                  init: {
                    type: "StringLiteral",
                    span: {
                      start: 62,
                      end: 66,
                      ctxt: 0
                    },
                    value: "hi",
                    raw: "\"hi\""
                  },
                  definite: false
                }
              ]
            },
            {
              type: "IfStatement",
              span: {
                start: 71,
                end: 122,
                ctxt: 0
              },
              test: {
                type: "BinaryExpression",
                span: {
                  start: 74,
                  end: 89,
                  ctxt: 0
                },
                operator: "==",
                left: {
                  type: "Identifier",
                  span: {
                    start: 74,
                    end: 81,
                    ctxt: 3
                  },
                  value: "cmdname",
                  optional: false
                },
                right: {
                  type: "StringLiteral",
                  span: {
                    start: 85,
                    end: 89,
                    ctxt: 0
                  },
                  value: "hi",
                  raw: "'hi'"
                }
              },
              consequent: {
                type: "BlockStatement",
                span: {
                  start: 90,
                  end: 122,
                  ctxt: 4
                },
                stmts: [
                  {
                    type: "ExpressionStatement",
                    span: {
                      start: 100,
                      end: 116,
                      ctxt: 0
                    },
                    expression: {
                      type: "AssignmentExpression",
                      span: {
                        start: 100,
                        end: 116,
                        ctxt: 0
                      },
                      operator: "=",
                      left: {
                        type: "Identifier",
                        span: {
                          start: 100,
                          end: 108,
                          ctxt: 3
                        },
                        value: "myGlobal",
                        optional: false,
                        typeAnnotation: null
                      },
                      right: {
                        type: "StringLiteral",
                        span: {
                          start: 111,
                          end: 116,
                          ctxt: 0
                        },
                        value: "oui",
                        raw: "\"oui\""
                      }
                    }
                  }
                ]
              },
              alternate: null
            }
          ]
        },
        generator: false,
        async: false,
        typeParameters: null,
        returnType: null
      }
    ],
    interpreter: null
  };
  var commandNames = ["hi"];
  
  class Hi {
    variables = [];
    enter(node) {
      if (node.type === "IfStatement") {
        this.ifStatementChecker(node);
      }
      if (node.type === "VariableDeclaration") {
        this.variableRetriever(node);
      }
    }
    exit(node) {
    }
    variableRetriever(node) {
      if (node && node.expression && node.expression.type === "AssignmentExpression") {
        const varAssignmentExrp = node.expression.left.value;
        for (const obj of Object.values(this.variables)) {
          if (obj.name === varAssignmentExrp) {
            obj.isGlobal = true;
          }
        }
      }
      if (node !== undefined && node.declarations !== undefined) {
        const varName = node?.declarations[0]?.id?.value;
        const varValue = node?.declarations[0]?.init.value;
        this.variables.push({ kind: node.kind, name: varName, value: varValue, isGlobal: false });
      }
    }
    ifStatementChecker(node) {
      if (commandNames.includes(node.test.right.value)) {
        for (const stmt of Object.values(node.consequent.stmts)) {
          this.variableRetriever(stmt);
        }
      }
    }
  }
  var x = new Hi;
  traverse(x, ast.body);
  console.log(x.variables);







