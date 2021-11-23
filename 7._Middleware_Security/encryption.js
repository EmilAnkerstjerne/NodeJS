import bcrypt from "bcrypt";

const saltRounds = 12;

const correctPassword = "password123";
const incorrectPassword = "Password123";
const correctHash = "$2b$12$qjDCV1HLRBCTTNU2Nfj/RuwqpT7OC2m4SYmUSe.fQhfzpHt5kn7Pu";
const incorrectHash = "$2b$12$qjDCV1HLRBCTTNU2Nfj/RuwqpT7OC2m4SYmUSe.fQhfzpHt5kn7PU";

(async () => {
    const hashedPassword = await bcrypt.hash(correctPassword, saltRounds);

    const isPasswordCorrect = await bcrypt.compare(correctPassword, incorrectHash);
    console.log(isPasswordCorrect);
})()


export default {};