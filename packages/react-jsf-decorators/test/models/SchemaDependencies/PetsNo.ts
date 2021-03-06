import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class PetsNo {
	@RjsfGridProp({
		row: 0,
		span: 24,
		enum: ['No'],
		ignore: true
	})
	declare pets: string

	@RjsfGridProp({
		row: 1,
		span: 12,
		title: 'Would you like to buy one?'
	})
	declare buy: string
}
