import React from "react";
import { FieldProps } from "@rjsf/utils";

const DescriptionField = ({ description, id }: Partial<FieldProps>) => {
    if (!description) {
        return null;
    }

    return <div id={id} className="text-sm mt-1 mb-3">{description}</div>;
};

export default DescriptionField;
