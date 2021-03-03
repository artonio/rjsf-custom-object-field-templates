import "reflect-metadata";
import { getUiSchemaGrid } from './UiSchemaGrid';
import { generateGridUiSchema, generateGroupsUiSchema } from '../processors';
import { getUiSchemaGroupProp, UiSchemaGroupPropMetadata } from './UiSchemaGroupProp';
import { Enum, Property, Required, Schema } from '@tsed/schema';
import { getJsonSchemaCustom } from '../processors/custom-tsed/getJsonSchemaCustom';
import { Type } from '@tsed/core';
const formatMetadataKey = "UiSchemaGridProp";

export interface IProps {
	row: number
	span: number
	order?: number
	clazz?: Function
	uiSchema?: any
	type?: 'string' | 'number' | 'integer' | 'boolean',
	enum?: any[]
	required?: boolean
}

export interface AnyI {
	[prop: string]: any
}


export interface IMetadata {
	key: string
	propMetadata: IProps | AnyI
}

export function UiSchemaGridProp(props: IProps) {
	return function(target: Object, propertyKey: string) {

		let metadata: IMetadata
		if (props.clazz) {
			const tsedSchemaDecorator = Schema(getJsonSchemaCustom(props.clazz as Type<any>))
			tsedSchemaDecorator(target, propertyKey)
			// We will check what kind of decorators the Function has and take appropriate action
			const classDecorators = Reflect.getMetadataKeys(props.clazz)
			if (classDecorators.includes('UiSchemaGroup')) {
				const groupProps: UiSchemaGroupPropMetadata[] = getUiSchemaGroupProp(props.clazz)
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
			if (classDecorators.includes('UiSchemaGrid')) {
				const classDecorator = getUiSchemaGrid(props.clazz)
				const gridProps: IMetadata[] = getUiSchemaGridProp(props.clazz);
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

		} else {
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
			metadata = {
				key: propertyKey,
				propMetadata: props
			}
		}

		// const metadataArr: IMetadata[] = [metadata as IMetadata]
		// @ts-ignore
		const metadataArr = [metadata]
		const annotations: IMetadata[] = Reflect.getOwnMetadata(formatMetadataKey, target.constructor);
		if (annotations) {
			// @ts-ignore
			annotations.push(metadata)
			Reflect.defineMetadata(formatMetadataKey, annotations, target.constructor)
		} else {
			Reflect.defineMetadata(formatMetadataKey, metadataArr, target.constructor)
		}
	}
}

export function getUiSchemaGridProp(target: any): IMetadata[] {
	return Reflect.getOwnMetadata(formatMetadataKey, target);
}
