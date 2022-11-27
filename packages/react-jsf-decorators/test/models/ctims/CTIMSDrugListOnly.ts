import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {DrugList} from "./DrugList";
import {ClinicalMetadata} from "./ClinicalMetadata";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class CTIMSDrugListOnly {

    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Clinical Metadata',
        clazz: ClinicalMetadata,
    })
    declare clinicalMetadata: ClinicalMetadata

    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Drug List',
        clazz: DrugList,
    })
    declare drugList: DrugList


}
