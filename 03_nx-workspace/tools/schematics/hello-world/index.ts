import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(schema: any): Rule {

  return (host: Tree, context: SchematicContext) => {
    host.create('hello.txt', 'Hello World: ' + JSON.stringify(schema));
    return host;
  }

}
