import * as React from 'react'
import { Item } from "react-html-email";
//this represents a free event whereby no fees are expected/managed by the system.

export const name = "free";
export const selection = "Free Event (don't manage fees)";

export const Config = () => <p>Nothing to decide3</p>;

export const BookingForm = (props) => <p>This is free event, no money involved</p>;

export const ThanksRow = (props) => null

export function emailHTML(event, booking) {
    return (<Item>
    </Item>)
}