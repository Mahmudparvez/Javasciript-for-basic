var date = new Date()
var today = date.getDay()

switch (today){
    case 0:
        console.log('Today is sunday')
        break;
        case 1:
        console.log('Today is monday')
        break;
        case 2:
        console.log('Today is tuesday')
        break;
        case 3:
        console.log('Today is wednesday')
        break;
        case 4:
        console.log('Today is Trusday')
        break;
        case 5:
        console.log('Today is Friday')
        break;
        case 6:
        console.log('Today is satarday')
        break;  
        default: console.log('Not a valid number')
}