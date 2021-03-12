import { RjsfGroup } from '../../../main/decorators/RjsfGroup';
import { RjsfGroupProp } from '../../../main/decorators/RjsfGroupProp';

@RjsfGroup({
	ObjectFieldTemplate: 'RjsfTabsFieldTemplate'
})
export class GroupFormWithHiddenWidget {
	@RjsfGroupProp({panelTitle: 'Tab 1', order: 0, uiSchema: { 'ui:widget': 'hidden' }})
	declare a: string

	@RjsfGroupProp({panelTitle: 'Tab 1', order: 1})
	declare b: string

	@RjsfGroupProp({panelTitle: 'Tab 2', order: 0})
	declare c: string
}
