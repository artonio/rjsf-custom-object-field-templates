import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';
import { PetsYes } from './PetsYes';
import { PetsNo } from './PetsNo';
import { PetsMaybe } from './PetsMaybe';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate',
})
export class Questions {

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Do you have any pets?',
		enum: ['Yes', 'No', 'Maybe']
	})
	declare pets: string

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'How old is your pet?',
		condition: {key: 'pets', value: 'Yes'}
	})
	declare age: number

	@RjsfGridProp({
		row: 1,
		span: 12,
		title: 'Would you like to buy one?',
		condition: {key: 'pets', value: 'No'}
	})
	declare buy: string
}
