import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'CtimsObjectFieldTemplate'
})
export class Staff {

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'First Name',
    })
    declare first_name: string;

    @RjsfGridProp({
        row: 0,
        span: 12,
        title: 'Last Name',
    })
    declare last_name: string;

    @RjsfGridProp({
        row: 1,
        span: 24,
        title: 'Email',
    })
    declare email: string;

    @RjsfGridProp({
        row: 2,
        span: 24,
        title: 'Institution Name',
    })
    declare institution_name: string;

    @RjsfGridProp({
        row: 3,
        span: 24,
        title: 'Staff Role',
    })
    declare staff_role: string;

}
