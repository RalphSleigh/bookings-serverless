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

    return renderEmail(
        <Email title={`${values.event.customQuestions.emailSubjectTag} You have been assigned a role for ${values.event.name}`}>
            <Item>
                <p>Hi {values.emailUser.userName},</p>
                <p>You have been granted access to bookings data for {values.event.name}, to view it please log in and choose the "manage" link in bottom corner of the event card</p>
                <p><A href={config.BASE_URL}>{config.BASE_URL}</A></p>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `${values.event.customQuestions.emailSubjectTag} You have been assigned a role for ${values.event.name}`
}