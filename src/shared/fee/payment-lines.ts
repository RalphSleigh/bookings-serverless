import Moment        from 'moment'

export default function paymentLines(event, participants, booking) {

    if(!booking.payments) return [];

    const adjustments = booking.payments.filter(p => p.type === "adjustment");
    const payments = booking.payments.filter(p => p.type === "payment");

    return [...adjustments.map(a => {
                return {total: a.amount, line: a.note}}),
        ...payments.map(p => {
                return {total: -p.amount, line: `Payment recorded ${Moment(p.createdAt).format('L')} ${p.note}`}})
    ]

}