import bcrypt from "bcrypt";

const saltRounds = 12;

export async function hashPassword(password){
    return await bcrypt.hash(password, saltRounds);
}

export async function checkPassword(correctHash, enteredPassword){
    return await bcrypt.compare(enteredPassword, correctHash);
}


export default {};