import {RjsfGrid} from "../../../main/decorators/RjsfGrid";
import {RjsfGridProp} from "../../../main/decorators/RjsfGridProp";

@RjsfGrid({
    'ui:spacing': 16,
    ObjectFieldTemplate: 'RjsfGridFieldTemplate'
})
export class ClinicalMetadata {

    @RjsfGridProp({
        row: 0,
        span: 24,
        title: 'Disease Status',
        type: 'string',
    })
    declare disease_status: string

    @RjsfGridProp({
        row: 1,
        span: 24,
        title: 'NCT Purpose',
        type: 'string',
    })
    declare nct_purpose: string

    @RjsfGridProp({
        row: 2,
        span: 24,
        title: 'Phase',
        type: 'string',
    })
    declare phase: string

    @RjsfGridProp({
        row: 3,
        span: 24,
        title: 'Prior treatment requirements',
        type: 'string',
    })
    declare prior_treatment_requirements: string

    @RjsfGridProp({
        row: 4,
        span: 12,
        title: 'Protocol Number',
        type: 'string',
    })
    declare protocol_number: string

    @RjsfGridProp({
        row: 4,
        span: 12,
        title: 'Short Title',
        type: 'string',
    })
    declare short_title: string
}
