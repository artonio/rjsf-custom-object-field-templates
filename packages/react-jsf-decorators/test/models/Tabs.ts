import { RjsfGroup } from '../../main/decorators/RjsfGroup';
import { RjsfGroupProp } from '../../main/decorators/RjsfGroupProp';
import { Accordion } from './Accordion';

@RjsfGroup({
	ObjectFieldTemplate: 'RjsfTabsFieldTemplate'
})
export class Tabs {
	@RjsfGroupProp({panelTitle: 'Tab 1', order: 0, enum: ['one', 'two']})
	declare a: string

	@RjsfGroupProp({panelTitle: 'Tab 1', order: 1})
	declare b: string

	@RjsfGroupProp({panelTitle: 'Tab 2', order: 0})
	declare c: number

	@RjsfGroupProp({panelTitle: 'Tab 2', order: 1, clazz: Accordion})
	declare accordionSample: Accordion
}
