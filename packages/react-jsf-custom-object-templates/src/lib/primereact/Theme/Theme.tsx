import React from "react";

import { Button } from "primereact/button";

import ArrayFieldTemplate from "../ArrayFieldTemplate";
import ErrorList from "../ErrorList";
import Fields from "../Fields";
import FieldTemplate from "../FieldTemplate";
import ObjectFieldTemplate from "../ObjectFieldTemplate";
import Widgets from "../Widgets";

import {getDefaultRegistry, ThemeProps} from "@rjsf/core";
// import Templates from "../Templates";
import {Templates} from "@rjsf/antd";
// import {Templates} from "@rjsf/material-ui";


const { fields, widgets } = getDefaultRegistry();

const DefaultChildren = (
  <Button className="mt-3" type="submit" label="Submit" />
);

// const Theme: ThemeProps = {
//   // children: DefaultChildren,
//   ArrayFieldTemplate,
//   fields: { ...fields, ...Fields },
//   FieldTemplate,
//   ObjectFieldTemplate,
//   ErrorList,
//   widgets: { ...widgets, ...Widgets },
// };
//
// export default Theme;
const Theme: ThemeProps = {
  templates: Templates,
  widgets: Widgets,
};

export default Theme;
