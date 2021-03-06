import { generateSchemas, writeSchemasToFile } from './processors';
import { GridWithTabs } from '../test/models/GridWithTabs';
import * as path from 'path'
import { getJsonSchemaCustom } from './processors/custom-tsed/getJsonSchemaCustom';
import { User } from '../test/models/ArrayTypes/User';
import { getJsonSchema } from '@tsed/schema';
import { Shipping } from '../test/models/Shipping/Shipping';
import { Manager } from '../test/models/Manager';
import { Tabs } from '../test/models/Tabs';
import { Accordion } from '../test/models/Accordion';
import { Questions } from '../test/models/SchemaDependencies/Questions';

const filePath = path.join(__dirname, '..', '..', 'react-jsf-custom-object-templates', 'src')

// writeSchemasToFile(generateSchemas(GridWithTabs), filePath)
// writeSchemasToFile(generateSchemas(User), filePath)
// writeSchemasToFile(generateSchemas(Shipping), filePath)
// writeSchemasToFile(generateSchemas(Questions), filePath)
// writeSchemasToFile(generateSchemas(Accordion), filePath)

const schemas = generateSchemas(Questions)

const a = ''
