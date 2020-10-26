function buildFragment(symbol, n=4)
{
    var output=''
    while(n>0){
    output+=symbol
    n--}
    return output
    
}
 var result = buildFragment('-')
    console.log(result)
var symbol="-"
function buildLine(){
    var n=4
    var output = ""
    while (n>0)
    {
        output+=buildFragment(symbol)+buildFragment(' ')
        n--
    }
   return output
}
  var result = buildLine()
   console.log(result)
//buildFragment('#')
function Chess () {
    for (var i=0; i<8;i++)
        {
            
        }
}
console.log('\u03A9')