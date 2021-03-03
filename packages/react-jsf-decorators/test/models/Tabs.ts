import { UiSchemaGroup } from '../../main/decorators/UiSchemaGroup';
import { UiSchemaGroupProp } from '../../main/decorators/UiSchemaGroupProp';
import { Accordion } from './Accordion';

@UiSchemaGroup({
	ObjectFieldTemplate: 'RjsfTabsFieldTemplate'
})
export class Tabs {
	@UiSchemaGroupProp({title: 'Tab 1', order: 0, enum: ['one', 'two']})
	declare a: string

	@UiSchemaGroupProp({title: 'Tab 1', order: 1})
	declare b: string

	@UiSchemaGroupProp({title: 'Tab 2', order: 0})
	declare c: number

	@UiSchemaGroupProp({title: 'Tab 2', order: 1, clazz: Accordion})
	declare accordionSample: Accordion
}
