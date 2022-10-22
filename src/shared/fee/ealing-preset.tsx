import * as React from 'react'

import {
    Row,
    Col,
    FormGroup,
    Input,
    Table,
    InputGroup,
    Label
} from 'reactstrap';

import {
    Item,
    Span,
    A,
    Box
} from 'react-html-email'

import ReactMarkdown from 'react-markdown'

import update from "immutability-helper/index";
import Moment from "moment/moment";


//this implements Ealing's camp pricing policy.

export const name = "ealing-preset";
export const selection = "Ealing Pricing Policy with presets";

export class Config extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(field) {
        return e => {
            const value = field === 'amount' ? parseFloat(e.target.value) : e.target.value;
            this.props.update(update(this.props.fee, {[field]: {$set: value}}));
            e.preventDefault();
        }
    }

    render() {
        //Thou shalt not ever use JS numbers for currency...
        const amount = this.props.fee.amount || 35;
        const unaccompanied = amount === 35 ? 50 : amount * 1.5;
        const unaccompaniedDiscount = amount === 35 ? 25 : amount * 0.75;
        const discount = amount === 35 ? 20 : amount * 0.5;

        return (<>

            <Row>
                <Col>
                    <Table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Standard Rates</th>
                            <th>Discounted Rates</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
                            <td>£{Math.round(unaccompanied)}</td>
                            <td>£{Math.round(unaccompaniedDiscount)}</td>
                        </tr>
                        <tr>
                            <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                            <td>
                                <FormGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <Input type="number" className="form-control" placeholder="35" value={amount}
                                               onChange={this.update('amount')}/>
                                    </InputGroup>
                                </FormGroup>
                            </td>
                            <td>£{Math.round(discount)}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Other feeds</Label>
                        <Input type="textarea" name="other" value={this.props.fee.presets}
                               onChange={this.update('presets')}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Desc feeds</Label>
                        <Input type="textarea" name="other" value={this.props.fee.desc}
                               onChange={this.update('desc')}/>
                    </FormGroup>
                </Col>
            </Row>
        </>);
    }
}

/*
export class BookingForm extends React.Component<any, any>{

    render() {

        const accompanied = this.props.participants.find(p => Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

        const amount = this.props.feeData.amount;
        const unaccompanied = amount === 35 ? 50 : amount * 1.5;
        const unaccompaniedDiscount = amount === 35 ? 25 : amount * 0.75;
        const discount = amount === 35 ? 20 : amount * 0.5;

        const total = this.props.participants.length * Math.round(accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.participants.length * Math.round(accompanied ? discount : unaccompaniedDiscount);

        return (<div className="col-sm-12">
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    <th>Suggested Donation</th>
                    <th>Discounted Donation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Unaccompanied Elfins, Pioneers &amp; Venturers</td>
                    <td>£{Math.round(unaccompanied)}</td>
                    <td>£{Math.round(unaccompaniedDiscount)}</td>
                </tr>
                <tr>
                    <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                    <td>£{Math.round(amount)}</td>
                    <td>£{Math.round(discount)}</td>
                </tr>
                <tr>
                    <td><b>My
                        Booking</b> ({this.props.participants.length} {this.props.participants.length < 2 ? "person" : "people"}, {accompanied ? "Accompanied" : "Unaccompanied"})
                    </td>
                    <td><b>£{total}</b></td>
                    <td><b>£{totalDiscounted}</b></td>
                </tr>
                </tbody>
            </table>
            <p>In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have
                the means to donate more than the donations listed above then please do so as this will allow us to
                further subsidise poorer individuals and families. The <b>discounted donation</b> is offered to all
                families/individuals where there is no wage earner and/or the family/individual is on a low wage. This
                would include DFs and students as well as adults and families. Cost should never be a reason for people
                being unable to attend camp so please contact us if you need further discount. Please make cheques
                payable to Ealing District Woodcraft Folk.</p>
        </div>)
    }
}
*/
export class BookingForm extends React.Component<any, any>{

    render() {

        //this.props.participants
        //this.props.event.startDate

        //this.props.feeData.amount
        //
        const feesOwed = getFeesOwed(this.props.event, this.props.participants, this.props.booking);
        const tableLines = feesOwed.map((l, i) => <tr key={l.line + i}>
            <td>{l.line}</td>
            <td>£{l.total}</td>
        </tr>);

        return (<Row>
            <Col sm={12}>
                <ReactMarkdown children={this.props.event.feeData.desc}
                                /*
                               renderers={{
                                   table: props => {
                                       return <table className="table">{props.children}</table>
                                   }
                               }}
                               */
                />
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
        const tableLines = feesOwed.map((l, i) => <tr key={l.line + i}>
            <td>{l.line}</td>
            <td>£{l.total}</td>
        </tr>);

        return (<Row>
            <Col sm={12}>
                <h4>Money</h4>
                <ReactMarkdown  children={this.props.event.feeData.desc}/>
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

    const wholeMask = 2 ** (Moment(event.endDate).diff(Moment(event.startDate), 'days') + 1) - 1;

    const normalParticipants = participants.filter(p => p.days === wholeMask);

    const accompanied = normalParticipants.find(p => Moment(event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

    const amount = event.feeData.amount;
    const unaccompanied = amount === 35 ? 50 : amount * 1.5;
    const unaccompaniedDiscount = amount === 35 ? 25 : amount * 0.75;
    const discount = amount === 35 ? 20 : amount * 0.5;

    const total = normalParticipants.length * Math.round(accompanied ? amount : unaccompanied);
    const totalDiscounted = normalParticipants.length * Math.round(accompanied ? discount : unaccompaniedDiscount);

    const line = `${normalParticipants.length} ${normalParticipants.length < 2 ? "person" : "people"}, ${accompanied ? "Accompanied" : "Unaccompanied"} (Discount: £${totalDiscounted})`;

    const otherParticipants = participants.filter(p => p.days !== wholeMask);

    const otherFees = parsePartFees(event);

    const otherLines = otherParticipants.map(f => {
        const chosenAttendance = event.partialDatesData.find(d => d.mask === f.days);
        return {line: `${chosenAttendance.name}`, total: otherFees[f.days]}

    });

    const results = [];
    //@ts-ignore
    if (total > 0) results.push({line: line, total: total});

    return [...results, ...otherLines];
}

const parsePartFees = event => {
    if (!event.feeData.presets) return {};
    if (event.feeData.presets.length < 2) return {};

    const lines = event.feeData.presets.split("\n");
    return lines.reduce((a, l) => {
        const parts = l.split(':');
        parts[1].split(',').forEach(p => {
            a[parseInt(p)] = parseInt(parts[0]);
        });
        return a;
    }, {})
};