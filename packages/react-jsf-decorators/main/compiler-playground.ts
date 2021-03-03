import { generateSchemas, writeSchemasToFile } from './processors';
import { GridWithTabs } from '../test/models/GridWithTabs';


const result = generateSchemas(GridWithTabs)

let stringUISchema = JSON.stringify(result.uiSchema, null, 2)

const superRegex = /(?<="ui:ObjectFieldTemplate"\s*\:\s*)(".{0,23}?(?=")")/g

stringUISchema = stringUISchema.replace(superRegex, (substring: string) => {
	return substring.replace(/"/g, '')
})
stringUISchema = `export const uiSchema = ${stringUISchema}`

let stringSchema = JSON.stringify(result.schema, null, 2)
stringSchema = `export const schema = ${stringSchema}`

// require('fs').writeFile(`${__dirname}/generatedSchema.ts`, `${stringSchema} \n ${stringUISchema}`, (err: any) => {
// 	if (err) throw err;
// });

// writeSchemasToFile(result)

const b = ''


