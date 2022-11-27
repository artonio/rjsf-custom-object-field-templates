import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {ManagementGroup} from "./ManagementGroup";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'CtimsObjectFieldTemplate'
})
export class ManagementGroupList {

    @RjsfGridProp({
        row: 0,
        span: 24,
        order: 0,
        title: 'Management Group',
        isArray: true,
        clazz: ManagementGroup,
    })
    declare managementGroup: Array<ManagementGroup>;
}
