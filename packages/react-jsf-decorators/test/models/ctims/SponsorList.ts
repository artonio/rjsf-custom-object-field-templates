import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {Sponsor} from "./Sponsor";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class SponsorList {
    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Sponsor',
        isArray: true,
        clazz: Sponsor,
    })
    declare site: Array<Sponsor>;
}
