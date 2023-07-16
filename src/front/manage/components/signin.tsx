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
    ButtonGroup,
    Table,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';

import { woodcraft as W } from '../../../shared/woodcraft'
import ageFactory from "../../age";
import moment from 'moment';
import { cloneDeep } from 'lodash';

export default class SignIn extends React.Component<any, any> {

    constructor(props) {
        super(props);

        const event = this.props.Event.toJS();

        this.state = { day: null };

        this.exportCSV = this.exportCSV.bind(this);
        this.updateDay = this.updateDay.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
        this.setState(update(this.state, { expanded: { $set: null } }));
    }

    exportCSV() {

        const event = this.props.Event.toJS();
        const startDate = Moment.utc(event.startDate).startOf('day');
        const endDate = Moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days: { day: moment.Moment, mask: number }[] = [];

        let mask = 0
        for (let m = startDate.clone(); m.isBefore(endDate); m.add(1, 'days')) {
            days.push({ day: m.clone(), mask: Math.pow(2, mask) })
            mask++
        }

        const todayIfInEvent = days.find(d => d.day.isSame(new Date(), "day"))
        const currentDay = this.state.day || todayIfInEvent || days[0]

        const bookings = this.props.filteredBookings;

        const arriving = bookings.map(b => {
            b = cloneDeep(b)
            b.participants = this.getArrivals(b.participants, currentDay.mask)
            return b
        }).filter(b => b.participants.length > 0)

        const departing = bookings.map(b => {
            b = cloneDeep(b)
            b.participants = this.getDeparting(b.participants, currentDay.mask)
            return b
        }).filter(b => b.participants.length > 0)


        const headers = ["booking", "participant","action","date"]

        const exportedData = [
            ...arriving.reduce((a,c) =>{
                return [...a, ...c.participants.map(p => [c.district, p.name, "ARRIVE", currentDay.day.format('YYYY-MM-DD')]) ]
            }, []),
            ...departing.reduce((a,c) =>{
                return [...a, ...c.participants.map(p => [c.district, p.name, "DEPART", currentDay.day.format('YYYY-MM-DD')]) ]
            }, [])
        ]

        const fileName = this.props.Event.get('name') + "-arrivals-departurers-" + currentDay.day.format('YYYY-MM-DD') + ".csv";
        csv(fileName, [headers, ...exportedData]);
    }

    updateDay(day) {
        this.setState({ day: day })
    }

    getArrivals(participants, mask) {
        if (mask === 1) return participants.filter(p => p.days & 1)
        return participants.filter(p => (p.days & mask) && ((p.days & (mask / 2)) === 0))
    }

    getDeparting(participants, mask) {
        return participants.filter(p => (p.days & mask) && ((p.days & (mask * 2)) === 0))
    }

    render() {
        const event = this.props.Event.toJS();
        const startDate = Moment.utc(event.startDate).startOf('day');
        const endDate = Moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days: { day: moment.Moment, mask: number }[] = [];

        let mask = 0
        for (let m = startDate.clone(); m.isBefore(endDate); m.add(1, 'days')) {
            days.push({ day: m.clone(), mask: Math.pow(2, mask) })
            mask++
        }

        const todayIfInEvent = days.find(d => d.day.isSame(new Date(), "day"))
        const currentDay = this.state.day || todayIfInEvent || days[0]

        const bookings = this.props.filteredBookings;
        const participants = this.props.filteredParticipants;

        const arriving = bookings.map(b => {
            b = cloneDeep(b)
            b.participants = this.getArrivals(b.participants, currentDay.mask)
            return b
        }).filter(b => b.participants.length > 0)

        const rowsArriving = arriving.map(b => {

            const prows = b.participants.map((p, i) => <tr key={i}><td>{p.name}</td></tr>)
            prows.shift()

            return <React.Fragment><tr><td rowSpan={b.participants.length}>{b.district} ({b.participants.length})</td><td>{b.participants[0].name}</td></tr>{prows}</React.Fragment>
        })

        const departing = bookings.map(b => {
            b = cloneDeep(b)
            b.participants = this.getDeparting(b.participants, currentDay.mask)
            return b
        }).filter(b => b.participants.length > 0)

        const rowsDeparting = departing.map(b => {

            const prows = b.participants.map((p, i) => <tr key={i}><td>{p.name}</td></tr>)
            prows.shift()

            return <React.Fragment><tr><td rowSpan={b.participants.length}>{b.district} ({b.participants.length})</td><td>{b.participants[0].name}</td></tr>{prows}</React.Fragment>
        })

        const arrivingTotal = arriving.reduce((a, c) => a += c.participants.length, 0)
        const departingTotal = departing.reduce((a, c) => a += c.participants.length, 0)

        const arriveTable = arrivingTotal > 0 ? <React.Fragment>
            <h3>Arrivals ({arrivingTotal})</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Booking</th>
                        <th>Participants</th>
                    </tr>
                </thead>
                <tbody>
                    {rowsArriving}
                </tbody>
            </Table>
        </React.Fragment> : null

        const departTable = departingTotal > 0 ? <React.Fragment>
            <h3>Departing ({departingTotal})</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>Booking</th>
                                <th>Participants</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowsDeparting}
                        </tbody>
                    </Table>
        </React.Fragment> : null

