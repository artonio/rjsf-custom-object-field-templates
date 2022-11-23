import {ArrayFieldTemplateItemType} from "@rjsf/utils";
import IconButton from "../../IconButton";
import {Panel, PanelProps} from 'primereact/panel';
import { Ripple } from 'primereact/ripple';
import React from "react";

const headerTemplate = (options: any, props: {
    title: string,
    onDropIndexClick: any,
    index: number,
    hasRemove: boolean,
}) => {
    const {title, onDropIndexClick, index, hasRemove} = props;
    const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    const titleStyle: React.CSSProperties = {
        textTransform: 'uppercase',
    }

    const trashIconStyle: React.CSSProperties = {
        color: 'red',
        cursor: 'pointer',
        marginRight: '13px',
    }

    return (
        <div className={className}>
            <span className={titleClassName} style={titleStyle}>
                    {title}
            </span>
            <div>
                {hasRemove && (<i className="pi pi-trash" style={trashIconStyle} onClick={onDropIndexClick(index)}></i>)}
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
            </div>


        </div>
    )
}

const ArrayFieldItemTemplate = ({
    children,
    disabled,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    hasToolbar,
    index,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
    }: ArrayFieldTemplateItemType) => {
    const canMoveItems = hasMoveUp || hasMoveDown;
    console.log('children', children)
    const title = children.props.name

    const headerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        width: "640px",
        height: "56px",
    }

    const headerTemplateOptions = {
        title,
        onDropIndexClick,
        index,
        hasRemove
    }

    return (
        <div key={`array-item-${index}`} className="flex align-items-start gap-2 p-2 border-1 border-round">
            {/*<Panel headerTemplate={headerTemplate(index)} toggleable title={title}>*/}
            <Panel headerTemplate={(props) => headerTemplate(props, headerTemplateOptions)} toggleable>
                <div className="flex-grow-1">{children}</div>
            </Panel>
            {/*<div className="flex-grow-1">{children}</div>*/}
            <div>
                {hasToolbar && (
                    <div className="flex flex-row">
                        {/*{canMoveItems && (*/}
                        {/*    <>*/}
                        {/*        <IconButton*/}
                        {/*            icon="arrow-up"*/}
                        {/*            className="array-item-move-up"*/}
                        {/*            style={hasRemove ? {*/}
                        {/*                borderTopRightRadius: 0,*/}
                        {/*                borderBottomRightRadius: 0,*/}
                        {/*            } : undefined}*/}
                        {/*            disabled={disabled || readonly || !hasMoveUp}*/}
                        {/*            onClick={onReorderClick(index, index - 1)}*/}
                        {/*        />*/}
                        {/*        <IconButton*/}
                        {/*            icon="arrow-down"*/}
                        {/*            style={{*/}
                        {/*                borderLeft: 0,*/}
                        {/*                borderTopLeftRadius: 0,*/}
                        {/*                borderBottomLeftRadius: 0,*/}
                        {/*                ...(hasRemove ? {*/}
                        {/*                    borderTopRightRadius: 0,*/}
                        {/*                    borderBottomRightRadius: 0,*/}
                        {/*                } : {}),*/}
                        {/*            }}*/}
                        {/*            disabled={disabled || readonly || !hasMoveDown}*/}
                        {/*            onClick={onReorderClick(index, index + 1)}*/}
                        {/*        />*/}
                        {/*    </>*/}
                        {/*)}*/}

                        {/*{hasRemove && (*/}
                        {/*    <IconButton*/}
                        {/*        icon="remove"*/}
                        {/*        style={canMoveItems ? {*/}
                        {/*            borderLeft: 0,*/}
                        {/*            borderTopLeftRadius: 0,*/}
                        {/*            borderBottomLeftRadius: 0,*/}
                        {/*        } : undefined}*/}
                        {/*        disabled={disabled || readonly}*/}
                        {/*        onClick={onDropIndexClick(index)}*/}
                        {/*    />*/}
                        {/*)}*/}
                    </div>
                )}
            </div>
        </div>
    );
}
export default ArrayFieldItemTemplate;
