// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.


// function changeNumber(num){
//     if(num % 2 !== 0){
//         console.log("odd");
//     }else console.log("even");
// }

// changeNumber(418)

// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

// function myFunc(a,b){
//     if(a % b === 0 || b % a === 0){
//         console.log(1);
//     }else console.log(0);
// }

// myFunc(2,53)

// 3. Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).


// function thirdAngle(a,b,c){
//     c = 180 - (a + b)
//     console.log(c);
// }

// thirdAngle(30,90)

// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

// function printValue(n){
//     let b = `${n}${n}`
//     let c = `${n}${n}${n}`
//     let count = n + +b + +c
//     console.log(count)
// }
// printValue(17)

// 5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.


// function myFunc(n){
//         let arr = String(n).split("")
//         let lastDigit = [...arr].splice(arr.length - 1)
//         let remaining = [...arr].splice(0, arr.length - 1)
   
//     if(lastDigit != 0){
//         let newArr = [...lastDigit,...remaining]
//         const result = newArr.join("")
//         console.log(result);
//     }else console.log(n);
// }

// myFunc(1581)

// 6. Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

// function printAverage(a,b,c,d,e){
//     const result = (a + b + c + d + e) / 5 
//     console.log(result);
// }

// printAverage(6,15,-8,13,5)

// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.


// function myFunc(n){

//     if(n % 7 === 0 && n % 5 === 0 & n % 3 === 0){
//         return console.log(`${n} is a multiple of 3 , 5 and 7`);
//     }
//     if(n % 3 === 0 && n % 5 === 0){
//        return console.log(`${n} is a multiple of 3 and 5`);
//     }
//     if(n % 7 === 0 && n % 5 === 0){
//         return console.log(`${n} is a multiple of 7 and 5`)
//     }
//     if(n % 7 === 0 && n % 3 === 0){
//        return console.log(`${n} is a multiple of 7 and 3`)
//     }
//     if(n % 7 === 0){
//         return console.log(`${n} is a multiple of 7`)
//     }
//     if(n % 5 === 0){
//         return console.log(`${n} is a multiple of 5`)
//     }
//     if(n % 3 === 0){
//         return console.log(`${n} is a multiple of 3`)
//     }else{
//         return console.log(`${n} is not a multiple of 3, 5 and 7 `);
//     }
    
// }

// myFunc(13)

// 8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in months is between 1 and 12.

// function myFunc(month,year){
//     let str = ""
//     if(month >= 1 && month <= 12){
//         str = "baby"
//     }
//     if(year >= 1 && year <= 2){
//         str = "toddler"
//     }
//     if(year >= 3 && year <= 12){
//         str = "child"
//     }
//     if(year >= 13 && year <= 17){
//         str = "teenager"
//     }
//     if(year >= 18){
//         str = "adult"
//     }
//     console.log(str);
// }

// myFunc(6,15)

// 9. Given three numbers. Sort them by the ascending order.

// function sortNumbers(a,b,c){
//     const sorted = [a,b,c].sort((a,b) => a - b)
//     const result = sorted.join()
//     console.log(result);

// }

// sortNumbers(122,51,23)

// 10. Percentage marks obtained by a student in three exams are to be entered to a computer. An indication of Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows: a. A student passes if all three examinations are passed. b. Additionally a student may pass if only one subject is failed but the overall average is greater than or equal to 50. The pass mark for an individual subject is 40.

// function examsFunc(a,b,c){
//     if(a >= 40 && b >= 40 && c >= 40 || (a + b + c) / 3 >= 50){
//         console.log("Passed");
//     }else console.log("Not passed");
// }

// examsFunc(35, 25, 40)


// 11. Find the sign of product of three numbers without multiplication operator. Display the specified sign. 

// function myFunc(a,b,c){
//     if(a,b,c === 0){
//         console.log("unsigned");
//     }else if(a > 0 && b > 0 && c > 0 || a < 0 && b > 0 && c < 0 || a < 0 && b < 0 && c > 0 || a > 0 && b < 0 && c < 0){
//         console.log(" + ");
//     }else if (a < 0 && b < 0 && c < 0 ){
//         console.log(" - ");
//     }else{
//         console.log(" - ");
//     }
// }

// myFunc(-1,-6,-8)

// 12. Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).

// function myFunc(a,b,c){
//     if(a === 0){
//         return console.log("Enter valid constans")
//     }
//     let x = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
//     let y = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
//     if(x === y){
//         return console.log(`Solution is ${x}`)
//     }
//     if(isNaN(x) || isNaN(y)){
//         console.log("Solution does not exists")
//     }
//     else{
//         console.log(`Solutions are ${x} and ${y}`)
//     }
// }
// myFunc(5,-13,6)

// 13. Given the following code rewrite it using only two if operators. (Hint: use logical operators).

// var n = +prompt()

// var i = 0
// var j = 0

// if(n % 2 === 0 && !Math.floor(n / 10)){
//     i += 1
// }
// if(n % 3 === 0 && n % 10 === 1){
//     j += 1
// }


// 14. Insert a digit and a number. Check whether the digits contains in the number or not.

// function checkNumber(a,number){
//     let str = String(number).split("")
//     a = String(a)
//     if(str.includes(a)){
//         console.log("Yes");
//     }else console.log("No");
    
// }

// checkNumber(8,248)

// 15. Enter a number. Reverse its first and last digits. Print the new number.

// function myFunc(n){
//         let arr = String(n).split("")
//         let lastDigit = [...arr].splice(arr.length - 1)
//         let firstDigit = [...arr].splice(0,arr[0])
//         let remaining = [...arr].splice(1, arr.length - 2)
   
//     if(lastDigit != 0){
//         let newArr = [...lastDigit,...remaining,...firstDigit]
//         const result = newArr.join("")
//         console.log(result);
//     }
// }

// myFunc(12345)

// 17. Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive. For the triangle entered numbers are height and and base.


// const answer = prompt("Is triangle or rectangle?")

// if(answer === "triangle"){
//     const height = +prompt("Enter the height triangle")
//     const base  = +prompt("Enter the base triangle")
//     if(height <= 0 || base <= 0){
//         alert("Please enter only positives")
//     }else{ 
//         let result  = (height * base) / 2 
//         alert(`Square of the triangle is ${result}`)
//     }
// }else if(answer === "rectangle"){
//     const height = +prompt("Enter the height rectangle")
//     const base  = +prompt("Enter the base rectangle")
//     if(height <= 0 || base <= 0){
//         alert("Please enter only positives")
//     }else{ 
//         let result = height * base
//         alert(`Square of the rectangle is ${result}`)
//     }
// }else alert(`Please enter only triangle or rectangle`)


// 18.(***) Enter a number. Find the difference between its biggest and smallest digits.


// function myFunc(n){
//     const arr = String(n).split('')
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     const result = max - min
//     console.log(result);
// }

// myFunc(4563278)
