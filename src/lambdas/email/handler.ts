import { get_config } from "../../lambda-common"
import { get_email_client } from "../../lambda-common/email"

//@ts-ignore
import emails from "../../lambda-common/email/*"


export const lambdaHandler = async (event: any): Promise<any> => {

    console.log(event)

    const config = await get_config()
    const email = get_email_client(config, false)
    
    const template = emails.find(t => t.name == event.email.name)

    switch(event.email.type) {
        case "single":
            await email.single(event.email.to, template, event.email.values)
            break;
        case "manager":
            await email.toManagers(template, event.email.values)
        }
}
