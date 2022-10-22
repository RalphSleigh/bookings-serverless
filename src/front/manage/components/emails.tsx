import * as React      from 'react'
import {Link}     from 'react-router-dom'
import ReactTable from 'react-table'
import Moment     from 'moment'
import 'moment/locale/en-gb'
import csv        from 'csv-file-creator'
import update     from "immutability-helper"
//import Switch from 'react-toggle'

//import bookings from '../bookings'

import {
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Table
}                 from 'reactstrap';
import ageFactory from "../../age";
import feeFactory from "../../../shared/fee/feeFactory";

Moment.locale('en-gb');

//import W from '../../../shared/woodcraft.js'

export default class Emails extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //rerendering the tables suck, lets not do it.
        //if (this.state !== nextState) return true;
        //return !this.props.Bookings.equals(nextProps.Bookings);
        return true;
    }

    render() {

        const event = this.props.Event.toJS();
        const bookings = this.props.bookings;
        const user = this.props.User.toJS();

        const emails = bookings.reduce((a, c) => {
         const extra = c.externalExtra.additionalContacts ? c.externalExtra.additionalContacts.filter(c => c.email.length > 0).map(c => c.email) : [];
         return [...a, c.userEmail, ...extra]
        }, []);

        const mailLink = `mailto:${user.email}?bcc=${emails.join(',')}`;

        const bookingRows = bookings.map(singleBookingRows);

        return (<React.Fragment>
            <Row>
                <Col>
                    <h3><a href={mailLink}>Click here to email visible contacts</a></h3>
                    <p>Or you can copy/paste this: <b>(INTO A BCC FIELD!)</b></p>
                    <textarea readOnly={true} style={{width:'100%'}} value={emails.join(', ')} />
                    <table className="table">
                        <thead>
                        <tr>
                        <th>District</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookingRows}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </React.Fragment>);
    }
}

const singleBookingRows = booking => {

    if(!booking.externalExtra.additionalContacts) return [<tr>
        <td>{booking.district}</td>
        <td><b>{booking.userName}</b></td>
        <td><b>{mailTo(booking.userEmail)}</b></td>
        <td><b>{booking.userContact}</b></td>
    </tr>];

    const extraRows = booking.externalExtra.additionalContacts.filter(c => c.name.length > 0 || c.email.length > 0 || c.phone.length > 0)
        .map(c =>
        <tr><td>{c.name}</td><td>{mailTo(c.email)}</td><td>{c.phone}</td></tr>);

    const mainRow = <tr>
        <td rowSpan={extraRows.length+1}>{booking.district}</td>
        <td><b>{booking.userName}</b></td>
        <td><b>{mailTo(booking.userEmail)}</b></td>
        <td><b>{booking.userContact}</b></td>
    </tr>;

    return [mainRow, ...extraRows]
};

const mailTo = email => <a href={`mailto:${email}`}>{email}</a>;