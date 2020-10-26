function drawRomb(height, symbol) {
	var slash = ' '
	var width = height
	var line = symbol + symbol
	for (var i = 0; i <= height / 2; i++) {
		var range = ''
		for (var n = 0; n < width / 2; n++) {
			range = range + slash


		}

		var totalLine = range + line
		line = line + symbol + symbol

		width = width - 2
		console.log(totalLine)
	}
	var slash = ''

	var width = height / 2


	for (var i = 1; i <= height / 2; i++) {
		slash = slash + ' '
		var line = ''
		for (var j = 1; j <= width; j++) {

			line = line + symbol + symbol



		}

		width--

		console.log(slash + line)

	}
}
drawRomb(10, "#")
//сплав на коробках, знайти реальне застосування для формул