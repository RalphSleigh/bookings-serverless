import fetch from 'node-fetch'
import am_in_lambda from './am_in_lambda'

export async function get_config() {
    if(am_in_lambda()) {
    console.log("fetching config:")
    const url = `http://localhost:2772/applications/bookings-config-${process.env.workspace}/environments/bookings-config-environment-${process.env.workspace}/configurations/bookings-config-profile-${process.env.workspace}`
    const data = await fetch(url)
    const json = await data.json()
    return json
    } else {
        return require('../../config')
    }
}