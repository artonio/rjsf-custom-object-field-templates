import "reflect-metadata";
import { generateGridUiSchema } from './gridUiSchemaGenerator';
import { generateGroupsUiSchema } from './groupsUiSchemaGenerator';
import { getJsonSchemaCustom } from './custom-tsed/getJsonSchemaCustom';
import { Type } from '@tsed/core';

export const uiSchemaGenerator = (target: Function) => {
	const classDecorators = Reflect.getMetadataKeys(target)
	if (classDecorators.includes('RjsfGrid')) {
		return generateGridUiSchema(target)
	}

	if (classDecorators.includes('RjsfGroup')) {
		return generateGroupsUiSchema(target)
	}

	throw new Error('target must include one of the following decorators: UiSchemaGrid or UiSchemaGroup')

}

export const generateSchemas = (target: Function): {schema: any, uiSchema: any} => {
	const uiSchema = uiSchemaGenerator(target)
	const schema = getJsonSchemaCustom(target as Type<any>)

	return {
		schema,
		uiSchema
	}
}

const buildImportString = (matches: string[]) => {
	const matchesWithoutQuotes = matches.map((match: string) => {
		return match.replace(/"/g, '')
	})
	return `import { ${[...matchesWithoutQuotes]} } from './lib'`
}

export const writeSchemasToFile = (obj: {schema: any, uiSchema: any}, path: string) => {
	const superRegex = /(?<="ui:ObjectFieldTemplate"\s*\:\s*)(".{0,}?(?=")")/g

	let stringUISchema = JSON.stringify(obj.uiSchema, null, 2)

	const matches = stringUISchema.match(superRegex)
	const importString = matches ? buildImportString(matches) : ''

	stringUISchema = stringUISchema.replace(superRegex, (substring: string) => {
		return substring.replace(/"/g, '')
	})

	stringUISchema = `export const uiSchema = ${stringUISchema}`

	let stringSchema = JSON.stringify(obj.schema, null, 2)
	stringSchema = `export const schema = ${stringSchema}`

	const finalString = `${importString}\n${stringSchema}\n${stringUISchema}`

	require('fs').writeFile(`${path}/generatedSchema.ts`, finalString, (err: any) => {
		if (err) throw err;
	});
}
