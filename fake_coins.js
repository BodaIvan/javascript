var bags=Array(10).fill(2)
function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}
var randomIndexOfBag=getRandomInt(bags.length)
console.log(randomIndexOfBag);
bags[randomIndexOfBag]=1

function fake_coins(bags)
{
    console.log(bags)
    var mass=0
    for (var i=1; i<=bags.length;i++)
    {
            mass = bags[i-1]*i + mass
        }
   var idealmass=0
   for (var j=1; j<=bags.length;j++)
    {
            idealmass = 2*j + idealmass
    }
    console.log(mass)
    console.log(idealmass, 'here')
    var numberOfFakeBag=idealmass-mass
    console.log(numberOfFakeBag)
}
fake_coins(bags)
