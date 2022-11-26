import * as React      from 'react'
import Currency   from 'react-currency-formatter';
import Moment     from 'moment'

//import bookings from '../bookings'
//import { manageEventCheck } from '../permission.ts'
import feeFactory from '../../../shared/fee/feeFactory'
import update     from 'immutability-helper';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

import {
    Row,
    Col,
    Label,
    Button,
    Input,
    InputGroup,
    FormGroup,
    Table
} from 'reactstrap';

import paymentReference from "../../../shared/paymentReference";


const RedCurrency = props => props.quantity < 0 ? <span style={{color: 'red'}}><Currency {...props} /></span> :
    <Currency {...props} />

export default class Money extends React.Component<any, any> {
    private getFeesOwed: any;
    //@ts-ignore
    private totalOwed: number;
    //@ts-ignore
    private totalPaid: number;

    constructor(props) {
        super(props);

        this.state = {expanded: 0, amount: 0, note: ''};
        this.expand = this.expand.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.addPayment = this.addPayment.bind(this);
        this.deletePayement = this.deletePayement.bind(this);
        this.syncMax = this.syncMax.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true
    }

    expand(id) {
        return e => {
            this.setState(update(this.state, {expanded: {$set: id}}));
        }
    }

    updateAmount(e) {
        this.setState(update(this.state, {amount: {$set: e.target.value}}));
    }

    updateNote(e) {
        this.setState(update(this.state, {note: {$set: e.target.value}}));
    }

    deletePayement(id) {
        return e => {
            //@ts-ignore
            if (confirm("Are you sure you want to delete this?")) this.props.deletePayment({
                id: id
            });
            e.preventDefault();
        }
    }

    addPayment(type) {
        return e => {

            this.props.addPayment({
                type: type,
                amount: this.state.amount,
                note: this.state.note,
                bookingId: this.state.expanded
            });

            this.setState(update(this.state, {note: {$set: ''}, amount: {$set: 0}}));

            e.preventDefault();
        }
    }

    syncMax(e) {
        this.props.syncMax(this.state.expanded)
        e.stopPropagation();
        e.preventDefault();
    }

