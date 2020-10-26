function square(symbol='#', n=2, size=4){
    var line=Array(size).fill(symbol).join('')
    var lines=Array(n).fill(line).join('\n')
    return lines
}


function drawLine(lineArr, lineWidth=4, lineHeight=4){
var n = 0
while(n<lineArr.length){
   
    var temporary=Array(lineWidth).fill(lineArr[n]).join('')
    lineArr[n]=temporary
    n++
}
lineArr=lineArr.join('')
var output = Array(lineHeight).fill(lineArr).join('\n')
return output

}

var lines=[ [' ', '#',' ', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#',' ', '#'],
            ['#', ' ','#', ' ', '#', ' ','#', ' ','#', ' ', '#', ' ','#', ' ','#', ' '],
            [' ', '#',' ', '#', ' ', '#', ' ', '#',' ', '#', ' ', '#', ' ', '#',' ', '#'],
            [],
            ['#', '#', '#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#', ' ', ' ', '#', ' ', '#'],
            [' ', '#', ' ', ' ', ' ', '#',' ', '#', ' ', ' ', ' ', '#', '#', ' ', ' ','#'],
            [' ', "#", " ", ' ','#', '#', '#', '#', '#', ' ', ' ', '#', '#', ' ', ' ','#'],
            [' ', '#', ' ', ' ', '#', ' ', ' ', ' ', '#',' ', '#', ' ', ' ', '#', ' ', '#'],


]
var k =0
while (k<lines.length)
{
    console.log(drawLine(lines[k], 5, 3))
    k++
}

//маса циліндра: функції обєм, площа кола, маса циліндра