import { UiSchemaGridProp } from '../decorators/UiSchemaGridProp';
import { Address } from './Address';
import { UiSchemaGrid } from '../decorators/UiSchemaGrid';

@UiSchemaGrid({
	'ui:spacing': 16
})
export class Person {

	@UiSchemaGridProp({ row: 0, span: 6, order: 1 })
	declare firstname: string

	@UiSchemaGridProp({ row: 0, span: 6, order: 0 })
	declare lastname: string

	@UiSchemaGridProp({ row: 1, span: 12 })
	declare bio: string

	@UiSchemaGridProp({ row: 2, span: 6 })
	declare age: string

	@UiSchemaGridProp({ row: 2, span: 6 })
	declare password: string

	@UiSchemaGridProp(Address)
	declare address: Address

}
