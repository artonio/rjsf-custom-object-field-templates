import { Type } from '@tsed/core'
import { getJsonSchemaCustom } from '../processors/custom-tsed/getJsonSchemaCustom';
import { CustomKey } from '@tsed/schema';

export const RjsfDependencies = (types: Array<Type<any>>, keyName: string) => {
	const obj: any = {}
	obj[keyName] = {
		oneOf: types.map((type) => getJsonSchemaCustom(type)),
	}

	return CustomKey('dependencies', obj)
}
