import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class ManagementGroup {

    @RjsfGridProp({
        row: 0,
        span: 12,
        order: 0,
        title: 'Is Primary',
        enum: ['Y', 'N']
    })
    declare is_primary: string;

    @RjsfGridProp({
        row: 0,
        span: 12,
        order: 1,
        title: 'Management Group Name',
        type: 'string',
    })
    declare management_group_name: string;
}
