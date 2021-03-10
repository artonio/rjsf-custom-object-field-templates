import { RjsfGrid } from '../../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class InvalidRows {

	@RjsfGridProp({ row: 0, span: 12, title: 'Name' })
	declare name: string

	@RjsfGridProp({ row: 0, span: 12, title: 'Role Type' })
	declare roleType: string

	@RjsfGridProp({ row: 5, span: 12, title: 'Another' })
	declare another: string
}
