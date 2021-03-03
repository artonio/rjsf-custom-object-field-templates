import { UiSchemaGrid } from '../../main/decorators/UiSchemaGrid';
import { UiSchemaGridProp } from '../../main/decorators/UiSchemaGridProp';

@UiSchemaGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'ObjectFieldTemplate'
})
export class Human {
	@UiSchemaGridProp({ row: 0, span: 6, order: 1 })
	declare firstName: string

	@UiSchemaGridProp({ row: 0, span: 8, order: 0 })
	declare lastName: string
}
