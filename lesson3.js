/*String.prototype.capitalize = function (str) {
  var wordsArr = this.split(" ");
  wordsArr.forEach(function (item) {
    console.log(item.charAt(0).toUpperCase() + item.slice(1));
  });
};*/
//String.prototype.sentenceCount = function () {

//  var count
//count = count.filter(function (item) {
//  return item > 0
//})
//console.log('string has ' + count.length + ' sentences')
//return count.length

//}
//String.prototype.wordsCount = function () {
//  var wordsArr = this.split(" ")
//console.log('this string has ' +
//  wordsArr.length + ' words')
//}
//var str = 'gteger. rehgewh jhkfgjk, f hmgm. hjdkt fyjdtk'
//str.sentenceCount()
//str.wordsCount()
//String.prototype.alies = function () {
//  var withotProbil = this.replace(' ', '-')
//return withotProbil
//}
/*function Cat(age, weight, mood, color) {
    this.age = age
    this.weight = weight
    this.mood = mood
    this.color = color
    this.passOneYear = function () {
        this.age++
    }


}
var cat1 = new Cat(2, 3, 0.5, "black")
створити метод який повертає кількість слів, і 2 й кількість реченнь
string.prototype.reverce= function (type) type - leters, words, sentences
String.prototype.cezarEncoding i Decoding
String.prototype.toTransliteration*/
function isUkranianMobileNumber(number) {
  var UkranianNumbers = ["+38067", "+38066", "+38098", "+38097", "+38063"];
  if (Number.number == false || number.length < 10) {
    console.log("Номер телефону повинен містити тільки цифри");
  } else {
    var corectNumber = number.split(" " || "-" || "_" || "." || '+' || '' || '(' || ')');
    console.log(corectNumber);
    switch (number[0]) {
      case "+": {
        break;
      }
      case "3": {
        corectNumber = "+" + number;
        break;
      }
      case "8": {
        corectNumber = "+3" + number;
        break;
      }
      case "0": {
        corectNumber = "+38" + number;
        break;
      }
      default: {
        console.log("invalid number");
        break;
      }
    }
  }
  if (UkranianNumbers.includes(corectNumber[0] + corectNumber[1] + corectNumber[2] + corectNumber[3] + corectNumber[4] + corectNumber[5])) {
    return corectNumber;
  } else {
    return console.log("Це не український номер " + corectNumber);
  }
}

isUkranianMobileNumber("+380675476853939");