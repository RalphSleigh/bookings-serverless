import * as React      from 'react'
import csv        from 'csv-file-creator'
import ReactTable from 'react-table'
import Moment     from 'moment'
import update     from 'immutability-helper';
import map        from 'lodash/map'

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

import ageFactory from "../../age";

export default class Birthdays extends React.Component<any, any> {
    private ageWidgets: { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => string; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => string } | { BookingFormWidget: (props) => JSX.Element; displayAgeParticipant: (p) => any; participantCardField: (p) => JSX.Element; displayAgeCSV: (p) => string; displayAgeMoment: (age, event) => any };

    constructor(props) {
        super(props);

        this.ageWidgets = ageFactory(this.props.Event.toJS());
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    componentWillReceiveProps() {
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.participants;

        const startDate = Moment.utc(event.startDate).startOf('day');
        const endDate = Moment.utc(event.endDate).startOf('day').add(1, 'days');
        const days = [];


        for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {

            let rows = []
            participants.forEach(p => {

                const bday = Moment(p.age);
                if (m.date() === bday.date() && m.month() === bday.month()) {

                    const age = Moment(m).add(1, 'days').diff(bday, 'years');//@ts-ignore
                    if (age < 22) rows.push(<p key={p.id}>{p.name} ({age})</p>);//@ts-ignore
                    else rows.push(<p key={p.id}>{p.name}</p>);
                }


            });

            // @ts-ignore
            days.push(<React.Fragment key={m}>
                <h5>{m.format('dddd Do')}</h5>
                {rows}
            </React.Fragment>)
        }

        return (<React.Fragment>
            <Row>
                <Col>
                    {days}
                </Col>
            </Row>
        </React.Fragment>);
    }
}


