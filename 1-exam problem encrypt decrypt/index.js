const crypto = require('crypto');

const problem_statement = "what is 2 + 2?";
const option1 = "2";
const option2 = "4";
const option3 = "6";
const option4 = "8";

function encrypt(text, key, iv){
    const algorithm = "aes-256-cbc";

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted, key, iv){
    const algorithm = "aes-256-cbc";
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const key = crypto.randomBytes(32); //secrect
const iv = crypto.randomBytes(16);

//encrypt

const encryptedProblem = encrypt(problem_statement, key, iv);
const encryptedOption1 = encrypt(option1, key, iv);
const encryptedOption2 = encrypt(option2, key, iv);
const encryptedOption3 = encrypt(option3, key, iv);
const encryptedOption4 = encrypt(option4, key, iv);

//log encrypted

console.log(encryptedProblem);
console.log(encryptedOption1);
console.log(encryptedOption2);
console.log(encryptedOption3);
console.log(encryptedOption4);

// decrypt

const decryptedproblem = decrypt(encryptedProblem, key, iv);
const decryptedoption1 = decrypt(encryptedOption1, key, iv);
const decryptedoption2 = decrypt(encryptedOption2, key, iv);
const decryptedoption3 = decrypt(encryptedOption3, key, iv);
const decryptedoption4 = decrypt(encryptedOption4, key, iv);

// log decrypted

console.log(decryptedproblem);
console.log(decryptedoption1);
console.log(decryptedoption2);
console.log(decryptedoption3);
console.log(decryptedoption4);