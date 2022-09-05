
import Words from "variables/dictionary.js";

const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
export const specialChars = "!@#$%^&*";

export function generatePassword(length = 4, lowers = true, uppers = true, numbers = true, specials = false) {
    var alphabet = [];
    let password = ""
    if (lowers) alphabet = alphabet.concat(lowerCases.split(''));
    if (uppers) alphabet = alphabet.concat(upperCases.split(''));
    if (numbers) alphabet = alphabet.concat(digits.split(''));
    if (specials) alphabet = alphabet.concat(specialChars.split(''));

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * alphabet.length);
        password += alphabet[random];
    }

    return password;
};

export function generatePassphrase(length = 8, capitalized = false, separator = '-') {
    let passphrase = "";
    for (let i = 0; i < length; i++) {
        let word = Words[Math.floor(Math.random() * Words.length)];
        if (capitalized)
            word = word.toTitleCase();

        passphrase += i === (length - 1) ? word : word + separator;
    }

    return passphrase;
};