type Variables = {
    kind: string,
    name: string,
    value: string | number | boolean | Object
    isGlobal: boolean,
    types: Array<any>
  }


type FunctionData = {
    async: boolean,
    generator: boolean,
    returnType: null | any,
    parameters: Array<{name: string, type: boolean | string | number, optional: boolean}>
    body: string | any
}

  const commandNames = ["hi"]

export class ProcessBody {
    public variables: Variables[] = [];
    private functionData: FunctionData  = {
        async: false,
        generator: false,
        returnType: null,
        parameters: [],
        body: ""
    }
    public enter(node: any){
       // console.log("NODEEEE", node)
        if(node?.params){
            this.processParams(node.params);
        }

        if(node?.type === "IfStatement"){
            this.ifStatementChecker(node)
        }
  
        if(node?.type === "VariableDeclaration"){
            //console.log(node)
            this.variableRetriever(node)
        }
        
    }
  
    public exit(node: any){
    }

    public processFunction(node: any){
        if(node.params){
            this.processParams(node.params);
        }
        this.functionData = {
            ...this.functionData,
            async: node.async,
            generator: node.generator,
            returnType: node.returnType,
            body: node.body
        }
    }

    public returnFunctionData(){
        return this.functionData
    }
  

    private processParams(node: any){
        for(const param of Object.values(node)){
            const pat = param.pat;
            const name = pat.value;
            const optional = pat.optional
            const type = pat.typeAnnotation.typeAnnotation.kind

            this.functionData.parameters.push({name, optional, type})
        }
    }

    private processTsArrayType(type: any){
        const temp: any = ["Array"]


        const extractTypes = (t: any) => {
            const hasMoreThanOneType  = t.typeParams.params[0].types;

            if(hasMoreThanOneType){
                hasMoreThanOneType.forEach((t:any) => {
                    if(t.kind) temp.push(t.kind)
                    if(t?.typeName?.value === 'Array'){
                        temp.push('Array')
                        extractTypes(t);
                    } else {
                        return;
                    }
                })
            }
            
        }
        extractTypes(type);

        // can have
            // - type.typeParams.params 
            //   - type.typeParams.params.types


        
        console.log(temp)

        /*let node = type;
        const temp: any = ["Array"]
        // Can have multiple types in the array itself
        // and types outside 
       // Array<number | string | whatever>
        const extractTypes = (type: any) => {
                if(type.kind) temp.push(type.kind)

                if(type?.typeName?.value === 'Array') {
                    temp.push('Array')
                    if(type?.typeParams?.params?.types){
                        type.typeParams.params.types.forEach((t) => {
                            temp.push(t.kind)
                        })
                    }
                    node = type; 
                } else {
                    node = '';
                }
        }

        while(node?.typeName?.value === 'Array'){
            if(node?.typeParams){
                node?.typeParams?.params?.forEach((type: unknown) => {
                    if(type.types){
                        console.log("types of types", type.types)
                        type.types.forEach((type: unknown) => {
                            extractTypes(type)
                        });
                    }
                    extractTypes(type)
                });
            }
        }
        return temp*/
    }
  

    private proccessTsTypes(types: any){
        const typesArray = [];

        for(const type of Object.values(types)){
            if(type?.typeName?.value === 'Array'){
                typesArray.push(this.processTsArrayType(type))
            } else {
                typesArray.push(type.kind)
            }
        }

        return typesArray
    }


    private variableRetriever(node: any){
        if(node?.expression?.type === 'AssignmentExpression'){
            const varAssignmentExrp = node.expression.left.value
            for(let i = 0; i < this.variables.length; ++i){
                if(this.variables[i].name === varAssignmentExrp){
                    this.variables[i].isGlobal = true;
                }
            }
            
        }
        
        if (node?.declarations){
            const hasType = node?.declarations[0]?.id?.typeAnnotation?.typeAnnotation?.types;
            let types: unknown[] = []
            if(hasType){
                types = this.proccessTsTypes(hasType)
            }

            const name = node.declarations[0].id.value;
            const kind = node.kind;
            let value = node.declarations[0].init.value


            if(node.declarations[0].init.type === 'ObjectExpression'){
                const propertiesOfObject = node.declarations[0].init.properties;
                let temp = {};
                for(const property of Object.values(propertiesOfObject)){
                    const key = property.key.value
                    const value = property.value.value
                    temp[key] = value
                }  
                
                value = temp;
            }

            this.variables.push({ kind: kind, name: name, value, isGlobal: false, types });

        }
          
        
    }
  
