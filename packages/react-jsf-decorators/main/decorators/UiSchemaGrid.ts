import "reflect-metadata";

const metadataKey = 'UiSchemaGrid'

export interface IUiSchemaGrid {
	'ui:spacing': number
	'ObjectFieldTemplate': 'RjsfGridFieldTemplate'
}

export const UiSchemaGrid = (props: IUiSchemaGrid) => {
	return (target: Function) => {
		Reflect.defineMetadata(metadataKey, props, target);
	}
}

export function getUiSchemaGrid(target: any): IUiSchemaGrid {
	return Reflect.getOwnMetadata(metadataKey, target);
}
