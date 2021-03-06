import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';
import { RjsfGrid } from '../../../main/decorators/RjsfGrid';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
class Maybe {
	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Do you want to get rid of any?'
	})
	declare rid: string

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Maybe? How can you not know?'
	})
	declare pills: string

}

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class PetsMaybe {
	@RjsfGridProp({
		row: 0,
		span: 24,
		enum: ['Maybe'],
		ignore: true
	})
	declare pets: string

	@RjsfGridProp({
		row: 0,
		span: 12,
		clazz: Maybe,
		title: 'Maybe'
	})
	declare maybe: Maybe
}
