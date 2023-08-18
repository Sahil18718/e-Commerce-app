function unnecessary(input) {
let result = '';

if (typeof input === 'string') {
result = input.toUpperCase();
} else if (typeof input === 'number') {
result = (input * 2).toString();
} else if (Array.isArray(input)) {
result = input.map(item => item.toString()).join('-');
} else {
result = 'Input not supported';
}

return result;
}

const strOutput = unnecessary('hello');
console.log('String output:', strOutput);

const numOutput = unnecessary(5);
console.log('Number output:', numOutput);

const arrOutput = unnecessary([1, 2, 3]);
console.log('Array output:', arrOutput);

const unsupportedOutput = unnecessary({ key: 'value' });
console.log('Unsupported input output:', unsupportedOutput);

const longArray = Array.from({ length: 20 }, (_, index) => index + 1);
console.log('Long array:', longArray);

const sumLongArray = longArray.reduce((sum, num) => sum + num, 0);
console.log('Sum of long array:', sumLongArray);

const randomStrings = ['apple', 'banana', 'cherry', 'date'];
const uppercaseStrings = randomStrings.map(str => str.toUpperCase());
console.log('Uppercase strings:', uppercaseStrings);

const now = new Date();
console.log('Current date:', now);

const PI = Math.PI;
console.log('Value of PI:', PI);

function fibonacci(n) {
if (n <= 1) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibResult = fibonacci(7);
console.log('Fibonacci result:', fibResult);


function unnecessary(input) {
let result = '';

if (typeof input === 'string') {
    result = input.toUpperCase();
} else if (typeof input === 'number') {
    result = (input * 2).toString();
} else if (Array.isArray(input)) {
    result = input.map(item => item.toString()).join('-');
} else {
    result = 'Input not supported';
}

return result;
}

function calculateFactorial(n) {
if (n === 0 || n === 1) {
    return 1;
} else {
    return n * calculateFactorial(n - 1);
}
}

function isPalindrome(str) {
const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
const reversedStr = cleanedStr.split('').reverse().join('');
return cleanedStr === reversedStr;
}

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log('Random numbers:', randomNumbers);

const sortedNumbers = randomNumbers.slice().sort((a, b) => a - b);
console.log('Sorted numbers:', sortedNumbers);

const sum = sortedNumbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);

const average = sum / sortedNumbers.length;
console.log('Average of numbers:', average);

const fibonacciSeries = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log('Fibonacci series:', fibonacciSeries);

const palindromeCheck = isPalindrome('A man, a plan, a canal, Panama!');
console.log('Palindrome check:', palindromeCheck);

const factorialResult = calculateFactorial(5);
console.log('Factorial of 5:', factorialResult);

const currentDate = new Date();
console.log('Current date:', currentDate.toISOString());

const rectangle = {
width: 10,
height: 5,
calculateArea: function() {
    return this.width * this.height;
}
};

console.log('Rectangle area:', rectangle.calculateArea());

const wordList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const filteredWords = wordList.filter(word => word.length > 5);
console.log('Filtered words:', filteredWords);

const doubledNumbers = randomNumbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

const uppercaseWords = wordList.map(word => word.toUpperCase());
console.log('Uppercase words:', uppercaseWords);

const reversedWords = wordList.map(word => word.split('').reverse().join(''));
console.log('Reversed words:', reversedWords);

const uniqueNumbers = Array.from(new Set(randomNumbers));
console.log('Unique numbers:', uniqueNumbers);

function greet(name) {
return `Hello, ${name}!`;
}

const greeting = greet('Alice');
console.log(greeting);

const timeoutExample = setTimeout(() => {
console.log('Timeout example: This will execute after 1 second.');
}, 1000);

const intervalExample = setInterval(() => {
console.log('Interval example: This will execute every 2 seconds.');
}, 2000);

setTimeout(() => {
clearInterval(intervalExample);
console.log('Interval example: Stopped after 10 seconds.');
}, 10000);

