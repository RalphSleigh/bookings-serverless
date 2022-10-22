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

export const name = "manager application recieved"

export function html(values) {

    return renderEmail(
        <Email title={`${values.event.customQuestions.emailSubjectTag} Application received for ${values.event.name}`}>
            <Item>
                <p>Hi {values.emailUser.userName},</p>
                <p>{values.user.userName} has applied to book for {values.event.name}.</p>
                <p>You should log on to to check their application, and badger Ralph to make this e-mail more useful
                    with info and links you can just click to approve.</p>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `${values.event.customQuestions.emailSubjectTag} Application received for ${values.event.name}`
}