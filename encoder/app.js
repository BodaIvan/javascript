var fs = require('fs')
var readline = require("readline");
const cliSelect = require("cli-select");
const {
    Console
} = require("console");
const prompt = require("node-ask").prompt;
const confirm = require("node-ask").confirm;
const multiline = require("node-ask").multiline;
//let data1 = fs.readFileSync("./symbols.txt", "utf8");
//let data = fs.readFileSync("./fish-text.txt", "utf8");
//console.log(data)
//var result = {}
//console.log(fileContent[1])

//function Symbol_counter(symbol) {
//   this.symbol = symbol

//   if (!this.count) {
//       this.count = 1
//   } else {
//      this.count += 1
//   }
//}
//for (var i = 0; i < data.length; i++) {
//var all_symbols_counter = new Symbol_counter(data[i])
//}
//console.log(all_symbols_counter)
/*for (var i = 0; i < data.length; i++) {
    if (result[data[i]]) {
        result[data[i]] = result[data[i]] + 1

    } else {
        result(data[i])
    }
    for (var property in result) {
        if (result.hasOwnProperty(property)) {
            if (max == undefined) {
                max = result[property]
            } else {
                if (max < result[property]) {
                    max = result[property]
                }
            }
        }
    }
    console.log(max)
    console.log(data)
}

function sortFromHightToLOw(list) {
    var result = []
    var item = Math.max(list)
    var index = list.indexOf(item)
    if (index > -1) {
        list.splice(index, 1)

    }
    console.log(list)
    return list

}
//sortFromHightToLOw([5, 10, 18, 3, 108])
console.log(result)
*/
//СТвори функцію сортування телефонної книги по імені, і по оператору
String.prototype.FakeIncludes = function (str) {
    var included = false
    for (var i = 0; i < this.length; i++) {
        if (this[i] != str[0]) {
            continue
        } else if (this[i] == str[0]) {
            //  console.log(this[j])
            //   console.log(str[j])
            for (var j = i + 1; j < (i + 1 + this.length); j++) {
                console.log(this[j])
                //     console.log(str[j])
                if (this[j] == str[j]) {
                    console.log(i)
                    console.log(j)
                    included = true
                    console.log(this[j]);

                }
            }

        }
    }
    return included
}
var str = 'fdhhjsr ivan fhstjsrj'
console.log(str.FakeIncludes('ivan'))

function getPhonesList() {
    var phoneList = fs.readFileSync("./list.json", 'utf-8')
    return JSON.parse(phoneList)
}


function savePhoneList(list) {
    fs.writeFile("./list.json", list)
}

function askForSearchQuery() {
    prompt('Введіть пошуковий запит')
        .then(function (query) {
            query = query.toLowerCase()
            var searchResult = getPhonesList().filter(function (item) {
                item.name.includes(query) | item.phone.includes(query)
            })
            return searchResult
                .then(function (query) {
                    if (searchResult.length < 1) {
                        console.log('За даним пошуковим запитом нічого не знайдено, спробуйте ще раз')
                        askForSearchQuery()
                    } else {
                        for (var i = 0; i < searchResult.length; i++) {
                            // var name=searchResult[i].split
                        }
                    }
                })
        })
}
askForSearchQuery()