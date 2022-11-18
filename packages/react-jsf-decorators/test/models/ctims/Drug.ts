import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class Drug {

    @RjsfGridProp({
        row: 0,
        span: 24,
        order: 0,
        title: 'Drug Name',
        type: 'string',
    })
    declare drug_name: string;
}
