import { Enum, Property, Required, Schema, Title } from '@tsed/schema';
import { getJsonSchemaCustom } from '../processors/custom-tsed/getJsonSchemaCustom';
import { Type } from '@tsed/core';
import { getRjsfGroupProp, IRjsfGroupPropMetadata } from './RjsfGroupProp';
import { generateGridUiSchema, generateGroupsUiSchema } from '../processors';
import { AnyI, getRjsfGridProp, IMetadata } from './RjsfGridProp';
import { getUiSchemaGrid } from './RjsfGrid';

export const getMetadataForClassType = (props: any, target: Object, propertyKey: string) => {
	let metadata: any
	const clazz = props.clazz

	let tsedSchemaDecorator
	if(props.type && props.type === 'array') {
		const obj: any = {
			type: 'array',
			items: {
				...getJsonSchemaCustom(clazz as Type<any>)
			}
		}
		if (props.title) {
			obj['title'] = props.title
		}
		tsedSchemaDecorator = Schema(obj)
	} else {
		tsedSchemaDecorator = Schema(getJsonSchemaCustom(clazz as Type<any>))
	}
	tsedSchemaDecorator(target, propertyKey)

	// We will check what kind of decorators the Function has and take appropriate action
	const classDecorators = Reflect.getMetadataKeys(clazz)

	if (classDecorators.includes('RjsfGroup')) {
		const groupProps: IRjsfGroupPropMetadata[] = getRjsfGroupProp(props.clazz)
		metadata = {
			key: propertyKey,
			propMetadata: {
				...props,
				uiSchema: generateGroupsUiSchema(props.clazz)
			}
		}
		const propMetadata = metadata.propMetadata as AnyI
		propMetadata[propertyKey] = groupProps
	}

	if (classDecorators.includes('RjsfGrid')) {
		const classDecorator = getUiSchemaGrid(props.clazz)
		const gridProps: IMetadata[] = getRjsfGridProp(props.clazz);
		metadata = {
			key: propertyKey,
			propMetadata: {
				...props,
				uiSchema: generateGridUiSchema(props.clazz),
				'ui:spacing': classDecorator['ui:spacing']
			}
		}
		const propMetadata = metadata.propMetadata as AnyI
		propMetadata[propertyKey] = gridProps
	}

	// if (!classDecorators.includes('RjsfGrid') || !classDecorators.includes('RjsfGroup')) {
	// 	throw new Error('The class must include RjsfGrid or RjsfGroup decorator')
	// }

	if (classDecorators.includes('RjsfGrid') && classDecorators.includes('RjsfGroup')) {
		throw new Error('Class cannot have both RjsfGrid and RjsfGroup decorators')
	}

	return metadata
}

export const getMetadataForBasicType = (props: any, target: Object, propertyKey: string) => {
	let metadata: any

	const dataType = Reflect.getMetadata("design:type", target, propertyKey);
	let type = props.type ? props.type : dataType.name.toLowerCase()
	const tsedPropDecorator = Property(type)
	tsedPropDecorator(target, propertyKey)
	if (props.enum) {
		const tsedEnumDecorator = Enum(...props.enum)
		tsedEnumDecorator(target, propertyKey)
	}
	if (props.required) {
		const tsedRequiredDecorator = Required()
		tsedRequiredDecorator(target, propertyKey)
	}
	if (props.title) {
		const tsedTitleDecorator = Title(props.title)
		tsedTitleDecorator(target, propertyKey)
	}

	if (props.type && props.type === 'array') {
		const obj: any = {
			type: 'array',
			items: {
				type: dataType.name.toLowerCase()
			}
		}
		if (props.title) {
			obj['title'] = props.title
		}
		const tsedSchemaDecorator = Schema(obj)
		tsedSchemaDecorator(target, propertyKey)
	}
	metadata = {
		key: propertyKey,
		propMetadata: props
	}

	return metadata
}
