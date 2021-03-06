import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class PetsYes {

	@RjsfGridProp({
		row: 0,
		span: 24,
		enum: ['Yes'],
		ignore: true
	})
	declare pets: string

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'How old is your pet?'
	})
	declare age: number
}
