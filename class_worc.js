String.prototype.alias = function () {
    var withotProbil = this.split(' ').join('-')
    return withotProbil
}
var str = ' vwtbwrb hdneryne etynetme ethnetn'
//console.log(str.alias())
String.prototype.ukrLetters = 'а, б, в, г, ґ, д, е, є, ж, з, и, і, ї, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ь, ю, я'.split(', ')
String.prototype.transliteration = 'A B V H G D E Ye Zh Z Y I Yi Y K L M N O P R S T U F Kh Ts Ch Sh Shch ` Yu Ya'.split(' ')
String.prototype.makeTransliteration = function () {
    var string = this.split(' ').join('-')
    var output = ''
    for (var i = 0; i < string.length; i++) {

        var index = this.ukrLetters.findIndex(function (element) {
            return element == string[i].toLowerCase()
        })
        if (index == -1) {
            output += string[i]
        } else {
            output += this.transliteration[index].toLowerCase()

        }
    }

    return output


};
Array.prototype.costumeFindIndex(100) = function (moreThan) {
    for (var i = 0; i < this.length; i++) {
        if (moreThan < this[i]) {
            return i
        }
    }
    return -1
}
var test = [12, 15, 88, 44, 1]
index = test.costumeFindIndex(100)
console.log(index)
return false
var translite = "Моя стаття".makeTransliteration()
console.log(translite)
//transliteration-detransliteration