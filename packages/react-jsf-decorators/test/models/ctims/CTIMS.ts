import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";
import {DrugList} from "./DrugList";
import {ManagementGroupList} from "./ManagementGroupList";
import {SiteList} from "./SiteList";
import {SponsorList} from "./SponsorList";
import {StaffList} from "./StaffList";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class CTIMS {

    @RjsfGridProp({
        row: 0,
        span: 24,
        order: 0,
        title: 'Status',
        type: 'string',
    })
    declare status: string

    @RjsfGridProp({
        row: 1,
        span: 12,
        order: 1,
        title: 'Age',
        type: 'string',
    })
    declare age: string

    @RjsfGridProp({
        row: 1,
        span: 10,
        order: 0,
        title: 'Last Updated',
        type: 'string',
    })
    declare last_updated: string

    @RjsfGridProp({
        row: 1,
        span: 2,
        order: 3,
        title: 'Protocol #',
        type: 'string',
    })
    declare protocol_no: string

    @RjsfGridProp({
        row: 2,
        span: 6,
        title: 'NCT ID',
        type: 'string',
    })
    declare nct_id: string

    @RjsfGridProp({
        row: 2,
        span: 18,
        title: 'NCT Purpose',
        type: 'string',
    })
    declare nct_purpose: string

    @RjsfGridProp({
        row: 3,
        span: 24,
        title: 'Phase',
        type: 'string',
    })
    declare phase: string

    @RjsfGridProp({
        row: 4,
        span: 24,
        title: 'Long Title',
        type: 'string',
    })
    declare long_title: string


    @RjsfGridProp({
        row: 5,
        span: 24,
        title: 'Short Title',
        type: 'string',
    })
    declare short_title: string

    @RjsfGridProp({
        row: 6,
        span: 24,
        title: 'Drug List',
        clazz: DrugList,
    })
    declare drugList: DrugList

    @RjsfGridProp({
        row: 7,
        span: 24,
        title: 'Management Group List',
        clazz: ManagementGroupList,
    })
    declare management_group_list: ManagementGroupList

    @RjsfGridProp({
        row: 8,
        span: 24,
        title: 'Prior treatment requirements',
        type: 'string',
        isArray: true,
    })
    declare prior_treatment_requirements: string

    @RjsfGridProp({
        row: 8,
        span: 24,
        title: 'Site List',
        clazz: SiteList,
    })
    declare site_list: SiteList

    @RjsfGridProp({
        row: 9,
        span: 24,
        title: 'Sponsor List',
        clazz: SponsorList,
    })
    declare sponsor_list: SponsorList

    @RjsfGridProp({
        row: 10,
        span: 24,
        title: 'Staff List',
        clazz: StaffList,
    })
    declare staff_list: StaffList

    @RjsfGridProp({
                     row: 11,
                     span: 24,
                     order: 0,
                     title: 'Test Field',
                     type: 'string',
     })
    declare testField: string
}
