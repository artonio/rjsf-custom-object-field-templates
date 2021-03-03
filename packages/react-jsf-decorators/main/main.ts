import { generateSchemas, writeSchemasToFile } from './processors';
import { GridWithTabs } from '../test/models/GridWithTabs';
import * as path from 'path'

const filePath = path.join(__dirname, '..', '..', 'react-jsf-custom-object-templates', 'src')

writeSchemasToFile(generateSchemas(GridWithTabs), filePath)
