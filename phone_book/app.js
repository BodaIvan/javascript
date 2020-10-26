var fs = require('fs')
var readline = require("readline");
const createContact=require('./main_app.js').createContact
const cliSelect = require("cli-select");
const {
    Console
} = require("console");
const prompt = require("node-ask").prompt;
const confirm = require("node-ask").confirm;
const multiline = require("node-ask").multiline;

String.prototype.FakeIncludes = function (str) {
    var included = false
    for (var i = 0; i < this.length; i++) {
        if (this[i] != str[0]) {
            continue
        } else if (this[i] == str[0]) {
         
            for (var j = i + 1; j < (i + 1 + this.length); j++) {
                console.log(this[j])
             
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


function getPhonesList() {
    var phoneList = fs.readFileSync("./list.json", 'utf-8')
    return JSON.parse(phoneList)
}


function savePhoneList(list) {
    fs.writeFile("./list.json", JSON.stringify(list), (err) => {
        if (err) throw err;
        console.log('The file has been changed!')
    })
}



function askForSearchQuery() {
    prompt('Введіть пошуковий запит -> ')
        .then(function (query) {
            query = query.toLowerCase()
            var list = getPhonesList()
           // console.log(list)
            var searchResult = list.filter(function (item) {

                return (item.name.toLowerCase().includes(query.trim()) || item.phone.includes(query.trim()))
            })
           // console.log(query)
           // console.log(searchResult)
            return searchResult
        })
        .then(function (searchResult) {
            if (searchResult.length < 1) {
                console.log('За даним пошуковим запитом нічого не знайдено, спробуйте ще раз')
                askForSearchQuery()
            } else {
                var options = {
                    values: [],
                    selected: ">",
                };
                for (var i = 0; i < searchResult.length; i++) {
                    options.values[i] = searchResult[i].name
                }
                cliSelect(options).then(function (select) {
                    var selectedContact = searchResult[select.id].name + "-->" + searchResult[select.id].phone
                    console.log(selectedContact);
                     var options = {
                        values: ['Редагувати', 'Видалити', 'Вийти'],
                        selected: ">",
                    };
                    cliSelect(options).then(function (s) {
                        switch (s.id) {
                            case 0: {
                                var ccontact = findContactInFile(selectedContact)
                                deleteSerchedContact(ccontact)
                                createContact()
                            }
                            case 1: {
                                
                                var ccontact = findContactInFile(selectedContact)
                                deleteSerchedContact(ccontact)
                                askForSearchQuery()
                                
                            



                            }
                            default: {
                                console.log('exit');
                                }
                        }
                            
                    })
                })

            }

        })


        .catch(function (err) {
            console.log(err);
        });
}
//askForSearchQuery()
    
function findContactInFile(contact) {
    
    var userName = contact.split('-->')[0]
    var userPhone = contact.split('-->')[1]
    var list=getPhonesList()
    var serchedContact=list.filter(function (item) {
        return (item.name.includes(userName) && item.phone.includes(userPhone))
    })
    serchedContact = serchedContact[0]
    
   return serchedContact
    
}
function deleteSerchedContact(contact) {
    list=getPhonesList()
    list.splice(list.indexOf(contact), 1)
    console.log(list)
    savePhoneList(list)
}

exports.askForSearchQuery=askForSearchQuery