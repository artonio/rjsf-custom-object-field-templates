import React from 'react';
import { withTheme } from '@rjsf/core'
import { Theme as AntDTheme } from '@rjsf/antd'
import './App.css';
import { JSONSchema7 } from 'json-schema';

import { schema, uiSchema } from './generatedSchema';

const Form = withTheme(AntDTheme)


function App() {
  return (
    <Form schema={schema as JSONSchema7} uiSchema={uiSchema} onSubmit={(data) => {console.log(data.formData)}}/>
  );
}

export default App;
