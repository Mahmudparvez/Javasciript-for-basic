//&&//!


//A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

//A || B
// true || true = true
// true || false = true
// false ||  true = true
// false || false = false 


var n = 10 
var str=""


if(n % 2 == 0){
    str = "Even"
}else{
    str="Odd"
}
console.log(str)

var result =  n % 2 == 0 ? 'Even' : 'Odd'
console.log(result)

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"

