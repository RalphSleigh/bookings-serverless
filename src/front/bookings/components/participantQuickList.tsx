import * as React from 'react'
import { woodcraft as W } from '../../../shared/woodcraft.js'
import {
    Row,
    Col,
} from 'reactstrap';
import Moment from "moment";


W.reverse();

export default class ParticipantsList extends React.Component<any, any> {

    render() {

        const list = this.props.booking.participants.filter(p => p.name !== '' && p.age !== '' && p.diet !== '');
        const groups = W.map(w => {
            const people = list.filter((p) => p.age === '' ? false : w.filter(Moment(this.props.event.startDate).diff(Moment(p.age), 'years')))
                .sort(nameSort)
                .map((p, k) =>
                <p
                    key={k}><a href={`#participant-${p.id}`}>{p.name}</a></p>);
            if (people.length === 0) return null;
            return (<div className="participantQuickList" key={w.name}>
                <h5>{w.name}: {people.length}</h5>
                {people}
            </div>);
        });


        return (<Col md={2}>
            <div className="sticky-top">
                <h4>Participants: {list.length}</h4>
                {groups}
            </div>
        </Col>);

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