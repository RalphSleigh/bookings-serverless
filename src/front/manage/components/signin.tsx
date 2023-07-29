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


        const headers = ["booking", "participant","age","village", "photo", "action","date"]

        const exportedData = [
            ...arriving.reduce((a,c) =>{
                return [...a, ...c.participants.map(p => [c.district, p.name, p.displayAge, event.villages.find(v => c.villageId === v.id).name, p.externalExtra.photoConsent, "ARRIVE", currentDay.day.format('YYYY-MM-DD')]) ]
            }, []),
            ...departing.reduce((a,c) =>{
                return [...a, ...c.participants.map(p => [c.district, p.name, p.displayAge, event.villages.find(v => c.villageId === v.id).name, p.externalExtra.photoConsent, "DEPART", currentDay.day.format('YYYY-MM-DD')]) ]
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

            const prows = b.participants.map((p, i) => <tr key={i}><td>{p.name} ({p.displayAge})</td><td>{p.externalExtra.photoConsent === 'yes'? "📷" : "🚫"}</td></tr>)
            prows.shift()

            return <React.Fragment><tr><td rowSpan={b.participants.length}>{b.district} ({b.participants.length}) - {event.villages.find(v => b.villageId === v.id).name}</td><td>{b.participants[0].name} ({b.participants[0].displayAge})</td><td>{b.participants[0].externalExtra.photoConsent === 'yes' ? "📷" : "🚫"}</td></tr>{prows}</React.Fragment>
        })

        const departing = bookings.map(b => {
            b = cloneDeep(b)
            b.participants = this.getDeparting(b.participants, currentDay.mask)
            return b
        }).filter(b => b.participants.length > 0)

        const rowsDeparting = departing.map(b => {

            const prows = b.participants.map((p, i) => <tr key={i}><td>{p.name} ({p.displayAge})</td></tr>)
            prows.shift()

            return <React.Fragment><tr><td rowSpan={b.participants.length}>{b.district} ({b.participants.length}) - {event.villages.find(v => b.villageId === v.id).name}</td><td>{b.participants[0].name} ({b.participants[0].displayAge})</td></tr>{prows}</React.Fragment>
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
                        <th></th>
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
    }
}