    private ifStatementChecker(node: any){
        if(commandNames.includes(node.test.right.value)){
            for(let i = 0; i < node.consequent.stmts.length; ++i){
                this.variableRetriever(node.consequent.stmts[i])
            }
        }
    }
  
  }



  //////////////////////////


  interface Command {
    name: string,
    description: string,
    defaultMemberPermissions: any[]
    dmPermission: boolean
    choices: Array<Object>
    options: Array<Option>
    subcommand?: Array<Command>
  }


  function processIdentifier(Identifier: string, command: any, value: any) {

    switch(Identifier){
            case 'defaultMemberPermissions': return command.defaultMemberPermissions = value
            case 'dmPermission': return command.dmPermission = value.expression.value
            case 'locname': return command.locName = value;
            case 'locdesc': return command.locDesc = value
            case 'maxlen': return command.maxLength = value;
            case 'minlen': return command.minLength = value;
            case 'maxval': return command.maxValue = value;
            case 'minval': return command.minValue = value;
            case 'chantype': return command.channelType = value;
            case 'desc': return command.description = value;
            case 'name': return command.name = value;
            case 'required': return command.required = value;
            default:
         
            break;
        }
  }

  interface Option {
    name: string,
    type: string | undefined,
    description: string
    required: boolean
    choices: Array<Object>
    locDesc: Object,
    locName: Object
  	maxLength: undefined | number
	  channelType: undefined | string
    minLength: undefined | number,
    maxValue: undefined | number,
    minValue: undefined | number
    defaultMemberPermissions: any[]
  }


  type CommandType = Command | Option

export class CommandVisitor {
    private command: Command = {
      name: "",
      description: "",
      choices: [],
      options: [],
      defaultMemberPermissions: [],
      dmPermission: true,
      subcommand: []
    }
  
    private _currentIdentifier: string = "";
    private _currentOption: undefined | Option  = undefined;
    private _currentSubcommand:  Command | undefined = undefined;
    private _ArrayOptions: Array<string> = ['addChannelOption', 'addBooleanOption', 'addAttachmentOption', 'addMentionableOption', 'addIntegerOption', 'addNumberOption', 'addRoleOption', 'addStringOption', 'addUserOption']
    private _importsArray: Array<{ imports: Array<String>, packageName: string}>  = [];

    
    public enter(v: any, isSub: boolean){
        if(v){
            const args = v
            if(isSub && this._currentSubcommand === undefined){
                this._currentSubcommand = {
                    name: "",
                    description: "",
                    choices: [],
                    options: [],
                    defaultMemberPermissions: [],
                    dmPermission: true
               };
            }

            if(args && args.declarations && args.declarations[0] && args.declarations[0].init && args.declarations[0].init.callee && args.declarations[0].init.callee.value  === 'require'){
                this.processImport(args.declarations[0]);
            } else {
                this.processArguments(args)
            }

            if(v.property){
                this.extractIdentifier(v.property)
            }

        }
        
    }

    public exit(node: any){
        if(node){

            if(this._ArrayOptions.includes(node.value)){
                if(this._currentOption && this._currentSubcommand !== undefined){
                    this._currentSubcommand?.options.push(this._currentOption);
                }
                if(this._currentOption && this._currentSubcommand === undefined){
                    this.command.options.push(this._currentOption)
                }
                this._currentOption = undefined
            }

                if(node.value === 'addSubcommand' && this._currentSubcommand){
                   this.command?.subcommand?.push(this._currentSubcommand)
                    this._currentSubcommand = undefined;
                }
            
        }
    }


    
  private processImport(node: any) { 
    const properties = node.id.properties
    const packageName = node.init.arguments[0].expression.value

    const importstmt: { imports: Array<String>, packageName: string} = {
      imports: [],
      packageName
    }

    if(Array.isArray(properties)){
      properties.forEach((property) => {
        importstmt.imports.push(property.key.value);
      })
    } else {
      importstmt.imports.push(node.id.value)
    }


    this._importsArray.push(importstmt)
  }

  private generateOptionObject(v: any){
      this._currentOption = {
          name: "", 
          type: this.processOptionType(v), 
          description: "", 
          choices: [], 
          required: false, 
          channelType: undefined, 
          locDesc: {},
          locName: {}, 
          maxLength: undefined,
          minLength: undefined,
          maxValue: undefined,
          minValue: undefined,
          defaultMemberPermissions: [],
      } 
    }

