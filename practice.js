// for(let i = 1; i <= 200; i++){
//     console.log(i);
//     if(i === 100){
//         console.log('Found 100! Stopping the loop.');
//         break
//     }
// }

// let num = 1;
// let sum = 0;
// while( sum < 100){
//     console.log(num);
//     sum =  sum + num ;
//     console.log('sum', sum);
//    if( sum >= 100){
//     console.log('stopping the loop')
//     break;
//    }
    
// }
// num++;

// for(let i = 1; i <=100; i++){
//     console.log(i);
//     if(i === 1 || i=== 2|| i === 4 || i === 9 || num === 16 || num === 25 || num === 36 || num === 49 || num === 64 || num === 81 || num === 100){
//         console.log('stop the loooooooooooop')
//         break;
//     }
// }

// for(let i = 1; i <=100; i++){
//     console.log(i);
//     if(i === 1 || i=== 2|| i === 4 || i === 9 ){
//         console.log('stop the loooooooooooop')
//         break;
//     }
// }

// let i = 0;
// while (i <= 40){
//     i++;
//     if(i%2 === 1){
//         continue
//     }
//     console.log(i);
// }


// let i = 55;
// while (i <= 85 ){
//     i++;
//     if(i%5 === 0){
//         continue
//     }
//     console.log(i);
// }

// let i = 55;
// while (i <= 85) {
//     if (i % 5 === 0) {
//         i++;  // Skip numbers divisible by 5
//         continue;
//     }
//     console.log(i);  // Print odd numbers not divisible by 5
//     i++;  // Increment to move to the next number
// }

for (let num = 55; num <= 85; num++) {
    if (num % 2 === 0 || num % 5 === 0) {
        continue;  // Skip even numbers and numbers divisible by 5
    }
    console.log(num);  // Print odd numbers that are not divisible by 5
}
