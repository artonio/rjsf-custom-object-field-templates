import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class BasicBoolArray {
	@RjsfGridProp({
		title: 'Boolean Fields',
		description: 'Specify Booleans',
		type: 'boolean',
		isArray: true,
		row: 0,
		span: 24,
	})
	boolField?: Array<boolean>
}
