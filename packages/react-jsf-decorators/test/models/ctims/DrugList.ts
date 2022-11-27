import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {Drug} from "./Drug";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'CtimsObjectFieldTemplate'
})
export class DrugList {
    @RjsfGridProp({
        row: 0,
        span: 24,
        order: 0,
        title: 'Drug',
        isArray: true,
        clazz: Drug,
    })
    declare drug: Array<Drug>;
}
