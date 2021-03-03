import { UiSchemaGridProp } from '../decorators/UiSchemaGridProp';
import { UiSchemaGrid } from '../decorators/UiSchemaGrid';

@UiSchemaGrid({
	'ui:spacing': 16
})
export class PostalPhone {
	@UiSchemaGridProp({ row: 0, span: 10 })
	declare postalCode: string
}

@UiSchemaGrid({
	'ui:spacing': 16
})
export class Address {

	@UiSchemaGridProp({ row: 0, span: 10 })
	declare streetName: string
	@UiSchemaGridProp({ row: 0, span: 14 })
	declare houseNumber: number

	@UiSchemaGridProp(PostalPhone)
	declare postalPhone: PostalPhone
}
