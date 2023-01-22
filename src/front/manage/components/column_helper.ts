import Moment from 'moment'
import * as eol from 'eol'

class Column {
    header: string | string[]
    enabled: ((any: any) => boolean) | boolean;
    accessor: (arg0: any, arg1?: any) => any;

    constructor(header: string | string[], enabled: ((arg0: any) => boolean) | boolean, accessor: (arg0: any, arg1?: any) => any) {
        this.header = header
        this.enabled = enabled
        this.accessor = accessor
    }

    is_enabled(event: any) {
        if (typeof this.enabled == 'boolean') return this.enabled
        return this.enabled(event)
    }

    get_header() {
        return this.header
    }

    csv_value(arg0: any, arg1?: any) {
        return this.accessor(arg0, arg1)
    }
}

export const fields = [
    new Column('Name', true, p => p.name),
    new Column('Age Group', true, p => p.displayAge),
    new Column('DOB', true, p => Moment(p.age).format("DD/MM/YYYY"),),
    new Column(['Diet', 'Requirements &  Allergies'], e => !e.customQuestions.vcampKP, p => [p.diet, p.dietExtra]),
    new Column([
        'Diet',
        'Dairy',
        'Soya',
        'Egg',
        'Gluten',
        'Nut',
        'Preference',
        'Other',
        'Contact me'
    ],
        e => e.customQuestions.vcampKP,
        p => [
            p.diet,
            Boolean(p.externalExtra.dairy),
            Boolean(p.externalExtra.soya),
            Boolean(p.externalExtra.egg),
            Boolean(p.externalExtra.gluten),
            Boolean(p.externalExtra.pork),
            Boolean(p.externalExtra.nut),
            eol.crlf(p.externalExtra.dietPreference || ''),
            eol.crlf(p.dietExtra || ''),
            Boolean(p.externalExtra.dietContactMe)
        ]),
    new Column('Medical', true, p => p.medical),
    new Column('Attendance', e => e.partialDates !== 'free' && e.partialDates !== 'whole', (p, e) => {
        const dates = e.partialDatesData.find(d => d.mask === p.days)
        return dates ? dates.name : 'Unknown'
    }),
    new Column('Booking person name', true, (p, b) => b.userName),
    new Column('Booking person Name', e => e.bigCampMode, (p, b) => b.userName),
    new Column('Booking person email', true, (p, b) => b.userEmail),
    new Column('Booking person phone', true, (p, b) => b.userContact),
    new Column('Emergency contact name', true, (p, b) => b.emergencyName),
    new Column('Emergency contact phone', true, (p, b) => b.emergencyPhone),
    new Column('Note', true, (p, b) => eol.crlf(b.note || '')),
    new Column('Adult first aid', e => e.customQuestions.adultFirstAid, (p, b) => p.externalExtra.adultFirstAid),
    new Column('Membership email', e => e.customQuestions.adultEmail, (p, b) => p.externalExtra.adultEmail),
    new Column('Created at', true, (p, b) => p.createdAt),
    new Column('Updated at', true, (p, b) => p.updatedAt)
]

