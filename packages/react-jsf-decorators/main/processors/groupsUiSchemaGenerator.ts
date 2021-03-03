import "reflect-metadata";

import { getUiSchemaGroupProp, UiSchemaGroupPropMetadata } from '../decorators/UiSchemaGroupProp';
import { getUiSchemaGroup, IUiSchemaGroup } from '../decorators/UiSchemaGroup';

export interface IUiGroups {
	title: string,
	fields: string[]
}

const findObjProps = (props: UiSchemaGroupPropMetadata[]) => {
	const result: UiSchemaGroupPropMetadata[] =  props.filter((p: UiSchemaGroupPropMetadata) => {
		return p.propMetadata.hasOwnProperty(p.key)
	})
	if (result.length > 0) {
		return result
	} else {
		throw new Error('not found')
	}
}

const processBasicProps = (props: UiSchemaGroupPropMetadata[], uiLayoutObj: IUiGroups[]) => {
	const uniqueTitles: string[] = props.map(p => {
		return p.propMetadata.title
	}).filter((v, i, a) => a.indexOf(v) === i && v !== undefined);

	uniqueTitles.forEach((tabTitle: string) => {
		const fields: UiSchemaGroupPropMetadata[] = props.filter((p: UiSchemaGroupPropMetadata) => {
			return p.propMetadata.title === tabTitle
		})

		const result: IUiGroups = {
			title: tabTitle,
			fields: []
		}
		fields.forEach((field: UiSchemaGroupPropMetadata) => {
			if (field.propMetadata.order || field.propMetadata.order === 0) {
				result.fields[field.propMetadata.order] = field.key
			} else {
				result.fields.push(field.key)
			}
		})
		uiLayoutObj.push(result)
	})

	const a = ''
}

const processObjectProps = (props: UiSchemaGroupPropMetadata[], uiLayoutObj: any) => {
	try {
		const findObjectProps: UiSchemaGroupPropMetadata[] = findObjProps(props)
		findObjectProps.forEach((item: UiSchemaGroupPropMetadata) => {
			if (item.propMetadata.uiSchema) {
				uiLayoutObj[item.key] = item.propMetadata.uiSchema
			} else {
				// @ts-ignore
				const itemProps: any = item.propMetadata[item.key]
				const classDecorator: IUiSchemaGroup = getUiSchemaGroup(item.propMetadata.clazz)
				uiLayoutObj[item.key] = {
					'ui:ObjectFieldTemplate': classDecorator.ObjectFieldTemplate,
					'ui:groups': []
				}
				processBasicProps(itemProps, uiLayoutObj[item.key]['ui:groups'])
				processObjectProps(itemProps, uiLayoutObj[item.key])
			}

		})
	} catch (e) {
		throw e
	}
}

export const generateGroupsUiSchema = (target: Function) => {
	const props: UiSchemaGroupPropMetadata[] = getUiSchemaGroupProp(target)
	const classDecorator: IUiSchemaGroup = getUiSchemaGroup(target)

	const uiSchema: any = {
		'ui:ObjectFieldTemplate': classDecorator.ObjectFieldTemplate,
		'ui:groups': []
	}

	processBasicProps(props, uiSchema['ui:groups'])
	try {
		processObjectProps(props, uiSchema)
	} catch (e) {}
	finally {
		return uiSchema
	}
}


// const schema = generateGroupsUiSchema(Tabs)
// const a = ''

