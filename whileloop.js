// //while loops
// var i  = 0
// while( i < 10){
//     console.log('Shishir ahmed')
//     i++
// }

// //while (Initilizer,condition,increment){
// //
// //}

var isrunning = true
while(isrunning){
    var rand = Math.floor(Math.random() * 10 + 1 )
    if(rand == 9){
        console.log('Winner winner chicken dinner')
        isrunning = false

    }
    else{
        console.log('You have got' + rand )
    }
}