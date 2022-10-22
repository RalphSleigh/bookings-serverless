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

export const name = "manager booking deleted"


export function html(values) {

    const participantsList = values.participants.map(p => <li key={p.id}>{p.name}</li>);

    return renderEmail(
        <Email title={`${values.event.customQuestions.emailSubjectTag} Booking DELETED`}>
            <Item>
                <p>Hi {values.emailUser.userName},</p>
                <p>{values.userName} has deleted their booking {values.district ? `for ${values.district}` : ''} to {values.event.name}. They had previously
                    booked {values.participants.length} {values.participants.length === 1 ? 'person' : 'people'}:</p>
                <p>
                    <ul>{participantsList}</ul>
                </p>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `${values.event.customQuestions.emailSubjectTag} Booking DELETED`;
}