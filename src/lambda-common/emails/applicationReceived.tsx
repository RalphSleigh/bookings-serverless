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

export const name = "application recieved"

export function html(values) {

    let button = '';

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
        <Email title={`Application Received for ${values.name}`}>
            <Item>
                <p> Hi {values.user.userName},</p>
                <p>Thanks for applying to book for {values.name}. One of our team will check your application as soon as
                    possible and you will recieve another e-mail as soon as you are approved to book in.</p>
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
    return `Application Received for ${values.name}`
}