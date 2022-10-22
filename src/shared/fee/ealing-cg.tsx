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

import cloneDeep from "lodash/cloneDeep";
import Moment from "moment";
import Currency from "react-currency-formatter";


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

        this.updateStandardFeeHalf = this.updateStandardFeeHalf.bind(this);
        this.updateDiscountFeeHalf = this.updateDiscountFeeHalf.bind(this);
        this.updateUnaccompaniedFeeHalf = this.updateUnaccompaniedFeeHalf.bind(this);
        this.updateUnaccompaniedDiscountFeeHalf = this.updateUnaccompaniedDiscountFeeHalf.bind(this);
    }

    updateStandardFee(e) {
        this.props.update(update(this.props.fee, {amount: {$set: parseFloat(e.target.value)}}));
    }

    updateDiscountFee(e) {
        this.props.update(update(this.props.fee, {amountDiscount: {$set: parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedFee(e) {
        this.props.update(update(this.props.fee, {amountUnaccompanied: {$set: parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedDiscountFee(e) {
        this.props.update(update(this.props.fee, {amountUnaccompaniedDiscount: {$set: parseFloat(e.target.value)}}));
    }

    updateStandardFeeHalf(e) {
        this.props.update(update(this.props.fee, {amountHalf: {$set: parseFloat(e.target.value)}}));
    }

    updateDiscountFeeHalf(e) {
        this.props.update(update(this.props.fee, {amountDiscountHalf: {$set: parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedFeeHalf(e) {
        this.props.update(update(this.props.fee, {amountUnaccompaniedHalf: {$set: parseFloat(e.target.value)}}));
    }

    updateUnaccompaniedDiscountFeeHalf(e) {
        this.props.update(update(this.props.fee, {amountUnaccompaniedDiscountHalf: {$set: parseFloat(e.target.value)}}));
    }

    render() {
        //Thou shalt not ever use JS numbers for currency...
        const amount = this.props.fee.amount || 35;
        const unaccompanied = this.props.fee.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.fee.amountUnaccompaniedDiscount || 25;
        const discount = this.props.fee.amountDiscount || 17;

        const amountHalf = this.props.fee.amountHalf || 35;
        const unaccompaniedHalf = this.props.fee.amountUnaccompaniedHalf || 50;
        const unaccompaniedDiscountHalf = this.props.fee.amountUnaccompaniedDiscountHalf || 25;
        const discountHalf = this.props.fee.amountDiscountHalf || 17;

        return (
            <>
                <Row>
                    <Col>
                        <p>Whole camp</p>
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
                                        <Input type="number" className="form-control" placeholder="50"
                                               value={unaccompanied}
                                               onChange={this.updateUnaccompaniedFee}/>
                                    </InputGroup>
                                </FormGroup></td>
                                <td><FormGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <Input type="number" className="form-control" placeholder="25"
                                               value={unaccompaniedDiscount}
                                               onChange={this.updateUnaccompaniedDiscountFee}/>
                                    </InputGroup>
                                </FormGroup></td>
                            </tr>
                            <tr>
                                <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and
                                    Adults
                                </td>
                                <td>
                                    <FormGroup>
                                        <InputGroup>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">£</span>
                                            </div>
                                            <Input type="number" className="form-control" placeholder="35"
                                                   value={amount}
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
                </Row>
                <Row>
                    <Col>
                        <p>Half camp</p>
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
                                        <Input type="number" className="form-control" placeholder="50"
                                               value={unaccompaniedHalf}
                                               onChange={this.updateUnaccompaniedFeeHalf}/>
                                    </InputGroup>
                                </FormGroup></td>
                                <td><FormGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <Input type="number" className="form-control" placeholder="25"
                                               value={unaccompaniedDiscountHalf}
                                               onChange={this.updateUnaccompaniedDiscountFeeHalf}/>
                                    </InputGroup>
                                </FormGroup></td>
                            </tr>
                            <tr>
                                <td>Elfins, Pioneers &amp; Venturers accompanied by a responsible adult, DFs and
                                    Adults
                                </td>
                                <td>
                                    <FormGroup>
                                        <InputGroup>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">£</span>
                                            </div>
                                            <Input type="number" className="form-control" placeholder="35"
                                                   value={amountHalf}
                                                   onChange={this.updateStandardFeeHalf}/>
                                        </InputGroup>
                                    </FormGroup>
                                </td>
                                <td><FormGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">£</span>
                                        </div>
                                        <Input type="number" className="form-control" placeholder="17" value={discountHalf}
                                               onChange={this.updateDiscountFeeHalf}/>
                                    </InputGroup>
                                </FormGroup></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>);
    }
}

export class BookingForm extends React.Component<any, any>{

    render() {

        const accompanied = this.props.participants.find(p => Moment(this.props.event.startDate).diff(Moment(p.age), 'years') > 15) === undefined ? false : true;

        const amount = this.props.feeData.amount || 35;
        const unaccompanied = this.props.feeData.amountUnaccompanied || 50;
        const unaccompaniedDiscount = this.props.feeData.amountUnaccompaniedDiscount || 25;
        const discount = this.props.feeData.amountDiscount || 17;

        const amountHalf = this.props.feeData.amountHalf || 35;
        const unaccompaniedHalf = this.props.feeData.amountUnaccompaniedHalf || 50;
        const unaccompaniedDiscountHalf = this.props.feeData.amountUnaccompaniedDiscountHalf || 25;
        const discountHalf = this.props.feeData.amountDiscountHalf || 17;

        const feesOwed = getFeesOwed(this.props.event, this.props.booking.participants, this.props.booking);
        const tableLines = feesOwed.map(l => <tr key={l.line}>
            <td>{l.line}</td>
            <td><Currency
                quantity={l.total}
                currency="GBP"
            /></td>
        </tr>);

        return (
            <Col>
                <Table>
                    <thead></thead>
                    <tbody>{tableLines}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b><Currency
                            quantity={feesOwed.reduce((a, c) => {
                                return a + c.total
                            }, 0)}
                            currency="GBP"
                        /> (discount: <Currency
                            quantity={feesOwed.reduce((a, c) => {
                                return a + c.discountTotal
                            }, 0)}
                            currency="GBP"
                        />)</b></td>
                    </tr>
                    </tbody>
                </Table>
                <p>The <b>discounted donation</b> is offered to all
                    families/individuals where there is no wage earner and/or the family/individual is on a low wage. This
                    would include DFs and students as well as adults and families. Cost should never be a reason for people
                    being unable to attend camp so please contact us if you need further discount.</p>
            </Col>)

    /*
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
     */
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
            <td><Currency
                quantity={l.total}
                currency="GBP"
            /></td>
        </tr>);

        return (<Row>
            <Col>
                <Table>
                    <thead></thead>
                    <tbody>{tableLines}
                    <tr>
                        <td><b>Total:</b></td>
                        <td><b><Currency
                            quantity={feesOwed.reduce((a, c) => {
                                return a + c.total
                            }, 0)}
                            currency="GBP"
                        /> (discount: <Currency
                            quantity={feesOwed.reduce((a, c) => {
                                return a + c.discountTotal
                            }, 0)}
                            currency="GBP"
                        />)</b></td>
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
        }, 0)} (discount: £{getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
            return a + c.discountTotal
        }, 0)})</b></td>
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
    const accompanied = participants.find(p => Moment(event.startDate).diff(Moment(p.age), 'years') > 15) !== undefined;

    const amount = event.feeData.amount || 35;
    const unaccompanied = event.feeData.amountUnaccompanied || 50;
    const unaccompaniedDiscount = event.feeData.amountUnaccompaniedDiscount || 25;
    const discount = event.feeData.amountDiscount || 17;

    const amountHalf = event.feeData.amountHalf || 35;
    const unaccompaniedHalf = event.feeData.amountUnaccompaniedHalf || 50;
    const unaccompaniedDiscountHalf = event.feeData.amountUnaccompaniedDiscountHalf || 25;
    const discountHalf = event.feeData.amountDiscountHalf || 17;

    const filteredParticipants = cloneDeep(participants)
        .filter(p => p.name && p.age)
        .filter(p => !isUnderFive(event, p))
        .map(p => {
            if (!p.updatedAt) p.updatedAt = Moment().format("YYYY-MM-DD");
            p.days = event.partialDatesData.find(d => d.mask === p.days);
            p.days = p.days ? p.days.name : event.partialDatesData[0].name;
            return p;
        });

    const lines = event.partialDatesData.map(d => {
        const people = filteredParticipants.filter(p => p.days === d.name).length
        const isWhole = d.mask === event.partialDatesData[0].mask
        if(isWhole) {
            if(accompanied) {
                const total = people * amount
                const discountTotal = people * discount
                const line = `${people} ${people < 2 ? "person" : "people"}, accompanied for the whole camp (Discount: £${discountTotal})`
                return {line: line, total: total, discountTotal: discountTotal}
            }  else {
                const total = people * unaccompanied
                const discountTotal = people * unaccompaniedDiscount
                const line = `${people} ${people < 2 ? "person" : "people"}, unaccompanied for the whole camp (Discount: £${discountTotal})`
                return {line: line, total: total, discountTotal: discountTotal}
            }
        } else {
            if(accompanied) {
                const total = people * amountHalf
                const discountTotal = people * discountHalf
                const line = `${people} ${people < 2 ? "person" : "people"}, accompanied for half the camp (Discount: £${discountTotal})`
                return {line: line, total: total, discountTotal: discountTotal}
            }  else {
                const total = people * unaccompaniedHalf
                const discountTotal = people * unaccompaniedDiscountHalf
                const line = `${people} ${people < 2 ? "person" : "people"}, unaccompanied for half the camp (Discount: £${discountTotal})`
                return {line: line, total: total, discountTotal: discountTotal}
            }
        }
    }).filter(l => l.total > 0)

    return [...lines, ...underFives(event, participants)]

    /*
    const total = participants.length * (accompanied ? amount : unaccompanied);
    const totalDiscounted = participants.length * (accompanied ? discount : unaccompaniedDiscount);

    const line = `${participants.length} ${participants.length < 2 ? "person" : "people"}, ${accompanied ? "Accompanied" : "Unaccompanied"} (Discount: £${totalDiscounted})`;

    return [{line: line, total: total.toFixed(2)}];

     */
}

const underFives = (event, participants) => {
    const filteredParticipants = cloneDeep(participants)
        .filter(p => p.name && p.age)
        .filter(p => isUnderFive(event, p));
    if (filteredParticipants.length > 0) return [{
        line:  `${filteredParticipants.length} ${filteredParticipants.length > 1 ? 'people' : 'person'} under five for free`,
        total: 0
    }];
    else return [];
};

const isUnderFive = (e, p) => {
    return Date.parse(e.startDate) - Date.parse(p.age) < 157784630000
};
