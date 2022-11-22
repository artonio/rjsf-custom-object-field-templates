import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {DrugList} from "./DrugList";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class CTIMSDrugListOnly {
    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Drug List',
        clazz: DrugList,
    })
    declare drugList: DrugList
}
