import * as React from 'react'

import {
    Row,
    Col,
    FormGroup,
    Input,
    Table,
    InputGroup
} from 'reactstrap';

import {
    Item,
    Span,
    A,
    Box
} from 'react-html-email'

import update from 'immutability-helper';

import Moment from 'moment';


//this implements Ealing's camp pricing policy.

export const name = "ealing";
export const selection = "Ealing Pricing Policy";

export class Config extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.updateStandardFee = this.updateStandardFee.bind(this);
        this.updateDiscountFee = this.updateDiscountFee.bind(this);
        this.updateUnaccompaniedFee = this.updateUnaccompaniedFee.bind(this);
        this.updateUnaccompaniedDiscountFee = this.updateUnaccompaniedDiscountFee.bind(this);
    }

    updateStandardFee(e) {
        this.props.update(update(this.props.fee, {amount:{$set:  parseFloat(e.target.value)}}));
    }

    updateDiscountFee(e) {
        this.props.update(update(this.props.fee, {amountDiscount:{$set:  parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedFee(e) {
        this.props.update(update(this.props.fee, {amountUnaccompanied:{$set:  parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedDiscountFee(e) {
        this.props.update(update(this.props.fee, {amountUnaccompaniedDiscount:{$set:  parseFloat(e.target.value)}}));
    }

    render() {
        //Thou shalt not ever use JS numbers for currency...
        const amount = this.props.fee.amount || 35;
        const unaccompanied = this.props.fee.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.fee.amountUnaccompaniedDiscount || 25;
        const discount = this.props.fee.amountDiscount || 17;

        return (<Row>
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
                        <td><FormGroup>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="50" value={unaccompanied}
                                       onChange={this.updateUnaccompaniedFee}/>
                            </InputGroup>
                        </FormGroup></td>
                        <td><FormGroup>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="25" value={unaccompaniedDiscount}
                                       onChange={this.updateUnaccompaniedDiscountFee}/>
                            </InputGroup>
                        </FormGroup></td>
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
                                           onChange={this.updateStandardFee}/>
                                </InputGroup>
                            </FormGroup>
                        </td>
                        <td><FormGroup>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" className="form-control" placeholder="17" value={discount}
                                       onChange={this.updateDiscountFee}/>
                            </InputGroup>
                        </FormGroup></td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>);
    }
}

export class BookingForm extends React.Component<any, any>{

    render() {

        const accompanied = this.props.participants.find(p => Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

        const amount = this.props.feeData.amount || 35;
        const unaccompanied = this.props.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.feeData.amountDiscount || 17;

        const total = this.props.participants.length * (accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.participants.length * (accompanied ? discount : unaccompaniedDiscount);

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
                    <td>£{unaccompanied.toFixed(2)}</td>
                    <td>£{unaccompaniedDiscount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                    <td>£{amount.toFixed(2)}</td>
                    <td>£{discount.toFixed(2)}</td>
                </tr>
                <tr>
                    <td><b>My
                        Booking</b> ({this.props.participants.length} {this.props.participants.length < 2 ? "person" : "people"}, {accompanied ? "Accompanied" : "Unaccompanied"})
                    </td>
                    <td><b>£{total.toFixed(2)}</b></td>
                    <td><b>£{totalDiscounted.toFixed(2)}</b></td>
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

export class ThanksRow extends React.Component<any, any>{

    render() {

        const accompanied = this.props.booking.participants.find(p => Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

        const amount = this.props.event.feeData.amount || 35;
        const unaccompanied = this.props.event.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.event.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.event.feeData.amountDiscount || 17;

        const total = this.props.booking.participants.length * (accompanied ? amount : unaccompanied);
        const totalDiscounted = this.props.booking.participants.length * (accompanied ? discount : unaccompaniedDiscount);

        return (<Row>
            <Col>
                <Table>
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
                        <td>£{unaccompanied.toFixed(2)}</td>
                        <td>£{unaccompaniedDiscount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and Adults</td>
                        <td>£{amount.toFixed(2)}</td>
                        <td>£{discount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><b>My
                            Booking</b> ({this.props.booking.participants.length} {this.props.booking.participants.length < 2 ? "person" : "people"}, {accompanied ? "Accompanied" : "Unaccompanied"})
                        </td>
                        <td><b>£{total.toFixed(2)}</b></td>
                        <td><b>£{totalDiscounted.toFixed(2)}</b></td>
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

    return (<Item>
        <p><b>Money:</b></p>
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    </Item>)

}

export function getFeesOwed(event, participants, booking) {
    const accompanied = participants.find(p => Moment(event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

    const amount = event.feeData.amount || 35;
    const unaccompanied = event.feeData.amountUnaccompanied || 50;
    const unaccompaniedDiscount = event.feeData.amountUnaccompaniedDiscount || 25;
    const discount = event.feeData.amountDiscount || 17;

    const total = participants.length * (accompanied ? amount : unaccompanied);
    const totalDiscounted = participants.length * (accompanied ? discount : unaccompaniedDiscount);

    const line = `${participants.length} ${participants.length < 2 ? "person" : "people"}, ${accompanied ? "Accompanied" : "Unaccompanied"} (Discount: £${totalDiscounted})`;

    return [{line: line, total: total.toFixed(2)}];
}