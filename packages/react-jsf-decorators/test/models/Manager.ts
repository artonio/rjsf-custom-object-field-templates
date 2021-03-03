import { UiSchemaGrid } from '../../main/decorators/UiSchemaGrid';
import { UiSchemaGridProp } from '../../main/decorators/UiSchemaGridProp';
import { Project } from './Project';

@UiSchemaGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'ObjectFieldTemplate'
})
export class Manager {
	@UiSchemaGridProp({ row: 0, span: 6, order: 0 })
	declare firstName: string

	@UiSchemaGridProp({ row: 0, span: 6, order: 1 })
	declare lastName: string

	@UiSchemaGridProp({row: 1, span: 24, clazz: Project})
	declare project: Project
}
