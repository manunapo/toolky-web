String.prototype.randomCase = function () {
    var flip = '';
    for (var i = 0; i < this.length; i++) {
        if (Math.random() > .5) {
            flip += this.charAt(i).toUpperCase();
        } else {
            flip += this.charAt(i).toLowerCase();
        }
    }
    return flip;
}

String.prototype.toCamelCase = function () {
    let string = this.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + word.toLowerCase().toTitleCase())
    return string.charAt(0).toLowerCase() + string.slice(1)
}

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

String.prototype.toggleCase = function () {
    var stringArray = this.valueOf().split(''); // Turn string into array

    stringArray = stringArray.map(function (current, index, stringArray) {
        if (current.toLowerCase() === current) {
            return current.toUpperCase(); // If a character is lowercase, switch to uppercase
        } else {
            return current.toLowerCase(); // Else, switch to lowercase
        }
    });
    return stringArray.join(''); // Join array into string again
}