  private processLocalization(args: any) {
    if(this._currentIdentifier === 'locdesc'  || this._currentIdentifier === 'locname' ){
      if(args?.expression?.properties){
        let o = {}
          args.expression.properties.forEach((loc: any) => {
            const key = loc.key.value;
            const value = loc.value.value;
            o = {
              ...o,
              [key]: value
            }
          })
    
          return o;
        }
      }
    }

    private processChoices(args: any, command: any){
      let props = { name: '', value: '' }
        args.forEach((choice: any) => {
            for(const obj of Object.values(choice.expression.properties)){
                const x = obj as any
                const keyProp = x.key 
                const keyValue = x.value
                if (keyProp.value === 'name') {
                    props.name = keyValue.value
                }
                if (keyProp.value === 'value') {
                    props.value = keyValue.value
                }
                if (props.name && props.value) {
                    command.choices = [...command.choices, props]
                    props = { name: '', value: '' }
                }
            }
        })
    }
    private processDefaultPermissions(args: any, command: CommandType){

      if(args && args.left.type === 'BinaryExpression') this.processDefaultPermissions(args.left, command)
      if(args?.left?.value) command.defaultMemberPermissions.push(args?.left?.value)
      if(args?.right?.value) command.defaultMemberPermissions.push(args?.right?.value)
      
    }


    private processOptionType(option: string) {
        switch (option) {
            case 'addStringOption': {
                return 'string'
            }
            case 'addUserOption': {
                return 'user'
            }
            case 'addBooleanOption': {
                return 'boolean'
            }
            case 'addIntegerOption': {
                return 'integer'
            }
            case 'addNumberOption': {
                return 'number'
            }
            case 'addChannelOption': {
                return 'channel'
            }
            case 'addRoleOption': {
                return 'role'
            }
            case 'addMentionableOption': {
                return 'mentionable'
            }
            case 'addAttachmentOption': {
                return 'attachment'
            }
    
            default:
                break
        }
    }


    private whichObject(){
      if(this._currentOption) return this._currentOption;
      return this._currentSubcommand !== undefined ? this._currentSubcommand : this.command
    }



    // Do DM and permissions Tomorrow !

    // then onto the body ! (annoying part, gotta think of rules)
    private processArguments(args: any){
        if(!args) return;
        let value = args[0]?.expression?.value;
    
        if(this._currentIdentifier === 'locdesc' || this._currentIdentifier === 'locname') value = this.processLocalization(args[0])
        
        // since we are treating the command in the method no need to process it
        if(this._currentIdentifier === 'choices' && Array.isArray(args)) return this.processChoices(args, this.whichObject())

        if(this._currentIdentifier === 'dmPermission' && Array.isArray(args)) value = args[0]
        if(this._currentIdentifier === 'defaultMemberPermissions' && Array.isArray(args)) return this.processDefaultPermissions(args[0].expression, this.whichObject())

        if(value) processIdentifier(this._currentIdentifier, this.whichObject(), value)
        
     }


     public parsedASTResults(){
      return {imports: this._importsArray, command: this.command};
     }


    private extractIdentifier(type: any){
        const IdentifierValue = type.value;

        if(IdentifierValue === 'setDescription') this._currentIdentifier = 'desc'   
        if(IdentifierValue === 'setRequired') this._currentIdentifier = 'required' 
        if(IdentifierValue === 'setName') this._currentIdentifier = "name"
        if(IdentifierValue === 'setMaxLength') this._currentIdentifier = 'maxlen'
        if(IdentifierValue === 'setMinLength') this._currentIdentifier = 'minlen'
        if(IdentifierValue === 'setMaxValue') this._currentIdentifier = 'maxval';
        if(IdentifierValue === 'setMinValue') this._currentIdentifier = 'minval'
        if(IdentifierValue === 'addChannelTypes') this._currentIdentifier = 'chantype'
        if(IdentifierValue === 'addChoices') this._currentIdentifier = 'choices'
        if(IdentifierValue === 'setNameLocalizations') this._currentIdentifier = 'locname';
        if(IdentifierValue === 'setDescriptionLocalizations') this._currentIdentifier = 'locdesc'
        if(IdentifierValue === 'setDefaultMemberPermissions') this._currentIdentifier = 'defaultMemberPermissions'
        if(IdentifierValue === 'setDMPermission') this._currentIdentifier = 'dmPermission'


        if(this._ArrayOptions.includes(IdentifierValue)) this.generateOptionObject(IdentifierValue);
    }

  }
