//1a. Subtract the value of the first element in the array from the value in the last element of the array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[ages.length - 1]) - (ages[0]));

//1b. Add a new age to your array and repeat the step above to ensure it is dynamic 
ages.push(31);
console.log((ages[ages.length - 1]) - (ages[0]));

//1c. Use a loop to iterate through the array and calculate the average age
var sum = 0;
for (var i = 0; i < ages.length; i ++){
    sum += parseInt(ages[i], 10);
}
let avg = sum / ages.length;
console.log(avg);

//2a. Use a loop iterate through the array and calculate the average number of letters per name
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let letters = 0;
let a = 0
while(a < names.length) {
    letters += names[a].length; 
    a++;
}
let averageLettersOfNames = letters / names.length;
console.log(averageLettersOfNames);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console
console.log(names.join(' '));

//3. How do you access the last element of any array?
console.log(names.pop(names.length - 1));

//4. How do you access the first element of any array?
console.log(names[0]);

//5. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let nameLengths = [];
for (let i = 0; i < names.length; i ++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
let nameLengthSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i];
}
console.log(nameLengthSum);

//7. Write a function that takes two parameteres, word and n, as arguments and returns the word concatenated to itself n number of times
function repeatMyself(word, n){
    var repeatedWord = "";
    while (n > 0){
        repeatedWord += word;
        n --;
    }
    return repeatedWord;
}
console.log(repeatMyself("Love", 4));

//8. Write a function that takes two parameters, firstName and lastName, and return a full name seperated by a space
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log('Elizabeth', 'Norton');

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
let numbers = [31, 26, 10, 27, 90];
function arraySum(numbers) {
    let numberSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numberSum += numbers[i];
    }
    console.log(numberSum > 100);
}
arraySum(numbers);

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array
let myNumbers = [55, 42, 10, 6];
function averageArray(anArray) {
    let total = 0;
    let arrayLength = anArray.length;
    for(let i = 0; i < anArray.length; i++) {
     total += anArray[i];
    } 
    return total / arrayLength;
}
console.log(averageArray(myNumbers));

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
let anotherNumbers = [90, 5, 9];
let thirdNumbers = [35, 67, 2, 4];

function averagesOfArrays(anotherNumbers, thirdNumbers){
    let thirdNumbersArray = averageArray(thirdNumbers);
    let anotherNumbersArray = averageArray(anotherNumbers);
    if (thirdNumbersArray > anotherNumbersArray){
        return true;
    } 
    return false;
}
console.log(averagesOfArrays(thirdNumbers, anotherNumbers));

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50){
        return true
    }
}
console.log(willBuyDrink(true, 12));

//13. Created a function to see if a person squatted enough weight to win competition
function squat(weight, total){
    if (weight >= total){
        return 'You are the winner!';
    }
}
console.log(squat(231, 225));