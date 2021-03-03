import { UiSchemaGroupProp } from '../../main/decorators/UiSchemaGroupProp';
import { UiSchemaGroup } from '../../main/decorators/UiSchemaGroup';
import { Property } from '@tsed/schema';

@UiSchemaGroup({
	ObjectFieldTemplate: 'RjsfAccordionFieldTemplate'
})
export class Accordion {
	// @Property('string')
	@UiSchemaGroupProp({title: 'Accordion 1', order: 0})
	declare a: string

	// @Property('string')
	@UiSchemaGroupProp({title: 'Accordion 1', order: 1})
	declare b: string

	// @Property('string')
	@UiSchemaGroupProp({title: 'Accordion 2', order: 0})
	declare c: string
}
