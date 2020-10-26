var phoneList = require("./list.json");
const askForSearchQuery=require('./app.js').askForSearchQuery
var {
    chekPhoneNumber
} = require("./chek_phones.js");
console.log(chekPhoneNumber, "test");
const fs = require("fs");
var readline = require("readline");
const cliSelect = require("cli-select");
const {
    Console
} = require("console");
const prompt = require("node-ask").prompt;
const confirm = require("node-ask").confirm;
const multiline = require("node-ask").multiline;
var userName = "Ivan";
console.log(phoneList[0].name);
var aplication = {
    init: function (exampleVar) {
        console.log(exampleVar);
        console.log(this);
    },
    app_name: "phone_book",
    list: [],
    init: function (list) {
        this.list = list;
        console.log(
            "application " +
            this.app_name.charAt(0).toUpperCase() +
            this.app_name.slice(1) +
            " was initialised"
        );
    },
};
console.log(aplication.list);
aplication.init(phoneList);
console.log(aplication.list);



function sortByName(phoneList) {
    var sortedList = [];
    for (var i = 0; i < phoneList.length; i++) {
        for (var j = 0; j < phoneList.length; j++) {
            if (phoneList[i].name.localeCompare(phoneList[j].name) == -1) {
                sortedList[i] = phoneList[j];
            } else {}
        }
    }
    console.log(sortedList);
    return sortedList;
}
//sortByName(phoneList);

//користувач буде мати змогу створювати, видаляти редагувати та читати контакти, сортувати по імені, даті створення та по оператору.

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Вітаю у додатку телефонна книга " + userName);
var options = {
    values: ["Створити новий", "Пошук контактів", "Вихід"],
    selected: ">",
};

function renderMainMenu() {
    cliSelect(options).then(function (res) {
        switch (res.id) {
            case 0: {
                createContact();
                break;
            }
            case 1: {
                
                //findByName(phoneList, answer);
               askForSearchQuery()
                break;
            }
            default: {
                console.log("exit");
            }
        }
    });
}

function createContact() {
    var contact = {};
    prompt(" Введіть ім'я \n")
        .then(function (answer) {
            contact.name = answer.replace(/(\r\n|\n|\r)/gm, "");
            return prompt(" Введіть номер телефону \n");
        })

        .then(function (answer) {
            if (chekPhoneNumber(answer)) {
                contact.phone = answer.replace(/(\r\n|\n|\r)/gm, "");

                return prompt("Все вірно?");
            } else {
                return "wrong phone number";
            }
        })
        .then(function (answer) {
            console.log(contact, "2nd then");
            console.log(answer);
            if (answer == "+\r"||'yes\r') {
                phoneList.push(contact);
                console.log(phoneList);
                fs.writeFileSync("./list.json", JSON.stringify(phoneList));
                // fs.appendFile("./list.json", phoneList[phoneList.length - 1])
                renderMainMenu();
            } else {
                createContact();
            }

            
        })
        .catch(function (err) {
            console.log(err);
        });
}
renderMainMenu();
exports.createContact=createContact