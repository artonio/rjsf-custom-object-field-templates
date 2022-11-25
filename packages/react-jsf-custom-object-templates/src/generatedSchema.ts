import { RjsfGridFieldTemplate } from './lib'
import CtimsArrayFieldTemplate from "./lib/CtimsArrayFieldTemplate";
import CtimsObjectFieldTemplate from "./lib/CtimsObjectFieldTemplate";
export const schema = {
  "type": "object",
  "properties": {
    "drugList": {
      "type": "object",
      "description": 'The hospital/clinic conducting the trial (study site(s)) in Canada. Please input the full name of the hospital/clinic site. If there is more than one site, please list each hospital/site.',
      "properties": {
        "drug": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "drug_name": {
                "type": "string",
                "title": "Drug Name"
              }
            }
          },
          "title": "Drug"
        }
      },
      "title": "Drug List"
    }
  }
}
export const uiSchema = {
  // "ui:ObjectFieldTemplate": RjsfGridFieldTemplate,

  "ui:spacing": 16,
  "ui:layout": [
    {
      "drugList": {
        "span": 24
      }
    }
  ],
  "drugList": {
    "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
    "ui:spacing": 16,
    "ui:layout": [
      {
        "drug": {
          "span": 24
        },
        "ui:order": [
          "drug"
        ]
      }
    ],
    "drug": {
      // "ui:ArrayFieldTemplate": CtimsArrayFieldTemplate,
      "items": {
        "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
        "ui:spacing": 16,
        "ui:layout": [
          {
            "drug_name": {
              "span": 24
            },
            "ui:order": [
              "drug_name"
            ]
          }
        ]
      }
    }
  }
}
