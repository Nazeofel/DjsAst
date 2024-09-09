import { ast3, testast2, astswsub, djsfile, realworldfile, rld } from "./asts";
import swc  from "@swc/core"
import { CommandVisitor, ProcessBody } from "./classes";

const commandVisitor = new CommandVisitor();
const bodyVisitor = new ProcessBody();


async function processAST(cv: CommandVisitor, nodes: any){
    if(
        nodes
        && nodes.arguments &&  nodes.arguments[0]
        && nodes.arguments[0].expression 
        && nodes.arguments[0].expression.params &&  nodes.arguments[0].expression.params[0]
        && nodes.arguments[0].expression.params[0].value === 'subcommand'){
        traverse(cv, nodes, true)
    } else {
        traverse(cv, nodes, false)
    }
    
}

function traverse(cv: CommandVisitor, nodes: any, isSub: boolean = false){
    
    if(!nodes) return;
    for(let node of Object.values(nodes)){
          if(node?.expression?.right) {
            if(node?.expression?.right?.properties[1]?.type === 'MethodProperty'){
              traverseBody(bodyVisitor, node?.expression?.right?.properties[1]);
            }
            return processAST(commandVisitor, node?.expression?.right?.properties[0]?.value)
          }
          
          cv.enter(node, isSub)
          cv.exit(node)
        
    }
    
    if(nodes && nodes.arguments !== undefined && nodes.arguments[0] && nodes.arguments[0].expression.body){
        traverse(cv, nodes.arguments[0].expression.body)
    }

    if(nodes && nodes.object) traverse(cv, nodes.object)

    if(nodes && nodes.callee) traverse(cv, nodes.callee)


}


const swcOptions: swc.ParseOptions & {
  isModule: false;
}   = {
  syntax: "typescript",
  comments: false,
  script: true,
  target: "es5",
  isModule: false,
}

export async function main(file: string): Promise<Object | undefined >{
     const bd = (await swc.parse(file, swcOptions)).body as any;
      //console.log(bd)
      await processAST(commandVisitor, bd)

      const { imports, command } = commandVisitor.parsedASTResults();


      //console.log(bodyVisitor.variables)

      //console.log(bodyVisitor.returnFunctionData())
      //console.log(commandVisitor.parsedASTResults())

      //console.log(command.options)
      /* const { span } =  body[0]?.expression.right.properties[0].value
    let data = file.slice(span.start, span.end).trimStart().trimEnd()
    if(!data.slice(0, 2).match('new')){
        data = data.replace(data.slice(0,2), 'new')
    }

    if(data === undefined) return;
    data = data.slice(0, data.length - 1)

    const ast = await swc.parse(data, swcOptions) as any;

    await processAST(cv, ast.body[0].expression)

    return command;*/
    return undefined;
}

main(rld);


function traverseBody(v: ProcessBody, nodes: any){

  if(nodes.params){
    v.processFunction(nodes)
  }

  for(const node of Object.values(nodes)){
      v.enter(node)
      v.exit(node)
  }
  if(nodes && nodes.body) {
      return traverseBody(v, nodes.body)
  }
  if(nodes && nodes.stmts) {
      return traverseBody(v, nodes.stmts)
  }
  

}
