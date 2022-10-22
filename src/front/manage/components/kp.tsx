import * as React from 'react'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Table
} from 'reactstrap';

import { woodcraft as W } from '../../../shared/woodcraft'

export default class KP extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true
    }

    render() {

        //const event = this.props.Event.toJS();
        //const bookings = this.props.Bookings.toJS();
        const participants = this.props.participants;

        const groups = W.map(w => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
            if (people.length === 0) return null;
            return (<tr key={w.name}>
                <td>{w.name}</td>
                <td>{people.filter(p => p.diet === "omnivore").length}</td>
                <td>{people.filter(p => p.diet === "vegetarian").length}</td>
                <td>{people.filter(p => p.diet === "vegan").length}</td>
                <td><b>{people.length}</b></td>
            </tr>);
        });

        groups.push(<tr key="total">
            <td><b>Total:</b></td>
            <td><b>{participants.filter(p => p.diet === "omnivore").length}</b></td>
            <td><b>{participants.filter(p => p.diet === "vegetarian").length}</b></td>
            <td><b>{participants.filter(p => p.diet === "vegan").length}</b></td>
            <td><b>{participants.length}</b></td>
        </tr>);

        const requirments = participants.filter(p => p.dietExtra !== null && p.dietExtra !== '').map(p => <tr
            key={p.id}>
            <td>{p.name}</td>
            <td>{p.dietExtra}</td>
        </tr>);

        return (<Row>
            <Col>
                <h4>Totals</h4>
                <Table>
                    <thead>
                    <tr>
                        <th>Age Group</th>
                        <th>Omnivore</th>
                        <th>Vegetarian</th>
                        <th>Vegan</th>
                        <th><b>Total</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    {groups}
                    </tbody>
                </Table>
                <h4>Requirments &amp; Allergies</h4>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Requirement</th>
                    </tr>
                    </thead>
                    <tbody>
                    {requirments}
                    </tbody>
                </Table>
            </Col>
        </Row>);
    }
}


const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

