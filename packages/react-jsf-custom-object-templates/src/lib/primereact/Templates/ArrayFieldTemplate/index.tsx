import {
    ArrayFieldDescriptionProps, ArrayFieldTemplateItemType,
    ArrayFieldTemplateProps,
    ArrayFieldTitleProps,
    getTemplate,
    getUiOptions
} from "@rjsf/utils";
import IconButton from "../../IconButton";
import React from "react";

const ArrayFieldTemplate = ({
    canAdd,
    className,
    disabled,
    formContext,
    idSchema,
    items,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
    uiSchema,
}: ArrayFieldTemplateProps) => {
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldDescriptionTemplate = getTemplate(
        "ArrayFieldDescriptionTemplate",
        registry,
        uiOptions
    );
    const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate">(
        "ArrayFieldItemTemplate",
        registry,
        uiOptions
    );
    const ArrayFieldTitleTemplate = getTemplate<"ArrayFieldTitleTemplate">(
        "ArrayFieldTitleTemplate",
        registry,
        uiOptions
    );

    const addItemContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        cursor: "pointer"
    }

    const divCircleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        border: "1px solid #2E72D2",
        color: "#2E72D2",
    }

    const textStyle: React.CSSProperties = {
        fontSize: "16px",
        color: "#2E72D2",
        fontFamily: "Arial, sans-serif",
        marginRight: "1px"
    }

    const getArrayItemName = (item: ArrayFieldTemplateItemType, index: number) => {
        const {children} = item
        const newProps = {...children.props}
        const originalName: string = children.props.name
        // remove numbers and dashes from original name
        const newName = originalName.replace(/[\d-]/g, '')
        const indexPlusOne = index + 1
        newProps.name = `${newName} ${indexPlusOne}`
        const newChildren = React.cloneElement(children, newProps)
        return newChildren
    };

    const arrayStyle: React.CSSProperties = {
        marginLeft: "318px",
    }

    return (
        <>
            {/*<ArrayFieldTitleTemplate*/}
            {/*    key={`array-field-title-${idSchema.$id}`}*/}
            {/*    idSchema={idSchema}*/}
            {/*    required={required}*/}
            {/*    title={uiOptions.title || title}*/}
            {/*    schema={schema}*/}
            {/*    uiSchema={uiSchema}*/}
            {/*    registry={registry}*/}
            {/*/>*/}
            {(uiSchema?.["ui:description"] || schema.description) && (
                <ArrayFieldDescriptionTemplate
                    key={`array-field-description-${idSchema.$id}`}
                    description={uiOptions.description || schema.description || ""}
                    idSchema={idSchema}
                    schema={schema}
                    uiSchema={uiSchema}
                    registry={registry}
                />
            )}

            <div key={`array-item-list-${idSchema.$id}`} className="flex flex-column gap-2" style={arrayStyle}>
                {/*{items && items.map(({ key, ...itemProps }) => {*/}
                {items && items.map((item: ArrayFieldTemplateItemType, index) => {
                    // deep clone item without stringifying and parsing
                    const { key, ...itemProps } = item;
                    const newChildren = getArrayItemName(item, index)
                    console.log('debug', item)
                    return (
                        <ArrayFieldItemTemplate key={key} {...itemProps} children={newChildren} />
                    )})}

                {canAdd && (
                    <div style={addItemContainerStyle} onClick={onAddClick}>
                        <div style={divCircleStyle}>
                            <i style={textStyle}>+</i>
                        </div>
                        <div>Add {title}</div>
                    {/*<IconButton*/}
                    {/*    icon="plus"*/}
                    {/*    className="mt-1 mb-3 array-item-add"*/}
                    {/*    onClick={onAddClick}*/}
                    {/*    disabled={disabled || readonly}*/}
                    {/*/>*/}
                    </div>
                )}
            </div>
        </>
    );
}
export default ArrayFieldTemplate;
