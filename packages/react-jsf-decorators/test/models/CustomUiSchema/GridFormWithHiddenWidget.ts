import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class GridFormWithHiddenWidget {

	@RjsfGridProp({ row: 0, span: 24, uiSchema: { 'ui:widget': 'hidden' }})
	declare appId: string

	@RjsfGridProp({ row: 1, span: 24 })
	declare name: string

}
