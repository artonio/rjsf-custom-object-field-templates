import {getTemplate, getUiOptions, ObjectFieldTemplateProps, Registry} from "@rjsf/utils";
import React from "react";

const ObjectFieldTemplate = ({
  description,
  title,
  properties,
  required,
  registry,
  uiSchema,
  idSchema,
  schema,
}: ObjectFieldTemplateProps) => {

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

  return (
    <>
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
      <div className="flex flex-column gap-2">
        {properties.map((element: any, index: number) => (
          <div
            key={index}
            className={element.hidden ? "d-none" : undefined}
          >
            {element.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default ObjectFieldTemplate;
