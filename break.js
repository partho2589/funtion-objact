// var i=0;
// while(i < 10){
//     console.log(i);
//     if( i == 5){
//         break;
//     }
//     i++;
// }

var numbers =[52, 53, 18, 52, 102, 58, 90, 361];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    
    if (number > 100){
        break;
    }
}

// var numbers =[30, 65, 90, 102, 69, 36, 94];
// for( i=0; i < numbers.length; i++){
//     var number = numbers[i];
//     if( number > 90){
//         continue;
//     }
//     console.log(number);
// }