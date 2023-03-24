import * as React from 'react'
import csv from 'csv-file-creator'
import ReactTable from 'react-table'
import Moment from 'moment'
import update from 'immutability-helper';
import * as eol from 'eol'
import map from 'lodash/map'
import { fields } from './column_helper'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

import { woodcraft as W } from '../../../shared/woodcraft'
import ageFactory from "../../age";

export default class Participants extends React.Component<any, any> {
    private ageWidgets: { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => string; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => string } | { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => any; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => any };

    constructor(props) {
        super(props);

        this.state = {expanded: null};

        this.ageWidgets = ageFactory(this.props.Event.toJS());
        this.exportCSV = this.exportCSV.bind(this);
        this.updateExpanded = this.updateExpanded.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
        this.setState(update(this.state, {expanded: {$set: null}}));
    }

    exportCSV() {

        const event = this.props.Event.toJS();

        const used_fields = fields.filter(f => f.is_enabled(event))

        const headers = used_fields.map(f => f.get_header(event)).flat()

        const exportedData = this.props.participants.map(p => {
            const b = this.props.bookings.find(b => b.id === p.bookingId);
            return used_fields.map(f => f.csv_value(p, b, event)).flat()
         })


        /*

        const startDate = Moment.utc(event.startDate).startOf('day');
        const endDate = Moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];
        let mask = 0;


        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
            //@ts-ignore
            days.push({label: m.format("dddd Do"), value: Math.pow(2, mask)});
            mask++;
        }

        const exportedData = this.props.participants.map(p => {
            const b = this.props.bookings.find(b => b.id === p.bookingId);

            const dates = event.partialDatesData.find(d => d.mask === p.days)
            const attend = dates ? dates.name : 'Unknown'

            const fields = [p.id,
                p.name,
                p.displayAge,
                Moment(p.age).format("DD/MM/YYYY"),
                p.diet,
                p.dietExtra,
                p.medical,
                attend,
                b.userName,
                b.userEmail,
                b.userContact,
                b.emergencyName,
                b.emergencyPhone,
                eol.crlf(b.note || ''),
                p.externalExtra.adultFirstAid,
                p.externalExtra.photoConsent,
                p.externalExtra.adultEmail,
                p.createdAt,
                p.updatedAt];

            if(event.partialDates === 'free') {

                days.forEach(d => {
                    //@ts-ignore
                    fields.push(p.days & d.value ? 1 : 0)
                })

            }

            return fields
        });

        const headers = ['id', 'Name', 'Age Group', 'DOB', 'Diet', 'Requirements &  Allergies', 'Medical', 'Attendance', 'Booking Name', 'Booking e-mail', 'Booking Phone', 'Emergency name', 'Emergency Contact', 'Note', 'First Aid', 'Photo', 'Membership email', 'Created At', 'Updated At']

        if(event.partialDates === 'free') {

            days.forEach(d => {
                //@ts-ignore
                headers.push(d.label)
            })
        }
        */
        const fileName = this.props.Event.get('name') + "-Participants-" + Moment().format('YYYY-MM-DD') + ".csv";
        csv(fileName, [headers, ...exportedData]);
    }

