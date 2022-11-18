import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class Site {

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'Coordinating Center',
        enum: ['Y', 'N']
    })
    declare coordinating_center: string;

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'User Cancer Center IRB',
        enum: ['Y', 'N']
    })
    declare uses_cancer_center_irb: string;

    @RjsfGridProp({
        row: 1,
        span: 12,
        title: 'Site Name',
    })
    declare site_name: string;

    @RjsfGridProp({
        row: 1,
        span: 12,
        title: 'Site Status',
    })
    declare site_status: string;
}
