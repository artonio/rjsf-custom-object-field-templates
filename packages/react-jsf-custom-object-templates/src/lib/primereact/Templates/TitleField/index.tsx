import React from "react";
import {FieldProps, TitleFieldProps} from "@rjsf/utils";

const TitleField = ({
                        id,
                        required,
                        registry,
                        title,
                        schema,
                        uiSchema
                    }: TitleFieldProps) => {
    console.log(title)

    return (
        <div className="border-bottom-1 mb-2">
            <h5>{(uiSchema && uiSchema["ui:title"]) || title}</h5>
        </div>
    );
}

export default TitleField;
