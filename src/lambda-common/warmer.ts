import { Lambda } from "aws-sdk"
import am_in_lambda from "./am_in_lambda"
import { log } from "./logging"

export function is_warmer_event(event) {
    return event.source === "warmer"
}

export function warm(functions: string[]) {

    if (!am_in_lambda()) return

    log(`warming functions`)

    const lambda = new Lambda({})

    const promises = functions.map(f => new Promise((resolve, reject) =>{

        console.log(`warming ${f}`)
        const request = lambda.invoke({
            FunctionName: f,
            InvocationType: "Event",
            Payload: '{"source":"warmer"}'
        }, (err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    }))

    return Promise.all(promises)
}

export function warm_frontend() {
    return warm([
        "function_auth_google_redirect",
        "function_auth_facebook_redirect",
        "function_auth_yahoo_redirect",
        "function_auth_microsoft_redirect",
        "function_events",
        "function_env",
        "function_bookings_user",
        "function_bookings_create",
        "function_bookings_edit",
        "function_bookings_get",
        "function_apply",
        "function_user_logout",
        "function_role_create"
    ])
}