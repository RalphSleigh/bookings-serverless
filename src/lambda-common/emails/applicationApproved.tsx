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

export const name = "application approved"

export function html(values, config) {

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
        <Email title={`Application Approved for ${values.event.name}`}>
            <Item>
                <p> Hi {values.user.userName},</p>
                <p>You have been approved to book into {values.event.name} and can do so at any time here:</p>
                <p><A href={config.BASE_URL}>{config.BASE_URL}</A></p>
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
    return `Application Approved for ${values.event.name}`
}