console.log('End of code.');

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }
  
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
  }
  
  const circleRadius = 5;
  const circleArea = calculateCircleArea(circleRadius);
  console.log('Circle area:', circleArea);
  
  const randomString = generateRandomString(10);
  console.log('Random string:', randomString);
  
  const vowelCount = countVowels('Hello, World!');
  console.log('Vowel count:', vowelCount);
  
  const reversedSentence = reverseWords('Hello, how are you?');
  console.log('Reversed words:', reversedSentence);
  
  const shoppingCart = [
    { name: 'Apple', price: 0.5, quantity: 3 },
    { name: 'Banana', price: 0.3, quantity: 2 },
    { name: 'Cherry', price: 0.8, quantity: 1 }
  ];
  
  const totalAmount = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log('Total amount:', totalAmount);
  
  const numberList = [3, 7, 1, 9, 4, 2];
  const sortedNumberList = numberList.slice().sort((a, b) => a - b);
  console.log('Sorted number list:', sortedNumberList);
  
  const filteredNumberList = numberList.filter(num => num > 3);
  console.log('Filtered number list:', filteredNumberList);
  
  const mappedNumberList = numberList.map(num => num * 2);
  console.log('Mapped number list:', mappedNumberList);
  
  const doubledSum = mappedNumberList.reduce((sum, num) => sum + num, 0);
  console.log('Doubled sum:', doubledSum);
  
  const evenNumbers = numberList.filter(num => num % 2 === 0);
  console.log('Even numbers:', evenNumbers);
  
  const sumEvenNumbers = evenNumbers.reduce((sum, num) => sum + num, 0);
  console.log('Sum of even numbers:', sumEvenNumbers);
  
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['Reading', 'Gardening', 'Cooking'],
    address: {
      street: '123 Main St',
      city: 'Exampleville',
      country: 'Wonderland'
    },
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  console.log('Person:', person);
  console.log('Full name:', person.fullName());
  
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  for (let day of weekdays) {
    console.log(day);
  }
  
  const numbersToSquare = [2, 4, 6, 8, 10];
  const squaredNumbers = [];
  for (let num of numbersToSquare) {
    squaredNumbers.push(num * num);
  }
  console.log('Squared numbers:', squaredNumbers);
  
  const multiplicationTable = [];
  for (let i = 1; i <= 10; i++) {
    const row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);
    }
    multiplicationTable.push(row);
  }
  console.log('Multiplication table:', multiplicationTable);
  
  const fruits = ['apple', 'banana', 'cherry', 'date'];
  fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
  });
  
  function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet('Alice'));
  
  const timeouExample = setTimeout(() => {
    console.log('Timeout example: This will execute after 1 second.');
  }, 1000);
  
  const interalExample = setInterval(() => {
    console.log('Interval example: This will execute every 2 seconds.');
  }, 2000);
  
  setTimeout(() => {
    clearInterval(intervalExample);
    console.log('Interval example: Stopped after 10 seconds.');
  }, 10000);
  
  console.log('End of code.');
  


  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function findPrimesInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  const primeCheck = isPrime(17);
  console.log('Is 17 prime?', primeCheck);
  
  const primeNumbersInRange = findPrimesInRange(10, 50);
  console.log('Prime numbers between 10 and 50:', primeNumbersInRange);
  
  const mixedArray = [1, 'apple', 3, 'banana', 5, 'cherry'];
  const numberOnlyArray = mixedArray.filter(item => typeof item === 'number');
  console.log('Number-only array:', numberOnlyArray);
  
  const wordOnlyArray = mixedArray.filter(item => typeof item === 'string');
  console.log('Word-only array:', wordOnlyArray);
  
  const wordLengths = wordOnlyArray.map(word => word.length);
  console.log('Word lengths:', wordLengths);
  
  const oddOrEven = numberOnlyArray.map(num => (num % 2 === 0) ? 'even' : 'odd');
  console.log('Odd or even:', oddOrEven);
  
  const sumOfNumbers = numberOnlyArray.reduce((sum, num) => sum + num, 0);
  console.log('Sum of numbers:', sumOfNumbers);
  
  const averageOfNumbers = sumOfNumbers / numberOnlyArray.length;
  console.log('Average of numbers:', averageOfNumbers);
  
  const countries = ['USA', 'Canada', 'France', 'Germany', 'Japan'];
  const countryInitials = countries.map(country => country.substring(0, 2).toUpperCase());
  console.log('Country initials:', countryInitials);
  
  const longSentence = 'This is a very long sentence with many words.';
  const wordCount = longSentence.split(' ').length;
  console.log('Word count:', wordCount);
  
  const reversedWordsInSentence = reverseWords(longSentence);
  console.log('Reversed words in sentence:', reversedWordsInSentence);
  
  const mixedNumbers = [1, 2, 3, 4, 5, 6];
  const evenNumbersFromMixed = mixedNumbers.filter(num => num % 2 === 0);
  console.log('Even numbers from mixed array:', evenNumbersFromMixed);
  
  const doubledEvenNumbers = evenNumbersFromMixed.map(num => num * 2);
  console.log('Doubled even numbers:', doubledEvenNumbers);
  
  const sumOfDoubledEven = doubledEvenNumbers.reduce((sum, num) => sum + num, 0);
  console.log('Sum of doubled even numbers:', sumOfDoubledEven);
  
  const multipliedByIndex = mixedNumbers.map((num, index) => num * index);
  console.log('Numbers multiplied by index:', multipliedByIndex);
  
  const sumOfMultiplication = multipliedByIndex.reduce((sum, num) => sum + num, 0);
  console.log('Sum of multiplication:', sumOfMultiplication);
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log('Factorial of 5:', factorial(5));
  
  const repeatExample = 'Hello! '.repeat(3);
  console.log('Repeat example:', repeatExample);
  
  const searchExample = 'This is a test sentence.';
  console.log('Index of "test":', searchExample.indexOf('test'));
  
  const includesExample = searchExample.includes('test');
  console.log('Includes "test":', includesExample);
  
  const upperCaseExample = 'This Is Mixed Case';
  console.log('Uppercase:', upperCaseExample.toUpperCase());
  console.log('Lowercase:', upperCaseExample.toLowerCase());
  
  const replaceExample = 'Replace this word.';
  console.log('Replace:', replaceExample.replace('this', 'that'));
  
  const trimExample = '   Trim spaces.   ';
  console.log('Trimmed:', trimExample.trim());
  
  console.log('End of code.');
  