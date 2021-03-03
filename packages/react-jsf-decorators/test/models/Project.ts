import { UiSchemaGridProp } from '../../main/decorators/UiSchemaGridProp';
import { UiSchemaGrid } from '../../main/decorators/UiSchemaGrid';
import { Task } from './Task';

@UiSchemaGrid({
	'ui:spacing': 10,
	ObjectFieldTemplate: 'ObjectFieldTemplate'
})
export class Project {
	@UiSchemaGridProp({ row: 0, span: 6, order: 0 })
	declare name: string

	@UiSchemaGridProp({ row: 0, span: 6, order: 1 })
	declare description: string

	@UiSchemaGridProp({row: 1, span: 24, clazz: Task})
	declare task: Task
}
