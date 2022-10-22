import bcrypt from 'bcryptjs'
import { get_config } from './config'

export async function test_function(data: string) {

    const config_data = await get_config()
    console.log("config is:")
    console.log(JSON.stringify(config_data))
    console.log(config_data)
    return JSON.stringify(config_data)
}