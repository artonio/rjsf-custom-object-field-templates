import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class BasicEnumModel {
	@RjsfGridProp({
		row: 0,
		span: 24,
		title: 'Province',
		enum: ['Ontario', 'Alberta', 'Quebec']
	})
	declare province: string
}
