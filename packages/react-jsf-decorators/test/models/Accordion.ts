import { RjsfGroupProp } from '../../main/decorators/RjsfGroupProp';
import { RjsfGroup } from '../../main/decorators/RjsfGroup';
import { Property } from '@tsed/schema';

@RjsfGroup({
	ObjectFieldTemplate: 'RjsfAccordionFieldTemplate'
})
export class Accordion {
	// @Property('string')
	@RjsfGroupProp({title: 'Accordion 1', order: 0})
	declare a: string

	// @Property('string')
	@RjsfGroupProp({title: 'Accordion 1', order: 1})
	declare b: string

	// @Property('string')
	@RjsfGroupProp({title: 'Accordion 2', order: 0})
	declare c: string
}
