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

// for (let num = 55; num <= 85; num++) {
//     if (num % 2 === 0 || num % 5 === 0) {
//         continue;  // Skip even numbers and numbers divisible by 5
//     }
//     console.log(num);  // Print odd numbers that are not divisible by 5
// }

// for(let i = 1; i <=60; i++){
//     console.log(`${i}. I will invest at least 6 hrs every single day for next 60 days!`);
// }

// for(let num = 61; num <= 100; num++){
//     if( num %2 === 0){
//         continue;
//     }
//     console.log(num);
// }

// for(let num = 78; num <= 98; num++){
//     if( num %2 !== 0){
//         continue;
//     }
//     console.log(num);
// }

// let sum = 0;
// for (let i = 81; i <= 131; i++) {
//    if (i % 2 !== 0) {
//       sum = sum + i;
//       console.log(i); // Print only odd numbers
//    }
// }
// console.log('Total:', sum);

// let sum = 0;
// for (let i = 206; i <= 311; i++) {
//    if (i % 2 == 0) {
//       sum = sum + i;
//       console.log(i); // Print only odd numbers
//    }
// }
// console.log('Total:', sum);

// let num = 9;
// for(let i = 1; i <=10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// for(let i = 81; i >= 65; i--){
//     console.log(i);
// }

// while loop
// let i = 1;
// while (i <= 60)
// {
//   console.log(`${i}.I will invest at least 6 hrs every single day for next 60 days! `);
//   i++;
// }

// let num = 61;
// while(num <= 100){
//   num++;
  
//   if(num %2!== 0){
//     console.log(num);
//   }
// }
// let num = 78;
// while(num <= 98){
//   num++;
  
//   if(num %2 == 0){
//     console.log(num);
//   }
// }
//  let sum = 0;
// let i = 206;
//  while(i <= 311){
//   i++;
  
//   if(i %2 == 0){
//     sum = sum + i;
//          console.log(i);
//      }
//  }
//  console.log('total', sum);

//  let sum = 0;
// let i = 81;
//  while(i <= 131){
//   i++;
  
//   if(i %2 !== 0){
//     sum = sum + i;
//          console.log(i);
//      }
//  }
//  console.log('total', sum);

// let num = 5;  // The number for which we want the multiplication table
// let i = 1;     // Initialize i to 1, which is where the multiplication starts
// while (i <= 10) {  // Continue while i is less than or equal to 10
//     console.log(`${num} x ${i} = ${num *i}` );  // Print the multiplication result
//     i++;  // Increase i by 1 after each loop
// }
let num = 21;  // Start the countdown from 21

while (num >= 15) {  // Continue the countdown while num is greater than or equal to 15
    console.log(num);  // Print the current number
    num--;  // Decrease num by 1 after each iteration
}

