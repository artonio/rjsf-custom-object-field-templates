import React from "react";
import {FieldProps, TitleFieldProps} from "@rjsf/utils";
import {uiSchema} from "../../../../generatedSchema";

const TitleField = ({
                        id,
                        required,
                        registry,
                        title,
                    }: TitleFieldProps) => {

    return (
        <div className="border-bottom-1 mb-2">
            <h5>{(uiSchema && uiSchema["ui:title"]) || title}</h5>
        </div>
    );
}

export default TitleField;
