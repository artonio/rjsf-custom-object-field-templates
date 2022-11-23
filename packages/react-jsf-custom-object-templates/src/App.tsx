import React from 'react';
import { withTheme } from '@rjsf/core'
// import { Theme as AntDTheme } from '@rjsf/antd'
import { Theme as PrimeTheme} from './lib/primereact'
import './App.css';
import { JSONSchema7 } from 'json-schema';
import localValidator from "@rjsf/validator-ajv8";


import { schema, uiSchema } from './generatedSchema';
import CtimsArrayFieldItemTemplate from "./lib/CtimsArrayFieldItemTemplate";
import {RegistryWidgetsType} from "@rjsf/utils";
import CtimsInput from "./lib/CtimsInput";
import CtimsArrayFieldTemplate from "./lib/CtimsArrayFieldTemplate";

const Form = withTheme(PrimeTheme)


function App() {

  const widgets: RegistryWidgetsType = {
    TextWidget: CtimsInput
  }

  return (
    <Form schema={schema as JSONSchema7}
          templates={{
            ArrayFieldItemTemplate: CtimsArrayFieldItemTemplate,
            ArrayFieldTemplate: CtimsArrayFieldTemplate
          }}
          uiSchema={uiSchema}
            widgets={widgets}
          onSubmit={(data) => {console.log(data.formData)}} validator={localValidator}/>
  );
}

export default App;
