import { UiSchemaGrid } from '../../main/decorators/UiSchemaGrid';
import { UiSchemaGridProp } from '../../main/decorators/UiSchemaGridProp';
import { Tabs } from './Tabs';

@UiSchemaGrid({
	'ui:spacing': 16,
	ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class GridWithTabs {
	@UiSchemaGridProp({ row: 0, span: 12, order: 1, required: true })
	declare firstName: string

	@UiSchemaGridProp({ row: 0, span: 12, order: 0, clazz: Tabs })
	declare tabsSample: Tabs
}
