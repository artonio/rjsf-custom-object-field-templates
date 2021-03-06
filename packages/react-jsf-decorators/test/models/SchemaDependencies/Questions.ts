import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';
import { PetsYes } from './PetsYes';
import { PetsNo } from './PetsNo';
import { PetsMaybe } from './PetsMaybe';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate',
	conditional: {
		key: 'pets',
		classes: [
			PetsYes,
			PetsNo,
			PetsMaybe
		]}
})
export class Questions {

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Do you have any pets?',
		enum: ['Yes', 'No', 'Maybe']
	})
	declare pets: string
}