    closedRow(b, event) {

        let org = {name: ''};
        if (event.bigCampMode && event.organisationsEnabled) org = event.organisations.find(o => o.id === b.organisationId);

        b.payments = b.payments || [];

        const name = event.bigCampMode ? b.district + (org.name ? ' - ' + org.name : '') : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b, false).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);

        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);

        this.totalOwed += owed;
        this.totalPaid += paid;

        const classNames = (paid - owed >= 0 ? "table-success" : '') + (this.state.expanded !== 0 && this.state.expanded !== b.id ? ' fadeOut' : '');

        const payRef = paymentReference(b.id);

        return <tr key={b.id} onClick={this.expand(b.id)} className={classNames}>
            <td>+</td>
            <td>{payRef}</td>
            <td>{name}</td>
            <td><Currency
                quantity={owed}
                currency="GBP"
            /></td>
            <td><Currency
                quantity={paid}
                currency="GBP"
            /></td>
            <td><Currency
                quantity={owed - paid}
                currency="GBP"
            /></td>
        </tr>
    }

    openRow(b, event) {

        b.payments = b.payments || [];

        const payRef = paymentReference(b.id);

        let org = {name: ''};
        if (event.bigCampMode && event.organisationsEnabled) org = event.organisations.find(o => o.id === b.organisationId);

        const name = event.bigCampMode ? `${b.district} -  ${org.name} (${payRef})` : b.userName;
        let owed = this.getFeesOwed(event, b.participants, b, false).reduce((a, c) => parseFloat(c.total) + a, 0);
        const paid = b.payments.filter(p => p.type === 'payment').reduce((a, c) => a + parseFloat(c.amount), 0);

        owed = b.payments.filter(p => p.type === 'adjustment').reduce((a, c) => a + parseFloat(c.amount), owed);

        this.totalOwed += owed;
        this.totalPaid += paid;

        const adjustmentRow = b.payments.filter(p => p.type === 'adjustment').map((r, i) => <tr
            key={`adjust` + b.id + r.id}><td></td>
            <td><FontAwesomeIcon style={{cursor: 'pointer'}} onClick={this.deletePayement(r.id)} icon={faTimes}/></td>
            <td>{Moment(r.updatedAt).format('L') + ' ' + r.note}</td>
            <td><RedCurrency
                quantity={r.amount}
                currency="GBP"
            /></td>
            <td></td>
            <td></td>
        </tr>);

        const paymentRows = b.payments.filter(p => p.type === 'payment').map((r, i) => <tr
            key={`payment` + b.id + r.id}><td></td>
            <td><FontAwesomeIcon style={{cursor: 'pointer'}} onClick={this.deletePayement(r.id)} icon={faTimes}/></td>
            <td>{Moment(r.updatedAt).format('L') + ' ' + r.note}</td>
            <td></td>
            <td><RedCurrency
                quantity={r.amount}
                currency="GBP"
            /></td>
            <td></td>
        </tr>);

        const feeRows = this.getFeesOwed(event, b.participants, b, false).map((r, i) => <tr key={`owed` + b.id + i}>
            <td></td><td></td>
            <td>{r.line}</td>
            <td><Currency
                quantity={r.total}
                currency="GBP"
            /></td>
            <td></td>
            <td></td>
        </tr>);

        return <React.Fragment key={b.id}>
            <tr onClick={this.expand(0)} style={{borderTop: 'solid black 3px'}}>
                <td></td><td></td>
                <td colSpan={3}><b>{name}</b></td>
                <td><Button color="success" onClick={this.syncMax}>Remove Cancellation Fees</Button></td>
            </tr>
            <tr>
                <td></td><td></td>
                <td style={{borderBottom: 'solid #888888 2px'}} colSpan={4}><b>Fees</b></td>
            </tr>
            {feeRows}
            {adjustmentRow}
            <tr>
                <td></td><td></td>
                <td style={{borderBottom: 'solid #888888 2px'}} colSpan={4}><b>Payments</b></td>
            </tr>
            {paymentRows}
            <tr style={{borderBottom: 'solid #888888 2px', borderTop: 'solid #888888 2px'}}>
                <td></td><td></td>
                <td><b>Total:</b></td>
                <td><b><Currency
                    quantity={owed}
                    currency="GBP"
                /></b></td>
                <td><b><Currency
                    quantity={paid}
                    currency="GBP"
                /></b></td>
                <td><b><Currency
                    quantity={owed - paid}
                    currency="GBP"
                /></b></td>
            </tr>
            <tr style={{borderBottom: 'solid black 3px'}}>
                <td></td><td></td>
                <td colSpan={4}>
                    <FormGroup row>
                        <Label sm={3}>Amount</Label>
                        <Col sm={3}>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">£</span>
                                </div>
                                <Input type="number" onChange={this.updateAmount} value={this.state.amount}/>
                            </InputGroup>
                        </Col>
                        <Col sm={6}>
                            <Button color="success" disabled={this.state.amount <= 0}
                                    onClick={this.addPayment('payment')}>Add Payment</Button>{' '}
                            <Button color="warning"
                                    onClick={this.addPayment('adjustment')}>Add Price Adjustment</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Note</Label>
                        <Col sm={9}>
                            <Input onChange={this.updateNote} value={this.state.note}/>
                        </Col>
                    </FormGroup>
                </td>
            </tr>
        </React.Fragment>
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const participants = this.props.bookings.reduce((r, b) => [...r, ...b.participants], []);

        this.getFeesOwed = feeFactory(event).getFeesOwed;

        this.totalOwed = 0;
        this.totalPaid = 0;

        const bookingRows = bookings
            .sort(propSort(event.bigCampMode ? 'district' : 'userName'))
            .map(b => {
            return b.id === this.state.expanded ? this.openRow(b, event) : this.closedRow(b, event);
        });

        return (<Row>
            <Col>
                <h3>Money</h3>
                <Table striped size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Reference</th>
                        <th>Booking</th>
                        <th>Fees</th>
                        <th>Payments</th>
                        <th>Outstanding</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingRows}
                    <tr>
                        <td></td>
                        <td>
                            <b>Total</b>
                        </td>
                        <td></td>
                        <td>
                            <b><Currency
                                quantity={this.totalOwed}
                                currency="GBP"
                            /></b>
                        </td>
                        <td><b>
                            <Currency
                                quantity={this.totalPaid}
                                currency="GBP"
                            /></b>
                        </td>
                        <td><b>
                            <Currency
                                quantity={this.totalOwed - this.totalPaid}
                                currency="GBP"
                            /></b>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>);
    }
}

const propSort = prop => (a,b) => {
    const x = a[prop].toLowerCase();
    const y = b[prop].toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
};

const nameSort = (a, b) => {
    var splitA = a.name.split(" ");
    var splitB = b.name.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
};

