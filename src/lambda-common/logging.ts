import { AWSError, CloudWatchLogs } from 'aws-sdk'
import { PromiseResult } from 'aws-sdk/lib/request'
import { serializeError } from 'serialize-error'
import am_in_lambda from './am_in_lambda'


let tasks: Promise<PromiseResult<CloudWatchLogs.PutLogEventsResponse, AWSError>>[] = []

const log_group = `bookings_system_logs_${process.env.workspace}`
const log_stream = `bookings_system_logs_${process.env.workspace}`

const cloudwatch = new CloudWatchLogs()

export function log(message) {
    try {

        if (!am_in_lambda()) return

        tasks.push(cloudwatch.putLogEvents({
            logEvents: [{
                message: message,
                timestamp: Date.now()
            }],
            logGroupName: log_group,
            logStreamName: log_stream
        }).promise())
    } catch (e) {
        console.log("Error logging to cloudwatch")
        console.log(serializeError(e))
    }
}

export async function flush_logs() {
    try {
        await Promise.all(tasks)
        tasks = []
    } catch (e) {
        console.log("Error flushing logs to cloudwatch")
        console.log(serializeError(e))
    }
}
