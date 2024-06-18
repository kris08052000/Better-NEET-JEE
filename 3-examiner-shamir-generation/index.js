const sss = require("shamirs-secret-sharing");

const secret = Buffer.from('Encryption secret key');
const shares = sss.split(secret, {shares : 3, threshold : 3});

const smallshares = shares.slice(0, 2);

const recovered = sss.combine(smallshares);

console.log(shares.map(x => x.toString('hex')));
console.log(recovered.toString());  // encrypted secret key

