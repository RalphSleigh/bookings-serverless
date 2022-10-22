//take a database id and output a payment reference.
export default function paymentReference(id) {
    if(!id || id === 0)throw new Error("Bad ID being used");
    return `CG-${(id * 66138411253)%8933}`;
}