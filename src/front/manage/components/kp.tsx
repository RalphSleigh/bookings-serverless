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
import moment from 'moment';
import popcount      from '@f/popcount';

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

        const event = this.props.Event.toJS();
        //const bookings = this.props.Bookings.toJS();
        const participants = this.props.participants;

        const groups = W.map(w => {
            const people = participants.filter((p) => p.ageGroup === '' ? false : p.ageGroup === w.singular);
            if (people.length === 0) return null;
            return (<tr key={w.name}>
                <td>{w.name}</td>
                <td>{people.filter(p => p.diet === "omnivore").length}</td>
                <td>{people.filter(p => p.diet === "pescetarian").length}</td>
                <td>{people.filter(p => p.diet === "vegetarian").length}</td>
                <td>{people.filter(p => p.diet === "vegan").length}</td>
                <td><b>{people.length}</b></td>
            </tr>);
        });

        groups.push(<tr key="total">
            <td><b>Total:</b></td>
            <td><b>{participants.filter(p => p.diet === "omnivore").length}</b></td>
            <td><b>{participants.filter(p => p.diet === "pescetarian").length}</b></td>
            <td><b>{participants.filter(p => p.diet === "vegetarian").length}</b></td>
            <td><b>{participants.filter(p => p.diet === "vegan").length}</b></td>
            <td><b>{participants.length}</b></td>
        </tr>);

        let requirments
        if(event.customQuestions.vcampKP){
            requirments = participants.filter(p => p.externalExtra.dairy ||
                p.externalExtra.soya ||
                p.externalExtra.egg ||
                p.externalExtra.gluten ||
                p.externalExtra.pork ||
                p.externalExtra.nut ||                
                (p.externalExtra.dietPreference && p.externalExtra.dietPreference !== '') ||
                p.externalExtra.dietContactMe ||
                (p.dietExtra !== null && p.dietExtra !== '')).map(p => {
            
                const startDate = moment.utc(event.startDate).startOf('day');
                const endDate = moment.utc(event.endDate).startOf('day').add(1, 'days');
                let days = ""
                let mask = 0;
        
                for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
                    //@ts-ignore
                    days += p.days & Math.pow(2, mask) ? "⬤ " : "◯ "
                    mask++;
                }
                /*
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
                */

                const no = [[p.externalExtra.dairy, "Dairy"],
                [p.externalExtra.soya, "Soya"],
                [p.externalExtra.egg, "Egg"],
                [p.externalExtra.gluteb, "Gluten"],
                [p.externalExtra.pork, "Pork"],
                [p.externalExtra.nuts, "Nuts"]].filter(i=> i[0]).map(i=>i[1]).join(", ")

            return <tr
                key={p.id}>
                <td><p>{p.name}</p><p><span style={{color:'green'}}>{days}</span></p></td>
                <td>
                    {p.externalExtra.dietContactMe ? <p><b>Has requested to be contacted by allergy kitchen</b></p> : null}
                    {no? <p><b>No: </b>{no}</p>: null}
                    {p.dietExtra ? <><p><b>Requirement:</b></p><p>{p.dietExtra}</p></> : null }
                    {p.externalExtra.dietPreference ? <><p><b>Preference:</b></p><p>{p.externalExtra.dietPreference}</p></> : null }
                </td>
            </tr>});
        } else {
        requirments = participants.filter(p => p.dietExtra !== null && p.dietExtra !== '').map(p => <tr
            key={p.id}>
            <td>{p.name}</td>
            <td>{p.dietExtra}</td>
        </tr>);
        } 

        return (<Row>
            <Col>
                <h4>Totals</h4>
                <Table>
                    <thead>
                    <tr>
                        <th>Age Group</th>
                        <th>Omnivore</th>
                        <th>Pescetarian</th>
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
                        <th>Requirements</th>
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

