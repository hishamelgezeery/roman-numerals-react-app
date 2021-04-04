const toRoman = decimalNumber => {
    //input is not a number
    if (!/^\d+$/.test(decimalNumber)) {
        throw TypeError("Input must be a number!");
    }
    //input is a number but not in correct range
    if (decimalNumber < 1 || decimalNumber > 3999) {
        throw TypeError("Input must be a number between 1 and 3999!");
    }

    const keys = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
    const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let output = ""
    let remainingValue = decimalNumber
    let currentIndex = 12
    while (remainingValue > 0) {
        let modulusRemainder = remainingValue % values[currentIndex]
        if (modulusRemainder < remainingValue) {
            let numberOfTimes = Math.floor(remainingValue / values[currentIndex])
            remainingValue -= numberOfTimes * values[currentIndex]
            output += keys[currentIndex].repeat(numberOfTimes)
        }
        currentIndex--
    }
    return output
}

const fromRoman = romanNumeralString => {
    const romanSymbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    //regex that matches only valid roman numeral strings
    const romanNumeralsRegEx = /^(?! *$)^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

    if (romanNumeralsRegEx.test(romanNumeralString)) {
        let value = 0;
        for (let i = 0; i < romanNumeralString.length; i += 1) {
            romanSymbols[romanNumeralString[i]] < romanSymbols[romanNumeralString[i + 1]] ? value -= romanSymbols[romanNumeralString[i]] : value += romanSymbols[romanNumeralString[i]]
        }
        return value
    } else {
        throw TypeError("Input must be a valid Roman Numeral!");
    }
}

export {
    toRoman,
    fromRoman
}