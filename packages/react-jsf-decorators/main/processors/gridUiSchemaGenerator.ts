import { getUiSchemaGrid, IUiSchemaGrid } from '../decorators/RjsfGrid';
import { getRjsfGridProp, IMetadata } from '../decorators/RjsfGridProp';
import { getUiSchemaGroup } from '../decorators/RjsfGroup';



const processBasicProps = (props: IMetadata[], uiLayoutObj: any) => {
	const uniqueRows: number[] = props.map(p => {
		return p.propMetadata.row
	}).filter((v, i, a) => a.indexOf(v) === i && v !== undefined);

	uniqueRows.forEach((rowNum: number) => {
		const rows: IMetadata[] = props.filter((p: IMetadata) => {
			return p.propMetadata.row === rowNum
		})

		const result: any = {}
		rows.forEach((row: IMetadata) => {
			result[row.key] = {
				span: row.propMetadata.span
			}
			if (row.propMetadata.order || row.propMetadata.order === 0) {
				if (!result['ui:order']) {
					result['ui:order'] = []
				}
				result['ui:order'][row.propMetadata.order] = row.key
			}
		})

		uiLayoutObj[rowNum] = result
	})
}

const findObjProps = (props: IMetadata[]) => {
	const result: IMetadata[] =  props.filter((p: IMetadata) => {
		return p.propMetadata.hasOwnProperty(p.key)
	})
	if (result.length > 0) {
		return result
	} else {
		throw new Error('not found')
	}
}

const processObjectProps = (props: IMetadata[], uiLayoutObj: any) => {
	try {
		const findObjectProps: IMetadata[] = findObjProps(props)
		findObjectProps.forEach((item: IMetadata) => {
			if (item.propMetadata.uiSchema) {
				if (item.propMetadata.type === 'array') {
					uiLayoutObj[item.key] = {}
					uiLayoutObj[item.key].items = item.propMetadata.uiSchema
				} else {
					uiLayoutObj[item.key] = item.propMetadata.uiSchema
				}
			} else {
				// @ts-ignore
				const props: any = item.propMetadata[item.key]
				const classDecorator = getUiSchemaGroup(item.propMetadata.clazz)

				if (item.propMetadata.type === 'array') {
					uiLayoutObj[item.key] = {
						items: {
							'ui:ObjectFieldTemplate': classDecorator.ObjectFieldTemplate,
							'ui:layout': []
						}
					}
					processBasicProps(props, uiLayoutObj[item.key].items['ui:layout'])
					processObjectProps(props, uiLayoutObj[item.key].items)
				} else {
					uiLayoutObj[item.key] = {
						'ui:ObjectFieldTemplate': classDecorator.ObjectFieldTemplate,
						'ui:layout': []
					}
					processBasicProps(props, uiLayoutObj[item.key]['ui:layout'])
					processObjectProps(props, uiLayoutObj[item.key])
				}
				// @ts-ignore
				uiLayoutObj[item.key]['ui:spacing'] = item.propMetadata['ui:spacing']

			}
		})
	} catch (e) {
		throw e
	}

}

const processPropsConditional = (classes: Function[], uiLayoutObj: any) => {
	classes.forEach((clazz: any) => {
		const props: IMetadata[] = getRjsfGridProp(clazz)
		try {
			processObjectProps(props, uiLayoutObj)
		} catch (e) {}
		finally {
			if (props.length === 1) {
				const prop = props[0]
				const obj: any = {}
				obj[prop.key] = {
					span: prop.propMetadata.span
				}
				const layout = uiLayoutObj['ui:layout']
				let layoutRow = layout[prop.propMetadata.row]
				if (layoutRow) {
					layoutRow = {...layoutRow, ...obj}
					layout[prop.propMetadata.row] = layoutRow
				} else {
					layout.push(obj)
				}
			}
		}
	})
}

export const generateGridUiSchema = (target: any) => {
	const props: IMetadata[] = getRjsfGridProp(target)
	const classDecorator: IUiSchemaGrid = getUiSchemaGrid(target)

	const uiSchema: any = {
		'ui:ObjectFieldTemplate': classDecorator.ObjectFieldTemplate,
		'ui:spacing': classDecorator['ui:spacing'],
		'ui:layout': []
	}

	processBasicProps(props, uiSchema['ui:layout'])
	if (classDecorator.conditional) {
		processPropsConditional(classDecorator.conditional.classes, uiSchema)
	}
	try {
		processObjectProps(props, uiSchema)
	} catch (e) {
		// console.log(e.message)
	} finally {
		return uiSchema
	}

}