    updateExpanded(id) {
        return e => {
            if (id === this.state.expanded) this.setState(update(this.state, {expanded: {$set: null}}));
            else this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    subRow = (row) => {

        const event = row.original.e;

        const village = event.villages.find(v => row.original.b.villageId === v.id);
        const organisation = event.organisations.find(o => row.original.b.organisationId === o.id);
        const attendance = event.partialDates === "presets" ? event.partialDatesData.find(d => d.mask === row.original.p.days) : null;


        return (<Card>
            <CardBody>
                <CardTitle>
                    {row.original.name}
                </CardTitle>
                <Row>
                    <Col sm={4}>
                        {this.ageWidgets.participantCardField(row.original)}
                        {row.original.b.district ? <p><b>Group/District:</b> {row.original.b.district}</p> : null}
                        <p><b>Booking Contact:</b> {row.original.b.userName}</p>
                        <p><b>Booking Contact Phone:</b> {row.original.b.userContact}</p>
                        {village ? <p><b>Village:</b> {village.name}</p> : null}
                        {organisation ? <p><b>Organisation:</b> {organisation.name}</p> : null}
                        {attendance ? <p><b>Attendance:</b> {attendance.name}</p> : null}
                        {!event.bigCampMode ? <p><b>Emergency Contact:</b> {row.original.b.emergencyName}</p> : null}
                        {!event.bigCampMode ? <p><b>Emergency Phone:</b> {row.original.b.emergencyPhone}</p> : null}
                    </Col>
                    <Col sm={4}>
                        <p><b>Diet:</b> {row.original.diet} </p>
                        <p><b>Diet Info:</b></p><p>{row.original.p.dietExtra}</p>
                        <p><b>Anything Else:</b></p><p>{row.original.b.note}</p>
                    </Col>
                    <Col sm={4}>
                        <p><b>Medical:</b></p><p>{row.original.p.medical}</p>
                    </Col>
                </Row>
            </CardBody>
        </Card>);
    };

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.filteredBookings;
        const participants = this.props.filteredParticipants;

        const groups = W.reduce((a, w) => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
            if (people.length === 0) return a;
            return a + ` ${w.name}: ${people.length}`;
        }, '');

        //const prows = participants.sort(nameSort).map(p => <tr key={p.id}><td>{p.name}</td><td>{p.age}</td><td>{p.diet}</td><td>{bookings.find(b => b.id === p.bookingId).userName}</td></tr>)

        const data = participants.map(p => {
            const b = bookings.find(b => b.id === p.bookingId);
            return {
                name: p.name,
                dob: p.age,
                age: p.displayAge,
                diet: p.diet,
                createdAt: p.prettyCreatedAt,
                district: b.district,
                p: p,
                b: b,
                e: event
            };
        });


        const columns = [{
            id: "name",
            accessor: row => row,
            Header: "Name",
            sortable: true,
            sortMethod: nameSort,
            Cell: row => row.value.name
        }];

        if (event.bigCampMode) { // @ts-ignore
            columns.push({accessor: "district", Header: "District", sortable: true});
        }

        columns.push({
                id: 'age',
                accessor: row => row,
                Header: "Age",
                sortable: true,
                sortMethod: dobSort,
                Cell: row => row.original.age,
                //width: 120
            },// @ts-ignore
            {accessor: "diet", Header: "Diet", sortable: true, minWidth: 50});

        if (event.partialDates === 'presets') columns.push({
            id: 'presets',
            accessor: row => row,
            Cell: row => {
                const data = row.original.e.partialDatesData.find(d => d.mask === row.original.p.days)
                return data ? data.name : 'Unknown'
            },
            Header: "Attendance",// @ts-ignore
            sortMethod: partialAttendanceSort,
            //width: 150,
            sortable: true
        });

        columns.push(
            {
                id: 'createdAt',
                accessor: row => row,
                Cell: row => row.original.createdAt,
                sortMethod: createdSort,
                Header: "Created At",
                sortable: true,
                //minWidth: 50
            });

        if(event.partialDates === 'free')columns.push({
            id:         'popcount',
            accessor:   row => row,
            Cell:       row => bitCount(row.original.p.days),
            Header:     "Days",// @ts-ignore
            sortMethod: daysSort,
            width:      60,
            sortable:   true
        });

        if (event.customQuestions.adultFirstAid) columns.push({
                                                                  id:         'firstaid',
                                                                  accessor:   row => row,
                                                                  Cell:       row => row.original.p.externalExtra.adultFirstAid === 'yes' ? '✅' : '',
                                                                  Header:     "🩹",// @ts-ignore
                                                                  sortMethod: firstAidSort,
                                                                  width:      40,
                                                                  sortable:   true
                                                              });

        if (event.customQuestions.photoConsent) columns.push({
            id:         'photo',
            accessor:   row => row,
            Cell:       row => row.original.p.externalExtra.photoConsent === 'yes' ? '✅' : '',
            Header:     "📷 ",// @ts-ignore
            sortMethod: photoSort,
            width:      40,
            sortable:   true
        });

        if (event.customQuestions.vcampConsent) columns.push({
            id:         'photo',
            accessor:   row => row,
            Cell:       row => row.original.p.externalExtra.photoConsent === 'yes' ? '✅' : '',
            Header:     "📷 ",// @ts-ignore
            sortMethod: photoSort,
            width:      40,
            sortable:   true
        },
        {
            id:         'activity',
            accessor:   row => row,
            Cell:       row => row.original.p.externalExtra.activityConsent === 'yes' ? '✅' : '',
            Header:     "🛶 ",// @ts-ignore
            sortMethod: activitySort,
            width:      40,
            sortable:   true
        },
        {
            id:         'sre',
            accessor:   row => row,
            Cell:       row => row.original.p.externalExtra.sreConsent === 'yes' ? '✅' : '',
            Header:     "👩‍❤️‍👨 ",// @ts-ignore
            sortMethod: sreSort,
            width:      40,
            sortable:   true
        });


        const expanded = {[this.state.expanded]: true};

        return (<React.Fragment>
            <Row>
                <Col>
                    <Button className="float-right" onClick={this.exportCSV}>Export CSV</Button>
                    <h4>Total Participants: {participants.length}</h4>
                    <p>{groups}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReactTable
                        expanded={expanded}
                        getTrProps={(state, rowInfo, column) => {
                            if (rowInfo) return {onClick: this.updateExpanded(rowInfo.viewIndex)};
                            return {}
                        }}
                        onSortedChange={this.updateExpanded(null)}
                        onPageChange={this.updateExpanded(null)}
                        SubComponent={this.subRow}
                        data={data}
                        columns={columns}
                        showPageSizeOptions={false}
                        showPagination={true}
                        defaultPageSize={50}/>
                </Col>
            </Row>
        </React.Fragment>);
    }
}

const dobSort = (a, b) => {
    return a.dob < b.dob ? 1 : -1;
};

const createdSort = (a, b) => {
    return a.p.createdAt > b.p.createdAt ? 1 : -1;
};

const firstAidSort = (a, b) => {// @ts-ignore
    return !!(a.p.externalExtra.adultFirstAid === 'yes') - !!(b.p.externalExtra.adultFirstAid === 'yes');
}

const photoSort = (a, b) => {// @ts-ignore
    return !!(a.p.externalExtra.photoConsent === 'yes') - !!(b.p.externalExtra.photoConsent === 'yes');
}

const activitySort = (a, b) => {// @ts-ignore
    return !!(a.p.externalExtra.activityConsent === 'yes') - !!(b.p.externalExtra.activityConsent === 'yes');
}

const sreSort = (a, b) => {// @ts-ignore
    return !!(a.p.externalExtra.sreConsent === 'yes') - !!(b.p.externalExtra.sreConsent === 'yes');
}

const daysSort = (a, b) => {
    return bitCount(a.p.days) - bitCount(b.p.days);
}

const partialAttendanceSort = (a, b) => {
    return a.p.days - b.p.days;
}

const nameSort = (a, b) => {
    var splitA = a.name.trim().split(" ");
    var splitB = b.name.trim().split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

// https://stackoverflow.com/questions/43122082/efficiently-count-the-number-of-bits-in-an-integer-in-javascript/43122214
function bitCount (n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}
