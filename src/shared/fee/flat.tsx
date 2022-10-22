import * as React from 'react'
//This event has a flat per participant cost.

import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    CardImgOverlay,
    Table
} from 'reactstrap';
import Currency from "react-currency-formatter";
import {Item} from "react-html-email";
import paymentLines from "./payment-lines";

export const name = "flat";
export const selection = "Flat fee per participant";

export class Config extends React.Component<any, any>{

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(e) {
        const fee = {amount: e.target.value}
        this.props.update(fee);
    }

    render() {

        const amount = this.props.fee.amount || "";

        return (<FormGroup row>
            <Label sm={3}>Fee per participant:</Label>
            <Col sm={9}>
                <InputGroup>
                    <div className="input-group-prepend">
                        <span className="input-group-text">£</span>
                    </div>
                    <Input type="number" className="form-control" placeholder="35" value={amount}
                           onChange={this.update}/>
                </InputGroup>
            </Col>
        </FormGroup>);
    }
}

export class BookingForm extends React.Component<any, any>{

    render() {

        const participants = this.props.participants ? this.props.participants.length : 0
        const total = this.props.feeData.amount * participants

        return (<Row>
            <Col>
                <p>This event costs £{this.props.feeData.amount} per person.</p>
                <p>You have booked <b>{participants}</b> {`${participants > 1 ? 'people' : 'person'}`} for a total of <b>£{total}</b></p>
            </Col>
        </Row>);

    }
}

export class ThanksRow extends React.Component<any, any>{

    render() {

        const participants = this.props.booking.participants ? this.props.booking.participants.length : 0
        const total = this.props.event.feeData.amount * participants


        return (<Row>
            <Col>
                <p>This event costs £{this.props.event.feeData.amount} per person.</p>
                <p>You have booked <b>{participants}</b> {`${participants > 1 ? 'people' : 'person'}`} for a total of <b>£{total}</b></p>
            </Col>
        </Row>);

    }
}

export function emailHTML(event, booking) {

    const rows = getFeesOwed(event, booking.participants, booking).map((r, i) => <tr key={i}>
        <td>{r.line}: </td>
        <td><b><Currency
            quantity={r.total}
            currency="GBP"
        /></b></td>
    </tr>);

    const total = rows.length > 1 ? <tr>
        <td><b>Total</b></td>
        <td><b><Currency
            quantity={getFeesOwed(event, booking.participants, booking).reduce((a, c) => {
                return a + c.total
            }, 0)}
            currency="GBP"
        /></b></td>
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

export function getFeesOwed(event, participants, booking, payments=true) {
    const people = participants.length
    const result = {
        line:  `${people} ${people > 1 ? 'people' : 'person'} at £${event.feeData.amount}`,
            total: event.feeData.amount * people
    }

    return [result, ...(payments ? paymentLines(event, participants, booking) : [])];
}
