import { Col, Row } from 'antd'
import React from 'react'
import {getTemplate, getUiOptions, ObjectFieldTemplateProps, Registry} from "@rjsf/utils";
/* eslint-disable react/no-array-index-key */

export const RjsfGridFieldTemplate = (props: ObjectFieldTemplateProps) => {
  const {
    title,
    description,
    uiSchema,
    idSchema,
    required,
    disabled,
    readonly,
    formData,
    // formContext,
    registry,
    properties,
    schema
  } = props

  const r: Registry = registry

  const uiOptions = getUiOptions(uiSchema);
  const TitleFieldTemplate = getTemplate<"TitleFieldTemplate">(
      "TitleFieldTemplate",
      registry,
      uiOptions
  );

  const DescriptionFieldTemplate = getTemplate<"DescriptionFieldTemplate">(
      "DescriptionFieldTemplate",
      registry,
      uiOptions
  );

  // const filterHidden = (element: any) =>
  //   element.content.props.uiSchema['ui:widget'] !== 'hidden'

  const findContent = (name: string) => {
    return properties.find((prop: any) => {
      return prop.name === name
    })
  }

  const layout = uiSchema?.['ui:layout']
  const gutter = uiSchema?.['ui:spacing']

  const fieldsetStyle = {
    // border: '1px solid black',
    'border-radius': '5px',
    margin: '10px'
  }

  const rowStyle = {
    margin: '15px'
  }


  return (
    <fieldset style={fieldsetStyle} id={props.idSchema.$id}>
      {(uiOptions.title || title) && (
          <TitleFieldTemplate
              id={`${idSchema.$id}-title`}
              title={title}
              required={required}
              schema={schema}
              uiSchema={uiSchema}
              registry={registry}
          />
      )}
      {(uiOptions.description || description) && (
          <DescriptionFieldTemplate
              id={`${idSchema.$id}-description`}
              description={uiOptions.description || description!}
              schema={schema}
              uiSchema={uiSchema}
              registry={registry}
          />
      )}
      {layout?.map((row: any, index: number) => {
        const rowKeys = Object.keys(row)

        if (row['ui:order'] && row['ui:order'].length > 0) {
          const orderedKeys = row['ui:order']

          return (
            <div style={rowStyle} key={index}>
              <Row gutter={gutter}>
                {orderedKeys.map((name: string) => {
                  // @ts-ignore
                  if (schema.properties[name]) {
                    const content = findContent(name)

                    return <Col span={row[name].span}>{content?.content}</Col>
                  }

                  return null
                })}
              </Row>
            </div>
          )
        }

        return (
          <div style={rowStyle} key={index}>
            <Row gutter={gutter}>
              {rowKeys.map((name) => {
                // @ts-ignore
                if (schema.properties[name]) {
                  const element = findContent(name)

                  return <Col span={row[name].span}>{element?.content}</Col>
                }

                return null
              })}
            </Row>
          </div>
        )
      })}
    </fieldset>
  )
}
