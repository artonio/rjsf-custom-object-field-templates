import { RjsfGrid } from '../../main/decorators/RjsfGrid';
import { RjsfGridProp } from '../../main/decorators/RjsfGridProp';

@RjsfGrid({
	'ui:spacing': 5,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class Task {
	@RjsfGridProp({ row: 0, span: 6 })
	declare taskId: number

	@RjsfGridProp({ row: 1, span: 6 })
	declare taskName: string
}
