import "reflect-metadata";
import { AnyI } from './UiSchemaGridProp';
import { generateGroupsUiSchema } from '../processors';
import { Enum, Property, Required, Schema } from '@tsed/schema';
import { getJsonSchemaCustom } from '../processors/custom-tsed/getJsonSchemaCustom';
import { Type } from '@tsed/core';


const formatMetadataKey = "UiSchemaGroupProp";


export interface IUiSchemaGroupProp {
	title: string
	order?: number
	clazz?: Function
	uiSchema?: any
	type?: 'string' | 'number' | 'integer' | 'boolean'
	enum?: any[]
	required?: boolean
}

export interface UiSchemaGroupPropMetadata {
	key: string,
	propMetadata: IUiSchemaGroupProp | AnyI
}

export const UiSchemaGroupProp = (props: IUiSchemaGroupProp) => {
	return (target: Object, propertyKey: string) => {

		let metadata: UiSchemaGroupPropMetadata
		if (props.clazz) {
			const tsedSchemaDecorator = Schema(getJsonSchemaCustom(props.clazz as Type<any>))
			tsedSchemaDecorator(target, propertyKey)
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

		const metadataArr: UiSchemaGroupPropMetadata[] = [metadata as UiSchemaGroupPropMetadata]
		const annotations: UiSchemaGroupPropMetadata[] = Reflect.getOwnMetadata(formatMetadataKey, target.constructor);
		if (annotations) {
			annotations.push(metadata)
			Reflect.defineMetadata(formatMetadataKey, annotations, target.constructor)
		} else {
			Reflect.defineMetadata(formatMetadataKey, metadataArr, target.constructor)
		}
	}
}

export const getUiSchemaGroupProp = (target: Function): UiSchemaGroupPropMetadata[] => {
	return Reflect.getOwnMetadata(formatMetadataKey, target);
}
