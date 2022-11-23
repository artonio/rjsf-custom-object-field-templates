import React from 'react';
import { withTheme } from '@rjsf/core'
// import { Theme as AntDTheme } from '@rjsf/antd'
import { Theme as PrimeTheme} from './lib/primereact'
import './App.css';
import { JSONSchema7 } from 'json-schema';
import localValidator from "@rjsf/validator-ajv8";


import { schema, uiSchema } from './generatedSchema';
import CtimsArrayFieldItemTemplate from "./lib/CtimsArrayFieldItemTemplate";

const Form = withTheme(PrimeTheme)


function App() {
  return (
    <Form schema={schema as JSONSchema7}
          templates={{ArrayFieldItemTemplate: CtimsArrayFieldItemTemplate}}
          uiSchema={uiSchema}
          onSubmit={(data) => {console.log(data.formData)}} validator={localValidator}/>
  );
}

export default App;
