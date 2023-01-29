import React, { useEffect, useState } from "react"
import {
    Button
} from 'reactstrap'

export const DebounceButton = props => {
    const [disabled, setDisabled] = useState(false)
    useEffect(() => {
        if(disabled) {
            const timer = setTimeout(() => {
                setDisabled(false)
            }, 5000)

            return () => clearTimeout(timer)
        }
    })

    const onClick = e => {
        props.onClick(e)
        setDisabled(true)
    }

    return <Button className = {props.className} color={props.color} disabled={!!(props.disabled || disabled)} onClick={onClick}>{props.children}</Button>
}