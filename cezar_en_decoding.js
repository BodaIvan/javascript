function encoding(n = 0, message = "апро") {
  var alfabet = "а, б, в, г, ґ, д, е, є, ж, з, и, і, ї, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ь, ю, я".split(
    ", "
  );
  console.log(alfabet);
  var input = message.split("");
  console.log(input);
  var output = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      output.push(" ");
    } else if (input[i] == input[i].toUpperCase()) {
      input[i] = input[i].toLowerCase()
      if (alfabet.indexOf(input[i]) + n >= alfabet.length) {
        var index = (alfabet.indexOf(input[i]) + n) - alfabet.length
        output.push(alfabet[index]);
      } else {
        output.push(alfabet[alfabet.indexOf(input[i]) + n]);

        output[i] = output[i].toUpperCase();
      }
    } else {
      if (alfabet.indexOf(input[i]) + n >= alfabet.length) {
        var index = (alfabet.indexOf(input[i]) + n) - alfabet.length

        output.push(alfabet[index]);
      } else {
        output.push(alfabet[alfabet.indexOf(input[i]) + n]);
      }

    }
  }
  output = output.join("");
  console.log(output);
  return output;
}

function decoding(n = 0, message = "") {
  var alfabet = "а, б, в, г, ґ, д, е, є, ж, з, и, і, ї, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ь, ю, я".split(
    ", "
  );

  var input = message.split("");

  var output = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] == " ") {
      output.push(" ");
    } else if (input[i] == input[i].toUpperCase()) {
      input[i] = input[i].toLowerCase()
      if (alfabet.indexOf(input[i]) + n >= alfabet.length) {
        var index = (alfabet.indexOf(input[i]) + n) - alfabet.length
        output.push(alfabet[index]);
      } else {
        output.push(alfabet[alfabet.indexOf(input[i]) - n]);

        output[i] = output[i].toUpperCase();
      }
    } else {
      if (alfabet.indexOf(input[i]) - n >= alfabet.length) {
        var index = (alfabet.indexOf(input[i]) - n) - alfabet.length

        output.push(alfabet[index]);
      } else {
        output.push(alfabet[alfabet.indexOf(input[i]) - n]);
      }

    }
  }
  output = output.join("");
  console.log(output);
  return output;
}
encoding(4, "секретне повідомленняяяя");
decoding(4, "хиофицси утелзтрписсгггг");

var text = 'grg'

function encodingByShuffle(text) {
  var encodedText = text.split('')
  var limit = Math.floor(encodedText.length / 2)
  console.log(limit);
  for (var i = 0; i < limit; i++) {
    var mirrorIndex = encodedText.length - i - 1
    var tmp = encodedText[mirrorIndex]
    encodedText[mirrorIndex] = encodedText[i]
    encodedText[i] = tmp
  }
  return encodedText.join('')
}