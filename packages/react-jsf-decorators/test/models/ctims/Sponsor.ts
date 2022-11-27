import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'CtimsObjectFieldTemplate'
})
export class Sponsor {

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'Is Principal Sponsor',
        enum: ['Y', 'N']
    })
    declare is_principal_sponsor: string;

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'Sponsor Name'
    })
    declare sponsor_name: string;
}
