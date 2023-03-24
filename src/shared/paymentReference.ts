//take a database id and output a payment reference.
export default function paymentReference(id) {
    if(!id || id === 0)throw new Error("Bad ID being used");
    const ref = ("000" + ((id * 66138411253)%8933)).slice(-4)
    return `VC23-${ref}`;
}