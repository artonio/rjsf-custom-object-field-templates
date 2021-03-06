import "reflect-metadata";
import { getJsonSchemaCustom } from '../processors/custom-tsed/getJsonSchemaCustom';
import { CustomKey } from '@tsed/schema';
import { Type } from '@tsed/core';

const metadataKey = 'RjsfGrid'

export interface IUiSchemaGrid {
	'ui:spacing': number
	'ObjectFieldTemplate': 'RjsfGridFieldTemplate'
	conditional?: {key: string, classes: Function[]}
}

export const RjsfGrid = (props: IUiSchemaGrid) => {
	return (target: Function) => {
		if (props.conditional) {
			const obj: any = {}
			obj[props.conditional.key] = {
				oneOf: props.conditional.classes.map((type) => getJsonSchemaCustom(type as Type<any>)),
			}

			const tsedCustomKeyDecorator = CustomKey('dependencies', obj)
			tsedCustomKeyDecorator(target)
		}

		Reflect.defineMetadata(metadataKey, props, target);
	}
}

export function getUiSchemaGrid(target: any): IUiSchemaGrid {
	return Reflect.getOwnMetadata(metadataKey, target);
}