        return (<React.Fragment>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button
                            outline={true}
                            disabled={currentDay.day.isSame(startDate, "day")}
                            onClick={() => this.updateDay(days[(days.findIndex(d => d.mask === currentDay.mask) - 1) > 0 ? days.findIndex(d => d.mask === currentDay.mask) - 1 : 0])}>⬅️</Button>
                        <Button
                            outline={true}
                            onClick={() => { }}>{currentDay.day.format("dddd Do")}</Button>
                        <Button
                            outline={true}
                            disabled={days.findIndex(d => d.mask === currentDay.mask) + 1 === days.length}
                            onClick={() => this.updateDay(days[(days.findIndex(d => d.mask === currentDay.mask) + 1) <= days.length ? days.findIndex(d => d.mask === currentDay.mask) + 1 : 0])}>➡️</Button>
                    </ButtonGroup>
                    <Button className="float-right" onClick={this.exportCSV}>Export CSV</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {arriveTable}
                    {departTable}
                </Col>
            </Row>
        </React.Fragment>)



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
            columns.push({ accessor: "district", Header: "District", sortable: true });
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
            { accessor: "diet", Header: "Diet", sortable: true, minWidth: 50 });

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

        if (event.partialDates === 'free') columns.push({
            id: 'popcount',
            accessor: row => row,
            Cell: row => bitCount(row.original.p.days),
            Header: "Days",// @ts-ignore
            sortMethod: daysSort,
            width: 60,
            sortable: true
        });

        if (event.customQuestions.adultFirstAid) columns.push({
            id: 'firstaid',
            accessor: row => row,
            Cell: row => row.original.p.externalExtra.adultFirstAid === 'yes' ? '✅' : '',
            Header: "🩹",// @ts-ignore
            sortMethod: firstAidSort,
            width: 40,
            sortable: true
        });

        if (event.customQuestions.photoConsent) columns.push({
            id: 'photo',
            accessor: row => row,
            Cell: row => row.original.p.externalExtra.photoConsent === 'yes' ? '✅' : '',
            Header: "📷 ",// @ts-ignore
            sortMethod: photoSort,
            width: 40,
            sortable: true
        });

        if (event.customQuestions.vcampConsent) columns.push({
            id: 'photo',
            accessor: row => row,
            Cell: row => row.original.p.externalExtra.photoConsent === 'yes' ? '✅' : '',
            Header: "📷 ",// @ts-ignore
            sortMethod: photoSort,
            width: 40,
            sortable: true
        },
            {
                id: 'activity',
                accessor: row => row,
                Cell: row => row.original.p.externalExtra.activityConsent === 'yes' ? '✅' : '',
                Header: "🛶 ",// @ts-ignore
                sortMethod: activitySort,
                width: 40,
                sortable: true
            },
            {
                id: 'sre',
                accessor: row => row,
                Cell: row => row.original.p.externalExtra.sreConsent === 'yes' ? '✅' : '',
                Header: "👩‍❤️‍👨 ",// @ts-ignore
                sortMethod: sreSort,
                width: 40,
                sortable: true
            });


        const expanded = { [this.state.expanded]: true };

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
                            if (rowInfo) return { onClick: this.updateExpanded(rowInfo.viewIndex) };
                            return {}
                        }}
                        onSortedChange={this.updateExpanded(null)}
                        onPageChange={this.updateExpanded(null)}
                        SubComponent={this.subRow}
                        data={data}
                        columns={columns}
                        showPageSizeOptions={false}
                        showPagination={true}
                        defaultPageSize={50} />
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
function bitCount(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}
