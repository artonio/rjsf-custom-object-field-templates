import { RjsfGrid } from '../../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate',
})
export class ButtonProps {
	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Block',
		description: 'Option to fit button width to its parent width'
	})
	declare block?: boolean

	@RjsfGridProp({
		row: 0,
		span: 12,
		title: 'Block',
		description: 'Redirect url of link button'
	})
	declare href?: string
}
