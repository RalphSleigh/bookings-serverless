import * as React from 'react'
import Moment        from 'moment'
import update        from 'immutability-helper';
import cloneDeep     from "lodash/cloneDeep";
import map           from 'lodash/map';
import reduce        from 'lodash/reduce';
import ReactMarkdown from 'react-markdown'
import popcount      from '@f/popcount';
//this implements a pricing policy for large camps

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/free-solid-svg-icons/faTimes'

import {
    Row,
    Col,
    FormGroup,
    Input,
    Table,
    InputGroup,
    Button,
    Label
} from 'reactstrap';

import {
    Item,
    Span,
    A,
    Box
} from 'react-html-email'

let bucketKey = Math.random() * 10000


export const name = "big";
export const selection = "Big Camp Pricing Policy";

export class Config extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.addBucket = this.addBucket.bind(this);
        this.deleteBucket = this.deleteBucket.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.update = this.update.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
    }

    update(field) {
        return e => {
            this.props.update(update(this.props.fee, {[field]: {$set: e.target.value}}));
            e.preventDefault();
        }
    }

    updateDate(id) {
        return e => {
            const buckets = cloneDeep(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id) b.date = e.target.value;
            });
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    updateAmount(id) {
        return item => e => {
            const buckets = cloneDeep(this.props.fee.buckets);
            buckets.forEach(b => {
                if (b.id === id) b[item] = e.target.value;
            });
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    addBucket(e) {
        const buckets = [...(this.props.fee.buckets || [])];
        buckets.push({id: "bucket" + bucketKey, date: new Date()});
        bucketKey++;
        this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
        e.preventDefault();
    }

    deleteBucket(id) {
        return e => {
            const buckets = cloneDeep(this.props.fee.buckets).filter(b => b.id !== id);
            this.props.update(update(this.props.fee, {buckets: {$set: buckets}}));
            e.preventDefault();
        }
    }

    render() {
        //Thou shalt not ever use JS numbers for currency...
        const dateBuckets = this.props.fee.buckets || [];

        const bucketRows = dateBuckets.map(b => {

            const feeBoxes = <React.Fragment>
                <FormGroup row>
                    <Label sm={4}>Whole Event:</Label>
                    <Col sm={8}>
                        <InputGroup>
                            <div className="input-group-prepend">
                                <span className="input-group-text">£</span>
                            </div>
                            <Input type="number" className="form-control" value={b.whole}
                                   onChange={this.updateAmount(b.id)('whole')}/>
                        </InputGroup>
                    </Col>
                </FormGroup>
                <p>Partial attendance fee = A + B * (nights attending)</p>
                <FormGroup row>
                    <Label sm={2}>A:</Label>
                    <Col sm={4}>
                        <InputGroup>

                            <div className="input-group-prepend">
                                <span className="input-group-text">£</span>
                            </div>
                            <Input type="number" className="form-control" placeholder="35" value={b.a}
                                   onChange={this.updateAmount(b.id)('a')}/>
                        </InputGroup>
                    </Col>
                    <Label sm={2}>B:</Label>
                    <Col sm={4}>
                        <InputGroup>

                            <div className="input-group-prepend">
                                <span className="input-group-text">£</span>
                            </div>
                            <Input type="number" className="form-control" placeholder="35" value={b.b}
                                   onChange={this.updateAmount(b.id)('b')}/>
                        </InputGroup>
                    </Col>
                </FormGroup>
            </React.Fragment>;

            return <tr key={b.id}>
                <td><Input type="date" onChange={this.updateDate(b.id)} value={Moment(b.date).format("YYYY-MM-DD")}/>
                </td>
                <td>{feeBoxes}</td>
                <td>
                    <Button onClick={this.deleteBucket(b.id)} color="warning">
                        <span style={{color: 'white'}}><FontAwesomeIcon icon={faTimes}/></span>
                    </Button>
                </td>
            </tr>
        });

        return (<React.Fragment>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Description (Markdown supported):</Label>
                        <Input type="textarea" name="description" value={this.props.fee.desc}
                               onChange={this.update('desc')}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Date buckets</h4>
                    <Table>
                        <thead>
                        <tr>
                            <th>Up Until Date</th>
                            <th>Fee</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {bucketRows}
                        </tbody>
                    </Table>
                    <Button onClick={this.addBucket}>Add Bucket</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup row>
                        <Label sm={4}>Cancellation Fee:</Label>
                        <Col sm={2}>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="50"
                                       value={this.props.fee.cancel}
                                       onChange={this.update('cancel')}/>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>)
    }
}

export class BookingForm extends React.Component<any, any>{

    render() {

        //this.props.participants
        //this.props.event.startDate

        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants, this.props.booking);
        const tableLines = feesOwed.map(l => <tr key={l.line}>
            <td>{l.line}</td>
            <td>£{l.total}</td>
        </tr>);

        return (<Row>
            <Col sm={12}>
                <ReactMarkdown children={this.props.event.feeData.desc}/>
            </Col>
            <Col>
                <Table>
                    <thead></thead>
                    <tbody>{tableLines}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b>£{feesOwed.reduce((a, c) => {
                            return a + c.total
                        }, 0)}</b></td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>)
    }
}

