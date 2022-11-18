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
import { Elements } from '../test/models/SchemaDependencies/ObjectTestModels/Elements';
import { InvalidRows } from '../test/models/Invalid/InvalidRows';
import { BasicStringArray } from '../test/models/ArrayTypes/BasicStringArray';
import { BasicBoolArray } from '../test/models/ArrayTypes/BasicBoolArray';
import { BasicNumberArray } from '../test/models/ArrayTypes/BasicNumberArray';
import { BasicNumberArrayDefaultValues } from '../test/models/ArrayTypes/BasicNumberArrayDefaultValues';
import { GridFormWithHiddenWidget } from '../test/models/CustomUiSchema/GridFormWithHiddenWidget';
import { GroupFormWithHiddenWidget } from '../test/models/CustomUiSchema/GroupFormWithHiddenWidget';
import { BasicEnumWithNamesModel } from '../test/models/Enums/BasicEnumWithNamesModel';
import { BasicEnumDisabledFields } from '../test/models/Enums/BasicEnumDisabledFields';
import { BasicEnumModel } from '../test/models/Enums/BasicEnumModel';
import { MultipleChoiceEnumModel } from '../test/models/Enums/MultipleChoiceEnumModel';
import {CTIMS} from "../test/models/ctims/CTIMS";

const filePath = path.join(__dirname, '..', '..', 'react-jsf-custom-object-templates', 'src')

// writeSchemasToFile(generateSchemas(GridWithTabs), filePath)
// writeSchemasToFile(generateSchemas(User), filePath)
// writeSchemasToFile(generateSchemas(Shipping), filePath)
// writeSchemasToFile(generateSchemas(Questions), filePath)
writeSchemasToFile(generateSchemas(CTIMS), filePath)
// writeSchemasToFile(generateSchemas(Accordion), filePath)
// writeSchemasToFile(generateSchemas(Elements), filePath)
// writeSchemasToFile(generateSchemas(InvalidRows), filePath)
// writeSchemasToFile(generateSchemas(MultipleChoiceEnumModel), filePath)
// writeSchemasToFile(generateSchemas(BasicNumberArrayDefaultValues), filePath)

// const schemas = generateSchemas(InvalidRows)
// const schemas = generateSchemas(Elements)
// const schemas = generateSchemas(GroupFormWithHiddenWidget)

const a = ''

