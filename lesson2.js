var alphabet = "а, б, в, г, ґ, д, е, є, ж, з, и, і, ї, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ь, ю, я".split(
  ", "
);
var key = Array(alphabet.length);

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (var i = 0; i < key.length; i++) {
  var result = makeid(1);
  if (!key.includes(result)) {
    key[i] = result;
  } else {
    i--;
  }
}
console.log(key);

function encoder(text) {
  var encodedText = "";
  for (var i = 0; i < text.length; i++) {
    var index = alphabet.indexOf(text[i]);
    console.log(index);
    encodedText += key[index];
  }
  return encodedText;
}
var result = encoder("Моє таємне повдомлення".toLowerCase(), key);
//console.log(result);

function decoding(key, message = "ff") {
  var output = "";
  for (var i = 0; i < message.length; i++) {
    output = output + alphabet[indexOf(key[indexOf(message[i])])];
  }
  return output;
}
//
//decoding(key, "tc");
//console.log(
// decoding(key, encoder("Моє таємне повдомлення".toLowerCase(), key))
//);