export class ThanksRow extends React.Component<any, any>{

    render() {

        //this.props.participants
        //this.props.event.startDate

        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => <tr key={l.line}>
            <td>{l.line}</td>
            <td>£{l.total}</td>
        </tr>);

        return (<Row>
            <Col>
                <Table>
                    <thead></thead>
                    <tbody>{tableLines}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b>£{feesOwed.reduce((a, c) => {
                            return a + c.total
                        }, 0)}</b></td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>)
    }
}

export function emailHTML(event, booking) {

    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => <tr key={i}>
        <td>{r.line}</td>
        <td><b>£{r.total}</b></td>
    </tr>);

    const total = rows.length > 1 ? <tr>
        <td><b>Total</b></td>
        <td><b>£{getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
            return a + c.total
        }, 0)}</b></td>
    </tr> : null;

    return (<Item>
        <p><b>Money:</b></p>
        <table>
            <tbody>
            {rows}
            {total}
            </tbody>
        </table>
    </Item>)

}


export function getFeesOwed(event, participants, booking) {

    switch (event.partialDates) {
        case 'whole':
            return owedWholeEvent(event, participants, booking);
        case 'presets':
            return owedPresetEvent(event, participants, booking);
        case 'free':
            return owedFreeEvent(event, participants, booking);
        default:
            return [{line: "Unsupported attendance/fee combo", total: 0}]
    }
}

const owedFreeEvent = (event, participants, booking) => {

    const wholeMask = 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1

    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);

    const filteredParticipants = cloneDeep(participants)
    .filter(p => p.name && p.age && (p.days > 0))
    .map(p => {
        if (!p.updatedAt) p.updatedAt = Moment().format("YYYY-MM-DD");
        return p;
    });

    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date)) return {
            type: p.days === wholeMask ? 'whole' : 'partial',
            days: popcount(p.days),
            date: c.date,
            fee:  p.days === wholeMask ? parseInt(c.whole) : parseInt(c.a) + (parseInt(c.b) * (popcount(p.days) - 1))
        };
        else return a;
    }, {}));

    const combinedCosts = rawCosts.reduce((a, c) => {

        a[c.date] = a[c.date] || {};
        a[c.date][c.days] = a[c.date][c.days] || {count: 0, fee: c.fee, type: c.type};
        a[c.date][c.days].count++;
        return a;
    }, {});
    //@ts-ignore
    const lines = reduce(combinedCosts, (a, c, i) => [...a, ...reduce(c, (a1, c1, i1) => [...a1, {
        //@ts-ignore
        line:  `${c1.count} ${c1.count > 1 ? 'people' : 'person'} booked for ${c1.type === 'whole' ? 'whole event' : `${i1 - 1} nights`} before ${Moment(i).format('MMMM Do YYYY')} at £${c1.fee}`,
        total: c1.count * c1.fee
    }], [])], []);


    return lines;

};

