import { generateSchemas, writeSchemasToFile } from './processors';
import { GridWithTabs } from '../test/models/GridWithTabs';
import * as path from 'path'
import { getJsonSchemaCustom } from './processors/custom-tsed/getJsonSchemaCustom';
import { User } from '../test/models/ArrayTypes/User';
import { getJsonSchema } from '@tsed/schema';

const filePath = path.join(__dirname, '..', '..', 'react-jsf-custom-object-templates', 'src')

// writeSchemasToFile(generateSchemas(GridWithTabs), filePath)
writeSchemasToFile(generateSchemas(User), filePath)

// const schemas = generateSchemas(User)
// const schema = getJsonSchema(User)
