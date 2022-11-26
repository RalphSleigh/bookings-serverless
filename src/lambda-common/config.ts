import fetch from 'node-fetch'
import am_in_lambda from './am_in_lambda'
import { since } from './timer'

export async function get_config() {
    if(am_in_lambda()) {
    since("fetching config:")
    const url = `http://localhost:2772/applications/bookings-config-${process.env.workspace}/environments/bookings-config-environment-${process.env.workspace}/configurations/bookings-config-profile-${process.env.workspace}`
    const data = await fetch(url)
    since("getting config body:")
    const json = await data.json()
    since("returning config:")
    return json
    } else {
        const config = '../../config'
        return require(config)
    }
}