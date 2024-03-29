import "reflect-metadata";
import { Human } from './models/Human';
import { Manager } from './models/Manager';
import { GridWithTabs } from './models/GridWithTabs';
import { Tabs } from './models/Tabs';
import { generateSchemas, generatorUiSchema } from '../main/processors';
import { CardProps } from './models/ArrayTypes/CardProps';


describe('Main', () => {

	it('should serialize basic array', () => {
		const schemas = generateSchemas(CardProps)
		const a = ''
	})

	it('should serialize tabs with accordion', () => {
		const schema = generatorUiSchema(Tabs)
		expect(schema).toMatchObject({
			'ui:ObjectFieldTemplate': 'RjsfTabsFieldTemplate',
			'ui:groups': [
				{ panelTitle: 'Tab 1', fields: ['a', 'b']},
				{ panelTitle: 'Tab 2', fields: ['c', 'accordionSample']}
			],
			accordionSample: {
				'ui:ObjectFieldTemplate': 'RjsfAccordionFieldTemplate',
				'ui:groups': [
					{ panelTitle: 'Accordion 1', fields: ['a', 'b']},
					{ panelTitle: 'Accordion 2', fields: ['c']}
				]
			}
		})
	})

	it('should serialize grid with tabs', () => {
		const schema = generatorUiSchema(GridWithTabs)
		expect(schema).toMatchObject({
			'ui:ObjectFieldTemplate': 'RjsfGridFieldTemplate',
			'ui:spacing': 16,
			'ui:layout': [
				{
					'ui:order': ['tabsSample', 'firstName'],
					firstName: { span: 12 },
					tabsSample: { span: 12}
				}
			],
			tabsSample: {
				'ui:ObjectFieldTemplate': 'RjsfTabsFieldTemplate',
				'ui:groups': [
					{ panelTitle: 'Tab 1', fields: ['a', 'b']},
					{ panelTitle: 'Tab 2', fields: ['c', 'accordionSample']}
				],
				accordionSample: {
					'ui:ObjectFieldTemplate': 'RjsfAccordionFieldTemplate',
					'ui:groups': [
						{ panelTitle: 'Accordion 1', fields: ['a', 'b']},
						{ panelTitle: 'Accordion 2', fields: ['c']}
					]
				}
			}
		})
	})

	it('should serialize basic object', () => {
		const schema = generatorUiSchema(Human)
		expect(schema).toMatchObject({
			'ui:spacing': 16,
			'ui:layout': [
				{
					'ui:order': ['lastName', 'firstName'],
					firstName: { span: 6 },
					lastName: { span: 8 }
				}
			]
		})
	})

	it.skip('should serialize with nested props', () => {
		const schema = generatorUiSchema(Manager)
		expect(schema).toMatchObject({
			'ui:spacing': 16,
			'ui:layout': [
				{
					'ui:order': ['firstName', 'lastName'],
					firstName: { span: 6 },
					lastName: { span: 6 }
				},
				{
					project: { span: 24 }
				}
			],
			project: {
				'ui:spacing': 10,
				'ui:layout': [
					{
						'ui:order': ['name', 'description'],
						name: { span: 6 },
						description: { span: 6 }
					},
					{
						task: { span: 24 }
					}
				],
				task : {
					'ui:spacing': 5,
					'ui:layout': [
						{
							taskId: { span: 6 }
						},
						{
							taskName: { span: 6}
						}
					]
				}
			}
		})
	})
})
