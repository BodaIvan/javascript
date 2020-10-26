var arrOfphones = [
    "+380674444555",
    "380974545455",
    "0975474777",
    "554433344",
    "364367773733",
    "54u585383333",
    "6547347272",
    "363762472562",
    "34636262124",
    "34623727522345",
];

function randomString(len, charSet) {
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function dumyPhoneNumber() {
    return randomString(getRandomInt(11, 22), "1234567890-+() ");
}

function getPhonesNumbers(n) {
    var phones_list = [];
    for (var i = 0; i < n; i++) {
        var example_phone = dumyPhoneNumber();
        abandoned_symbols = "-+() ";
        for (var j = 0; j < 5; j++) {
            example_phone = example_phone.split(abandoned_symbols[j]).join("");
        }
        console.log(example_phone);
        if ((example_phone.length > 10) & (example_phone.length < 14)) {
            phones_list.push(example_phone);
        } else {
            i--;
        }
    }
    return phones_list;
}

function clearPhoneNumber(phoneNumber) {
    var abandonedChars = '-+() '
    result = phoneNumber
    for (var i = 0; i < abandonedChars.length; i++) {
        result = result.split(abandonedChars[i]).join('')
    }
    return result
}

function checkPhoneNumberLen(phoneNumber) {

    var testNumber = clearPhoneNumber(phoneNumber)

    var len = testNumber.length
    if (10 < len && len < 14) {
        return phoneNumber
    } else {
        return false
    }
}

function chekPhoneNumber(number) {
    var UkranianNumbers = ["067", "066", "098", "097", "063"];

    if (checkPhoneNumberLen(number)) {
        number = checkPhoneNumberLen(number)

        if (
            (number.indexOf("0") <= 2) &
            ((number.substr(0, 4) == "+380") |
                (number.substr(0, 3) == "380") |
                (number.substr(0, 2) == "80") |
                (number.substr(0, 1) == "0"))
        ) {
            if (UkranianNumbers.includes(number.substr(number.indexOf("0"), 3))) {
                return true;
            } else {
                return false;
            }
        } else {

            return false;
        }
    }
}
//console.log(chekPhoneNumber("380674949567"));
exports.chekPhoneNumber = chekPhoneNumber