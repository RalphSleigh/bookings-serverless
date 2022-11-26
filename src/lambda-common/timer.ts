let start_time: number | null
let last : number | null 

export function start(){   
    start_time = last = Date.now()
}

export function since(event: string) {
    const now = Date.now()
    //console.log(`${event} total: ${now - start_time!}, since: ${now - last!}`)
    last = now
}