const owedWholeEvent = (event, participants, booking) => {

    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);

    const filteredParticipants = cloneDeep(participants)
    .filter(p => p.name && p.age)
    .map(p => {
        if (!p.updatedAt) p.updatedAt = Moment().format("YYYY-MM-DD");
        return p;
    });

    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date)) return {
            type:   isWoodchip(event, p) ? 'woodchip' : 'normal',
            date:   c.date,
            mask:   p.days,
            amount: c.amount * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
        };
        else return a;
    }, {}));

    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.type]) a[c.date][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.type] = {count: 1, amount: c.amount};
        }
        return a;
    }, {});

    return [...linesWithoutPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};

const owedPresetEvent = (event, participants, booking) => {

    const sortedBuckets = event.feeData.buckets.sort((a, b) => a.date < b.date ? 1 : a.date === b.date ? 0 : -1);

    const filteredParticipants = cloneDeep(participants)
    .filter(p => p.name && p.age)
    .map(p => {
        if (!p.updatedAt) p.updatedAt = Moment().format("YYYY-MM-DD");
        p.days = event.partialDatesData.find(d => d.mask === p.days);
        p.days = p.days ? p.days.name : event.partialDatesData[0].name;
        return p;
    });

    const rawCosts = filteredParticipants.map(p => sortedBuckets.reduce((a, c) => {
        if (new Date(p.updatedAt) < new Date(c.date)) return {
            type:   isWoodchip(event, p) ? 'woodchip' : 'normal',
            date:   c.date,
            mask:   p.days,
            amount: c.amount[p.days] * (isWoodchip(event, p) ? event.feeData.woodchips : 1)
        };
        else return a;
    }, {}));

    const combinedCosts = rawCosts.reduce((a, c) => {
        if (a[c.date] && a[c.date][c.mask] && a[c.date][c.mask][c.type]) a[c.date][c.mask][c.type].count++;
        else {
            a[c.date] = a[c.date] || {};
            a[c.date][c.mask] = a[c.date][c.mask] || {};
            a[c.date][c.mask][c.type] = {count: 1, amount: c.amount};
        }
        return a;
    }, {});

    return [...linesWithPartial(combinedCosts), ...cancelledFee(event, participants, booking)];
};
//@ts-ignore
const linesWithoutPartial = combined => reduce(combined, (a, c, i) => [...a, ...map(c, (l, t) => {
    if (t === 'normal') return {
        line:  `${l.count} ${l.count > 1 ? 'people' : 'person'} booked before ${Moment(i).format('MMMM Do YYYY')} at £${l.amount}`,
        total: l.count * l.amount
    };
    else return {
        line:  `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked before ${Moment(i).format('MMMM Do YYYY')} at £${l.amount}`,
        total: l.count * l.amount
    }
})], []);
//@ts-ignore
const linesWithPartial = (combined) => reduce(combined, (a, c, i) => [...a, ...reduce(c, (a1, c1, i1) => [...a1, ...map(c1, (l, t) => {
    if (t === 'normal') return {
        line:  `${l.count} ${l.count > 1 ? 'people' : 'person'} booked for ${i1} before ${Moment(i).format('MMMM Do YYYY')} at £${l.amount}`,
        total: l.count * l.amount
    };
    else return {
        line:  `${l.count} ${l.count > 1 ? 'woodchips' : 'woodchip'} booked for ${i1} before ${Moment(i).format('MMMM Do YYYY')} at £${l.amount}`,
        total: l.count * l.amount
    }
})], [])], []);

const cancelledFee = (event, participants, booking) => {

    if (!booking.maxParticipants || booking.maxParticipants <= participants.length || event.feeData.cancel === 0) return [];
    return [{
        line:  `${booking.maxParticipants - participants.length} cancelled bookings at £${event.feeData.cancel}`,
        total: (booking.maxParticipants - participants.length) * event.feeData.cancel
    }]
};

const isWoodchip = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 189216000000
};
