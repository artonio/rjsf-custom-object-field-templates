import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {Staff} from "./Staff";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class StaffList {
    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Protocol Staff',
        isArray: true,
        clazz: Staff,
    })
    declare protocol_staff: Array<Staff>;
}
