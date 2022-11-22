import { RjsfGridFieldTemplate } from './lib'
import {CtimsArrayFieldTemplate} from "./lib/CtimsArrayFieldTemplate";
export const schema = {
  "type": "object",
  "properties": {
    "drugList": {
      "type": "object",
      "description": 'This is description',
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
    // "ui:ObjectFieldTemplate": RjsfGridFieldTemplate,
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
        // "ui:ObjectFieldTemplate": RjsfGridFieldTemplate,
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
