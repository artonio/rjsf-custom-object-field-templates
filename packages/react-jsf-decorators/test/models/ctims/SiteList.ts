import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {Site} from "./Site";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'CtimsObjectFieldTemplate'
})
export class SiteList {
    @RjsfGridProp({
        row: 0,
        span: 24,
        order: 0,
        title: 'Site',
        isArray: true,
        clazz: Site,
    })
    declare site: Array<Site>;
}
