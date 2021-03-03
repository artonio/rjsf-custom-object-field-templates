import { UiSchemaGrid } from '../../main/decorators/UiSchemaGrid';
import { UiSchemaGridProp } from '../../main/decorators/UiSchemaGridProp';

@UiSchemaGrid({
	'ui:spacing': 5,
	ObjectFieldTemplate: 'ObjectFieldTemplate'
})
export class Task {
	@UiSchemaGridProp({ row: 0, span: 6 })
	declare taskId: number

	@UiSchemaGridProp({ row: 1, span: 6 })
	declare taskName: string
}
