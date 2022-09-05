export const randomCase = function (str) {
    var flip = '';
    for (var i = 0; i < str.length; i++) {
        if (Math.random() > .5) {
            flip += str.charAt(i).toUpperCase();
        } else {
            flip += str.charAt(i).toLowerCase();
        }
    }
    return flip;
}

export const toCamelCase = function (str) {
    let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + toTitleCase(word.toLowerCase()))
    return string.charAt(0).toLowerCase() + string.slice(1)
}

export const toTitleCase = function (str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const toggleCase = function (str) {
    var stringArray = str.valueOf().split(''); // Turn string into array

    stringArray = stringArray.map(function (current, index, stringArray) {
        if (current.toLowerCase() === current) {
            return current.toUpperCase(); // If a character is lowercase, switch to uppercase
        } else {
            return current.toLowerCase(); // Else, switch to lowercase
        }
    });
    return stringArray.join(''); // Join array into string again
}