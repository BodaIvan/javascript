function squareCircle(R) {
    return Math.PI * R * R
}

function Cilindre(h, R) {
    return squareCircle(R) * h

}

function massCilindre(R, h, Ro) {
    return Cilindre(h, R) * Ro
}
console.log(massCilindre(2000, 5, 4))

function numOfBarelsforRafting(mass, R, h) {
    positivemass = massCilindre(R, h, 1000) * 2 / 3
    return Math.ceil(mass / positivemass)
}
console.log(numOfBarelsforRafting(120 * 7, 0.3, 0.9))
/*rl.question(
  "Для створення натисніть 1, для пошуку 2, для виходу 0 \n >> ",
  function (answer) {
    switch (answer) {
      case "1":
        console.log("логіка створення");
        break;

      case "2":
        console.log("логіка пошуку");
        break;

      case "0":
        rl.close();
        break;
      default:
        console.log("команда не знайдена");
    }
    console.log("ваш вибір ", answer);

    rl.close();
  }
);*/