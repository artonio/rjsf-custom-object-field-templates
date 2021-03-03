export const schema = {
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "minLength": 1
    },
    "tabsSample": {
      "type": "object",
      "properties": {
        "a": {
          "type": "string",
          "enum": [
            "one",
            "two"
          ]
        },
        "b": {
          "type": "string"
        },
        "c": {
          "type": "number"
        },
        "accordionSample": {
          "type": "object",
          "properties": {
            "a": {
              "type": "string"
            },
            "b": {
              "type": "string"
            },
            "c": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "required": [
    "firstName"
  ]
} 
 export const uiSchema = {
  "ui:ObjectFieldTemplate": ObjectGridTemplate,
  "ui:spacing": 16,
  "ui:layout": [
    {
      "firstName": {
        "span": 12
      },
      "ui:order": [
        "tabsSample",
        "firstName"
      ],
      "tabsSample": {
        "span": 12
      }
    }
  ],
  "tabsSample": {
    "ui:ObjectFieldTemplate": ObjectTabsTemplate,
    "ui:groups": [
      {
        "title": "Tab 1",
        "fields": [
          "a",
          "b"
        ]
      },
      {
        "title": "Tab 2",
        "fields": [
          "c",
          "accordionSample"
        ]
      }
    ],
    "accordionSample": {
      "ui:ObjectFieldTemplate": ObjectAccordionTemplate,
      "ui:groups": [
        {
          "title": "Accordion 1",
          "fields": [
            "a",
            "b"
          ]
        },
        {
          "title": "Accordion 2",
          "fields": [
            "c"
          ]
        }
      ]
    }
  }
}