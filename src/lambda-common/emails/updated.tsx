import {
    Email,
    Box,
    Item,
    Span,
    A,
    renderEmail
}                    from 'react-html-email'
import React         from 'react'
import ReactMarkdown from 'react-markdown'
import feeFactory    from '../../shared/fee/feeFactory'
import paymentReference from "../../shared/paymentReference";

export const name = "booking updated"

export function html(values) {

    const participantsList = values.participants.map(p => <li key={p.id}>{p.name}</li>);

    const fees = feeFactory(values.event).emailHTML(values.event, values)

    let button = '';

    const payRef = paymentReference(values.id);

    switch(values.user.remoteId.substr(0,4)) {
        case 'goog':
            button = 'Google';
            break;
        case 'face':
            button = 'Facebook';
            break;
        case 'micr':
            button = 'Microsoft';
            break;
        case 'yaho':
            button = 'Yahoo';
            break;
    }

    return renderEmail(
        <Email title={`Booking Confirmation for ${values.event.name}`}>
            <Item>
                <p> Hi {values.userName},</p>
                <p>You have updated your booking for {values.event.name}, You have
                    booked {values.participants.length} {values.participants.length === 1 ? 'person' : 'people'}:</p>
                <p>
                    <ul>{participantsList}</ul>
                </p>
                <p>You can come back and edit your booking <A href={values.editURL}>here</A>.</p>
            </Item>
            {fees}
            <Item>
            <ReactMarkdown children={values.event.paymentInfo}/>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
            <Item>
                <small>When logging in again make sure to log in as {values.user.email} using the {button} button</small>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `Booking Update for ${values.event.name}`
}