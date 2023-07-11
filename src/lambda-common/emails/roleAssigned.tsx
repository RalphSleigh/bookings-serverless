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

export const name = "role assigned"

export function html(values, config) {

    let button
    switch(values.emailUser.remoteId.substr(0,4)) {
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
        <Email title={`${values.event.customQuestions.emailSubjectTag} You have been granted access to data for ${values.event.name}`}>
            <Item>
                <p>Hi {values.emailUser.userName},</p>
                <p>You have been granted access to bookings data for {values.event.name}, to view it please log in and choose the "manage" link in bottom corner of the event card.</p>
                <p><A href={config.BASE_URL}>{config.BASE_URL}</A></p>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
            <Item>
                <small>When logging in again make sure to log in as {values.emailUser.email} using the {button} button.</small>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `${values.event.customQuestions.emailSubjectTag} You have been granted access to data for ${values.event.name}`
}