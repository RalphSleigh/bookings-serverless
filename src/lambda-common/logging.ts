import { CloudWatchLogs } from 'aws-sdk'
import am_in_lambda from './am_in_lambda'

let sequence_token: undefined | string
let task: undefined | Promise<void>
const log_group = `bookings_system_logs_${process.env.workspace}`
const log_stream = `bookings_system_logs_${process.env.workspace}`

const cloudwatch = new CloudWatchLogs()

async function get_sequence_token() {
    console.log("describing logs for token")
    return new Promise<void>((resolve, reject) => {
        cloudwatch.describeLogStreams({
            logGroupName: log_group,
            logStreamNamePrefix: log_stream
        },
            (err, data) => {
                console.log("got token from description")
                console.log(err)
                console.log(data)
                sequence_token = data.logStreams![0].uploadSequenceToken
                resolve()
            })
    })
}

export function log(message) {
    if(!am_in_lambda()) return
    console.log(`Logging: ${message}`)
    if (task) { //@ts-ignore
        console.log("chaining onto task")
        task = task.then(() => send_log(message))
    } else {
        console.log("setting task")
        task = send_log(message)
    }
}

async function send_log(message: any, retry = 5) {
    console.log(`actually sending ${message} retry is ${retry} token ${sequence_token}`)
    if (!sequence_token) await get_sequence_token()

    return await new Promise<void>((resolve, reject) => {

        console.log(`actually inside ${message} retry is ${retry} token ${sequence_token}`)

        if (retry === 0) return resolve()

        cloudwatch.putLogEvents({
            logEvents: [{
                message: message,
                timestamp: Date.now()
            }],
            logGroupName: log_group,
            logStreamName: log_stream,
            sequenceToken: sequence_token
        }, (err, data) => {
            console.log("attempt finished")
            if (err) {
                console.log("failed, checking error for new token")
                console.log(JSON.stringify(err))
                if (err.code === 'InvalidSequenceTokenException') { //@ts-ignore
                    const token = /is: ([0-9]+)/.exec(err.message)
                    console.log(token)
                    sequence_token = token![1]
                    resolve(send_log(message, retry - 1))
                } else {
                    sequence_token = undefined
                    resolve(send_log(message, retry - 1))
                }
            } else {
                console.log("succeeded, updating token")
                console.log(data)
                sequence_token = data.nextSequenceToken
                resolve()
            }
        })
    })
}

export async function flush_logs() {
    await task
    task = undefined
}
