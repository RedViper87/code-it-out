// script.js

// Initialize CodeMirror
const textarea = document.getElementById('code-editor');
const editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    autoCloseBrackets: true,
    matchBrackets: true,
    tabSize: 4,
    indentUnit: 4,
    indentWithTabs: false,
    autofocus: true
});

// Challenges Array
const challenges = [
    {
        id: 1,
        title: "Sum of Two Numbers",
        functionName: "sum",
        difficulty: "easy",
        description: "Write a function named <code>sum</code> that takes two numbers as arguments and returns their sum.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>sum</code>.",
                "Add two parameters inside the parentheses.",
                "Return the sum of the two parameters."
            ],
            example: `function sum(a, b) {
        return a + b;
    }`
        },
        testCases: [
            { args: [2, 3], expected: 5 },
            { args: [-1, 1], expected: 0 },
            { args: [0, 0], expected: 0 },
            { args: [100, 200], expected: 300 }
        ]
    },
    {
        id: 2,
        title: "Find the Maximum",
        functionName: "max",
        difficulty: "easy",
        description: "Write a function named <code>max</code> that takes two numbers as arguments and returns the larger one.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>max</code>.",
                "Add two parameters inside the parentheses.",
                "Use an <code>if</code> statement to compare the two parameters.",
                "Return the larger number."
            ],
            example: `function max(a, b) {
        if(a > b) {
            return a;
        } else {
            return b;
        }
    }`
        },
        testCases: [
            { args: [5, 10], expected: 10 },
            { args: [-5, -10], expected: -5 },
            { args: [0, 0], expected: 0 },
            { args: [100, 50], expected: 100 }
        ]
    },
    {
        id: 3,
        title: "Check Even Number",
        functionName: "isEven",
        difficulty: "easy",
        description: "Write a function named <code>isEven</code> that takes a number as an argument and returns <code>true</code> if it's even, otherwise <code>false</code>.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>isEven</code>.",
                "Add one parameter inside the parentheses.",
                "Use the modulo operator to check if the number is divisible by 2.",
                "Return <code>true</code> or <code>false</code> based on the condition."
            ],
            example: `function isEven(n) {
        return n % 2 === 0;
    }`
        },
        testCases: [
            { args: [4], expected: true },
            { args: [7], expected: false },
            { args: [0], expected: true },
            { args: [-2], expected: true }
        ]
    },
    {
        id: 4,
        title: "Factorial",
        functionName: "factorial",
        difficulty: "easy",
        description: "Write a function named <code>factorial</code> that takes a number as an argument and returns its factorial.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>factorial</code>.",
                "Add one parameter inside the parentheses.",
                "Use a loop to calculate the factorial.",
                "Return the factorial value."
            ],
            example: `function factorial(n) {
        let result = 1;
        for(let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }`
        },
        testCases: [
            { args: [5], expected: 120 },
            { args: [0], expected: 1 },
            { args: [3], expected: 6 },
            { args: [7], expected: 5040 }
        ]
    },
    {
        id: 5,
        title: "Reverse a String",
        functionName: "reverseString",
        difficulty: "easy",
        description: "Write a function named <code>reverseString</code> that takes a string as an argument and returns the reversed string.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>reverseString</code>.",
                "Add one parameter inside the parentheses.",
                "Use built-in string and array methods to reverse the string.",
                "Return the reversed string."
            ],
            example: `function reverseString(str) {
        return str.split('').reverse().join('');
    }`
        },
        testCases: [
            { args: ["hello"], expected: "olleh" },
            { args: ["JavaScript"], expected: "tpircSavaJ" },
            { args: [""], expected: "" },
            { args: ["12345"], expected: "54321" }
        ]
    },
    {
        id: 6,
        title: "Fibonacci Sequence",
        functionName: "fibonacci",
        difficulty: "medium",
        description: "Write a function named <code>fibonacci</code> that takes a number <code>n</code> and returns the first <code>n</code> numbers of the Fibonacci sequence.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>fibonacci</code>.",
                "Add one parameter inside the parentheses.",
                "Use a loop to generate the Fibonacci sequence.",
                "Return the sequence as an array."
            ],
            example: `function fibonacci(n) {
        const seq = [0, 1];
        for(let i = 2; i < n; i++) {
            seq.push(seq[i-1] + seq[i-2]);
        }
        return seq.slice(0, n);
    }`
        },
        testCases: [
            { args: [5], expected: [0,1,1,2,3] },
            { args: [1], expected: [0] },
            { args: [0], expected: [] },
            { args: [7], expected: [0,1,1,2,3,5,8] }
        ]
    },
    {
        id: 7,
        title: "Palindrome Checker",
        functionName: "isPalindrome",
        difficulty: "medium",
        description: "Write a function named <code>isPalindrome</code> that takes a string and returns <code>true</code> if it's a palindrome, otherwise <code>false</code>.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>isPalindrome</code>.",
                "Add one parameter inside the parentheses.",
                "Remove non-alphanumeric characters and convert to lowercase.",
                "Check if the string is equal to its reverse.",
                "Return <code>true</code> or <code>false</code> accordingly."
            ],
            example: `function isPalindrome(str) {
        const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    }`
        },
        testCases: [
            { args: ["racecar"], expected: true },
            { args: ["hello"], expected: false },
            { args: ["A man, a plan, a canal: Panama"], expected: true },
            { args: ["12321"], expected: true }
        ]
    },
    {
        id: 8,
        title: "Merge Two Arrays",
        functionName: "mergeArrays",
        difficulty: "medium",
        description: "Write a function named <code>mergeArrays</code> that takes two arrays and returns a merged array without duplicates.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>mergeArrays</code>.",
                "Add two parameters inside the parentheses.",
                "Combine the arrays and remove duplicates.",
                "Return the merged array."
            ],
            example: `function mergeArrays(arr1, arr2) {
        return [...new Set([...arr1, ...arr2])];
    }`
        },
        testCases: [
            { args: [[1,2,3], [3,4,5]], expected: [1,2,3,4,5] },
            { args: [["a","b"], ["b","c"]], expected: ["a","b","c"] },
            { args: [[], [1,2]], expected: [1,2] },
            { args: [[1,1,1], [1,1,1]], expected: [1] }
        ]
    },
    {
        id: 9,
        title: "Count Vowels",
        functionName: "countVowels",
        difficulty: "medium",
        description: "Write a function named <code>countVowels</code> that takes a string and returns the number of vowels in it.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>countVowels</code>.",
                "Add one parameter inside the parentheses.",
                "Use a regular expression to match vowels.",
                "Return the count of matched vowels."
            ],
            example: `function countVowels(str) {
        const matches = str.match(/[aeiouAEIOU]/g);
        return matches ? matches.length : 0;
    }`
        },
        testCases: [
            { args: ["hello"], expected: 2 },
            { args: ["xyz"], expected: 0 },
            { args: ["AEIOUaeiou"], expected: 10 },
            { args: [""], expected: 0 }
        ]
    },
    {
        id: 10,
        title: "Remove Duplicates",
        functionName: "removeDuplicates",
        difficulty: "medium",
        description: "Write a function named <code>removeDuplicates</code> that takes an array and returns a new array with duplicates removed.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>removeDuplicates</code>.",
                "Add one parameter inside the parentheses.",
                "Use a Set to remove duplicates.",
                "Return the new array."
            ],
            example: `function removeDuplicates(arr) {
        return [...new Set(arr)];
    }`
        },
        testCases: [
            { args: [[1,2,2,3,4,4,5]], expected: [1,2,3,4,5] },
            { args: [["a","b","a","c"]], expected: ["a","b","c"] },
            { args: [[], []], expected: [] },
            { args: [[true, false, true]], expected: [true, false] }
        ]
    },
    {
        id: 11,
        title: "Find Prime Numbers",
        functionName: "findPrimes",
        difficulty: "hard",
        description: "Write a function named <code>findPrimes</code> that takes a number <code>n</code> and returns an array of prime numbers up to <code>n</code>.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>findPrimes</code>.",
                "Add one parameter inside the parentheses.",
                "Use a loop to check each number for primality.",
                "Collect and return prime numbers in an array."
            ],
            example: `function findPrimes(n) {
        const primes = [];
        for(let i = 2; i <= n; i++) {
            let isPrime = true;
            for(let j = 2; j <= Math.sqrt(i); j++) {
                if(i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) primes.push(i);
        }
        return primes;
    }`
        },
        testCases: [
            { args: [10], expected: [2,3,5,7] },
            { args: [1], expected: [] },
            { args: [0], expected: [] },
            { args: [20], expected: [2,3,5,7,11,13,17,19] }
        ]
    },
    {
        id: 12,
        title: "Capitalize Words",
        functionName: "capitalizeWords",
        difficulty: "hard",
        description: "Write a function named <code>capitalizeWords</code> that takes a string and returns the string with each word capitalized.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>capitalizeWords</code>.",
                "Add one parameter inside the parentheses.",
                "Split the string into words.",
                "Capitalize the first letter of each word.",
                "Join and return the modified string."
            ],
            example: `function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }`
        },
        testCases: [
            { args: ["hello world"], expected: "Hello World" },
            { args: ["javaScript is fun"], expected: "JavaScript Is Fun" },
            { args: [""], expected: "" },
            { args: ["a quick brown fox"], expected: "A Quick Brown Fox" }
        ]
    },
    {
        id: 13,
        title: "Sum of Array",
        functionName: "sumArray",
        difficulty: "hard",
        description: "Write a function named <code>sumArray</code> that takes an array of numbers and returns the sum of all elements.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>sumArray</code>.",
                "Add one parameter inside the parentheses.",
                "Use the <code>reduce</code> method to sum the elements.",
                "Return the total sum."
            ],
            example: `function sumArray(arr) {
        return arr.reduce((acc, num) => acc + num, 0);
    }`
        },
        testCases: [
            { args: [[1,2,3,4,5]], expected: 15 },
            { args: [[10, -10, 10]], expected: 10 },
            { args: [[]], expected: 0 },
            { args: [[100, 200, 300]], expected: 600 }
        ]
    },
    {
        id: 14,
        title: "Find Longest Word",
        functionName: "findLongestWord",
        difficulty: "hard",
        description: "Write a function named <code>findLongestWord</code> that takes a string and returns the longest word in the string.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>findLongestWord</code>.",
                "Add one parameter inside the parentheses.",
                "Split the string into words.",
                "Iterate to find the longest word.",
                "Return the longest word."
            ],
            example: `function findLongestWord(str) {
        const words = str.split(' ');
        let longest = '';
        words.forEach(word => {
            if(word.length > longest.length) {
                longest = word;
            }
        });
        return longest;
    }`
        },
        testCases: [
            { args: ["The quick brown fox jumps over the lazy dog"], expected: ["quick", "jumps"] },
            { args: ["Hello world"], expected: ["Hello", "world"] },
            { args: [""], expected: "" },
            { args: ["a bb ccc dddd"], expected: "dddd" }
        ]
    },
    {
        id: 15,
        title: "Count Characters",
        functionName: "countCharacters",
        difficulty: "hard",
        description: "Write a function named <code>countCharacters</code> that takes a string and returns an object with the count of each character.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>countCharacters</code>.",
                "Add one parameter inside the parentheses.",
                "Iterate through each character in the string.",
                "Count the occurrences using an object.",
                "Return the object with character counts."
            ],
            example: `function countCharacters(str) {
        const counts = {};
        for(let char of str) {
            counts[char] = (counts[char] || 0) + 1;
        }
        return counts;
    }`
        },
        testCases: [
            { args: ["hello"], expected: { h:1, e:1, l:2, o:1 } },
            { args: ["aabbcc"], expected: { a:2, b:2, c:2 } },
            { args: [""], expected: {} },
            { args: ["JavaScript"], expected: { J:1, a:2, v:1, S:1, c:1, r:1, i:1, p:1, t:1 } }
        ]
    },
    {
        id: 16,
        title: "Remove Falsy Values",
        functionName: "removeFalsy",
        difficulty: "hard",
        description: "Write a function named <code>removeFalsy</code> that takes an array and returns a new array with all falsy values removed.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>removeFalsy</code>.",
                "Add one parameter inside the parentheses.",
                "Use the <code>filter</code> method to remove falsy values.",
                "Return the filtered array."
            ],
            example: `function removeFalsy(arr) {
        return arr.filter(Boolean);
    }`
        },
        testCases: [
            { args: [[0,1,false,2,"",3]], expected: [1,2,3] },
            { args: [[null, undefined, NaN, 'hello']], expected: ['hello'] },
            { args: [[true, 'a', 5]], expected: [true,"a",5] },
            { args: [[]], expected: [] }
        ]
    },
    {
        id: 17,
        title: "Flatten Nested Arrays",
        functionName: "flattenArray",
        difficulty: "hard",
        description: "Write a function named <code>flattenArray</code> that takes a nested array and returns a flattened array.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>flattenArray</code>.",
                "Add one parameter inside the parentheses.",
                "Use recursion or the <code>flat</code> method to flatten the array.",
                "Return the flattened array."
            ],
            example: `function flattenArray(arr) {
        return arr.flat(Infinity);
    }`
        },
        testCases: [
            { args: [[1, [2, [3, 4], 5], 6]], expected: [1,2,3,4,5,6] },
            { args: [[['a'], ['b', ['c']]]], expected: ['a','b','c'] },
            { args: [[1,2,3]], expected: [1,2,3] },
            { args: [[]], expected: [] }
        ]
    },
    {
        id: 18,
        title: "Sum of Odd Numbers",
        functionName: "sumOdds",
        difficulty: "hard",
        description: "Write a function named <code>sumOdds</code> that takes an array of numbers and returns the sum of all odd numbers.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>sumOdds</code>.",
                "Add one parameter inside the parentheses.",
                "Filter out odd numbers from the array.",
                "Use the <code>reduce</code> method to sum them.",
                "Return the sum."
            ],
            example: `function sumOdds(arr) {
        return arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
    }`
        },
        testCases: [
            { args: [[1,2,3,4,5]], expected: 9 },
            { args: [[10, 21, 4, 45, 66]], expected: 66 },
            { args: [[2,4,6]], expected: 0 },
            { args: [[7,7,7,7]], expected: 28 }
        ]
    },
    {
        id: 19,
        title: "Find Intersection",
        functionName: "findIntersection",
        difficulty: "hard",
        description: "Write a function named <code>findIntersection</code> that takes two arrays and returns their intersection.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>findIntersection</code>.",
                "Add two parameters inside the parentheses.",
                "Use the <code>filter</code> method to find common elements.",
                "Use a Set to avoid duplicates.",
                "Return the intersection array."
            ],
            example: `function findIntersection(arr1, arr2) {
        const set2 = new Set(arr2);
        return [...new Set(arr1)].filter(item => set2.has(item));
    }`
        },
        testCases: [
            { args: [[1,2,3], [2,3,4]], expected: [2,3] },
            { args: [["a","b","c"], ["b","c","d"]], expected: ["b","c"] },
            { args: [[1,1,2,2], [2,2,3,3]], expected: [2] },
            { args: [[true, false], [false, false]], expected: [false] }
        ]
    },
    {
        id: 20,
        title: "FizzBuzz",
        functionName: "fizzBuzz",
        difficulty: "hard",
        description: "Write a function named <code>fizzBuzz</code> that takes a number <code>n</code> and returns an array with numbers from 1 to <code>n</code>. But for multiples of three, add 'Fizz' instead of the number and for the multiples of five add 'Buzz'. For numbers which are multiples of both three and five, add 'FizzBuzz'.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>fizzBuzz</code>.",
                "Add one parameter inside the parentheses.",
                "Iterate from 1 to <code>n</code>.",
                "Apply the FizzBuzz rules.",
                "Push the result into an array.",
                "Return the array."
            ],
            example: `function fizzBuzz(n) {
        const result = [];
        for(let i = 1; i <= n; i++) {
            if(i % 15 === 0) {
                result.push('FizzBuzz');
            } else if(i % 3 === 0) {
                result.push('Fizz');
            } else if(i % 5 === 0) {
                result.push('Buzz');
            } else {
                result.push(i);
            }
        }
        return result;
    }`
        },
        testCases: [
            { args: [5], expected: [1,2,'Fizz',4,'Buzz'] },
            { args: [15], expected: [1,2,'Fizz',4,'Buzz', 'Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'] },
            { args: [0], expected: [] },
            { args: [3], expected: [1,2,'Fizz'] }
        ]
    },
    {
        id: 21,
        title: "Find Anagrams",
        functionName: "findAnagrams",
        difficulty: "medium",
        description: "Write a function named <code>findAnagrams</code> that takes two strings and returns <code>true</code> if they are anagrams of each other, otherwise <code>false</code>.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>findAnagrams</code>.",
                "Add two parameters inside the parentheses.",
                "Remove any non-alphabetic characters and convert both strings to lowercase.",
                "Sort the characters of both strings.",
                "Compare the sorted strings and return <code>true</code> or <code>false</code> accordingly."
            ],
            example: `function findAnagrams(str1, str2) {
        const normalize = str => str.replace(/[^A-Za-z]/g, '').toLowerCase().split('').sort().join('');
        return normalize(str1) === normalize(str2);
    }`
        },
        testCases: [
            { args: ["listen", "silent"], expected: true },
            { args: ["hello", "billion"], expected: false },
            { args: ["Dormitory", "Dirty room##"], expected: true },
            { args: ["The eyes", "They see"], expected: true }
        ]
    },
    {
        id: 22,
        title: "Implement Binary Search",
        functionName: "binarySearch",
        difficulty: "hard",
        description: "Write a function named <code>binarySearch</code> that takes a sorted array and a target value, and returns the index of the target value using the binary search algorithm. If the target is not found, return -1.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>binarySearch</code>.",
                "Add two parameters inside the parentheses.",
                "Initialize two pointers: <code>left</code> and <code>right</code>.",
                "Use a loop to repeatedly divide the search interval in half.",
                "Return the index if the target is found, otherwise return -1."
            ],
            example: `function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid] === target) return mid;
            else if(arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }`
        },
        testCases: [
            { args: [[1,2,3,4,5,6,7,8,9], 5], expected: 4 },
            { args: [[10,20,30,40,50], 25], expected: -1 },
            { args: [[2,4,6,8,10], 2], expected: 0 },
            { args: [[1,3,5,7,9], 9], expected: 4 }
        ]
    },
    {
        id: 23,
        title: "Calculate GCD",
        functionName: "gcd",
        difficulty: "medium",
        description: "Write a function named <code>gcd</code> that takes two positive integers and returns their greatest common divisor using the Euclidean algorithm.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>gcd</code>.",
                "Add two parameters inside the parentheses.",
                "Implement the Euclidean algorithm using recursion or iteration.",
                "Return the GCD."
            ],
            example: `function gcd(a, b) {
        while(b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }`
        },
        testCases: [
            { args: [48, 18], expected: 6 },
            { args: [100, 10], expected: 10 },
            { args: [7, 3], expected: 1 },
            { args: [54, 24], expected: 6 }
        ]
    },
    {
        id: 24,
        title: "Matrix Transpose",
        functionName: "transposeMatrix",
        difficulty: "hard",
        description: "Write a function named <code>transposeMatrix</code> that takes a two-dimensional array (matrix) and returns its transpose.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>transposeMatrix</code>.",
                "Add one parameter inside the parentheses.",
                "Use nested loops or array methods to transpose the matrix.",
                "Return the transposed matrix."
            ],
            example: `function transposeMatrix(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }`
        },
        testCases: [
            { args: [[[1,2,3],[4,5,6]]], expected: [[1,4],[2,5],[3,6]] },
            { args: [[[1,2],[3,4],[5,6]]], expected: [[1,3,5],[2,4,6]] },
            { args: [[[]]], expected: [] },
            { args: [[[1]]], expected: [[1]] }
        ]
    },
    {
        id: 25,
        title: "Implement Quick Sort",
        functionName: "quickSort",
        difficulty: "hard",
        description: "Write a function named <code>quickSort</code> that takes an array of numbers and returns a sorted array using the Quick Sort algorithm.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>quickSort</code>.",
                "Add one parameter inside the parentheses.",
                "Implement the Quick Sort algorithm using recursion.",
                "Return the sorted array."
            ],
            example: `function quickSort(arr) {
        if(arr.length <= 1) return arr;
        const pivot = arr[arr.length -1];
        const left = [];
        const right = [];
        for(let i =0; i < arr.length -1; i++) {
            if(arr[i] < pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }`
        },
        testCases: [
            { args: [[5,2,9,1,5,6]], expected: [1,2,5,5,6,9] },
            { args: [[3,1,4,1,5,9,2,6]], expected: [1,1,2,3,4,5,6,9] },
            { args: [[], []], expected: [] },
            { args: [[10]], expected: [10] }
        ]
    },
    {
        id: 26,
        title: "Find Unique Elements",
        functionName: "findUnique",
        difficulty: "medium",
        description: "Write a function named <code>findUnique</code> that takes an array and returns a new array containing only the unique elements.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>findUnique</code>.",
                "Add one parameter inside the parentheses.",
                "Use a Set or other method to filter out duplicate elements.",
                "Return the array of unique elements."
            ],
            example: `function findUnique(arr) {
        return [...new Set(arr)];
    }`
        },
        testCases: [
            { args: [[1,2,2,3,4,4,5]], expected: [1,2,3,4,5] },
            { args: [["a","b","a","c"]], expected: ["a","b","c"] },
            { args: [[], []], expected: [] },
            { args: [[true, false, true]], expected: [true, false] }
        ]
    },
    {
        id: 27,
        title: "Date Formatter",
        functionName: "formatDate",
        difficulty: "medium",
        description: "Write a function named <code>formatDate</code> that takes a JavaScript Date object and returns a string in the format <code>YYYY-MM-DD</code>.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>formatDate</code>.",
                "Add one parameter inside the parentheses.",
                "Extract the year, month, and day from the Date object.",
                "Ensure that month and day are two digits by padding with zeros if necessary.",
                "Return the formatted date string."
            ],
            example: `function formatDate(date) {
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return \`\${year}-\${month}-\${day}\`;
    }`
        },
        testCases: [
            { args: [new Date('2023-09-24')], expected: "2023-09-24" },
            { args: [new Date('1999-01-05')], expected: "1999-01-05" },
            { args: [new Date('2000-12-31')], expected: "2000-12-31" },
            { args: [new Date('2021-07-04')], expected: "2021-07-04" }
        ]
    },
    {
        id: 28,
        title: "Remove Specified Keys from Object",
        functionName: "removeKeys",
        difficulty: "hard",
        description: "Write a function named <code>removeKeys</code> that takes an object and an array of keys, and returns a new object with the specified keys removed.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>removeKeys</code>.",
                "Add two parameters inside the parentheses.",
                "Use object destructuring or other methods to exclude the specified keys.",
                "Return the new object."
            ],
            example: `function removeKeys(obj, keys) {
        const newObj = { ...obj };
        keys.forEach(key => delete newObj[key]);
        return newObj;
    }`
        },
        testCases: [
            { args: [{a:1, b:2, c:3}, ['b']], expected: {a:1, c:3} },
            { args: [{name: "Alice", age: 25, city: "Wonderland"}, ['age', 'city']], expected: {name: "Alice"} },
            { args: [{x:10, y:20}, ['z']], expected: {x:10, y:20} },
            { args: [{}, ['a']], expected: {} }
        ]
    },
    {
        id: 29,
        title: "Implement Insertion Sort",
        functionName: "insertionSort",
        difficulty: "hard",
        description: "Write a function named <code>insertionSort</code> that takes an array of numbers and returns a sorted array using the Insertion Sort algorithm.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>insertionSort</code>.",
                "Add one parameter inside the parentheses.",
                "Implement the Insertion Sort algorithm using loops.",
                "Return the sorted array."
            ],
            example: `function insertionSort(arr) {
        for(let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i -1;
            while(j >=0 && arr[j] > key) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
        return arr;
    }`
        },
        testCases: [
            { args: [[5,2,9,1,5,6]], expected: [1,2,5,5,6,9] },
            { args: [[3,1,4,1,5,9,2,6]], expected: [1,1,2,3,4,5,6,9] },
            { args: [[], []], expected: [] },
            { args: [[10]], expected: [10] }
        ]
    },
    {
        id: 30,
        title: "Group By Property",
        functionName: "groupBy",
        difficulty: "medium",
        description: "Write a function named <code>groupBy</code> that takes an array of objects and a property name, and returns an object where the keys are the property values and the values are arrays of objects that have that property value.",
        instructions: {
            steps: [
                "Define a function using the <code>function</code> keyword.",
                "Name the function <code>groupBy</code>.",
                "Add two parameters inside the parentheses.",
                "Iterate over the array and group objects based on the specified property.",
                "Return the grouped object."
            ],
            example: `function groupBy(arr, prop) {
        return arr.reduce((acc, obj) => {
            const key = obj[prop];
            if(!acc[key]) acc[key] = [];
            acc[key].push(obj);
            return acc;
        }, {});
    }`
        },
        testCases: [
            { args: [[{age: 21}, {age: 25}, {age: 21}], 'age'], expected: { '21': [{age:21}, {age:21}], '25': [{age:25}] } },
            { args: [[{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}], 'type'], expected: { 'fruit': [{type:'fruit', name:'apple'}, {type:'fruit', name:'banana'}], 'vegetable': [{type:'vegetable', name:'carrot'}] } },
            { args: [[{color: 'red'}, {color: 'blue'}, {color: 'red'}, {color: 'green'}], 'color'], expected: { 'red': [{color:'red'}, {color:'red'}], 'blue': [{color:'blue'}], 'green': [{color:'green'}] } },
            { args: [[{name: 'Alice'}, {name: 'Bob'}, {name: 'Alice'}], 'name'], expected: { 'Alice': [{name:'Alice'}, {name:'Alice'}], 'Bob': [{name:'Bob'}] } }
        ]
    }
];

// Points and Badges Configuration
const badgesConfig = [
    { name: "Beginner", criteria: { points: 10 }, image: "🥇", description: "Earned by accumulating 10 points." },
    { name: "Intermediate", criteria: { points: 50 }, image: "🥈", description: "Earned by accumulating 50 points." },
    { name: "Advanced", criteria: { points: 100 }, image: "🥉", description: "Earned by accumulating 100 points." },
    { name: "Master", criteria: { points: 200 }, image: "🏆", description: "Earned by accumulating 200 points." },
    { name: "Grandmaster", criteria: { points: 300 }, image: "🎖️", description: "Earned by accumulating 300 points." },
    { name: "Legend", criteria: { points: 500 }, image: "🌟", description: "Earned by accumulating 500 points." },
    { name: "Champion", criteria: { points: 750 }, image: "🏅", description: "Earned by accumulating 750 points." },
    { name: "Coder Pro", criteria: { points: 1000 }, image: "💻", description: "Earned by accumulating 1000 points." },
    { name: "Completionist", criteria: { completedChallenges: 30 }, image: "🎯", description: "Earned by completing all 30 challenges." },
    { name: "Speedster", criteria: { fastestCompletionTime: 60 }, image: "⚡", description: "Earned by completing a challenge in under 60 seconds." },
    { name: "Perfectionist", criteria: { flawlessCompletions: 10 }, image: "🔍", description: "Earned by flawlessly completing 10 challenges." }, //need to do
    { name: "Bug Finder", criteria: { bugsFound: 50 }, image: "🐛", description: "Earned by finding and reporting 50 bugs." }, //need to do
    { name: "Code Ninja", criteria: { advancedTechniquesUsed: 20 }, image: "🥷", description: "Earned by using 20 advanced coding techniques." }, //need to do
    { name: "Explorer", criteria: { challengesExplored: 15 }, image: "🧭", description: "Earned by exploring 15 different challenge categories." },
    { name: "Marathoner", criteria: { totalHoursCoding: 100 }, image: "🏃‍♂️", description: "Earned by coding for a total of 100 hours." }
];

// Points Per Difficulty
const pointsPerDifficulty = {
    easy: 5,
    medium: 10,
    hard: 15
};

// Initialize or Retrieve User Data from localStorage
let storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
const defaultUserData = {
    currentLevel: 1,
    points: 0,
    completedLevels: {},
    badges: [],
    theme: 'dark', // 'dark' or 'light'
    fastestCompletionTime: {}, // { challengeId: timeInSeconds }
    flawlessCompletions: 0,
    bugsFound: 0,
    advancedTechniquesUsed: 0,
    challengesExplored: 0,
    totalHoursCoding: 0
};

// Merge storedUserData with defaultUserData to ensure all properties are present
let userData = { ...defaultUserData, ...storedUserData };

// Ensure nested objects are also merged safely
userData.completedLevels = { 
    ...defaultUserData.completedLevels, 
    ...(storedUserData.completedLevels || {}) 
};
userData.fastestCompletionTime = { 
    ...defaultUserData.fastestCompletionTime, 
    ...(storedUserData.fastestCompletionTime || {}) 
};

// DOM Elements
const currentLevelElem = document.getElementById('current-level');
const pointsElem = document.getElementById('points');
const instructionsElem = document.getElementById('instructions');
const challengeElem = document.getElementById('challenge');
const feedbackElem = document.getElementById('feedback');
const badgeListElem = document.getElementById('badge-list');
const allBadgesListElem = document.getElementById('all-badges-list');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const hamburgerMenu = document.getElementById('hamburger-menu');
const settingsPanel = document.getElementById('settings-panel');
const themeToggle = document.getElementById('theme-toggle');
const resetButton = document.getElementById('reset-button');

// Timer Variables
let challengeStartTime = null;

// Function to Load Challenge
function loadChallenge(level) {
    const challenge = challenges.find(c => c.id === level);
    if (!challenge) return;

    // Update Current Level and Points
    currentLevelElem.textContent = level;
    pointsElem.textContent = userData.points;

    // Update Challenge Description
    challengeElem.innerHTML = `
        <h2>Challenge ${challenge.id}: ${challenge.title}</h2>
        <p>${challenge.description}</p>
    `;

    // Update Instructions
    instructionsElem.innerHTML = `
        <p><strong>Challenge ${challenge.id}: ${challenge.title}</strong></p>
        <p>${challenge.description}</p>
        <h3>How to Write the Function:</h3>
        <ol>
            ${challenge.instructions.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
        <h3>Example:</h3>
        <pre><code>${challenge.instructions.example}</code></pre>
    `;

    // Load Previous Code if exists
    if (userData.completedLevels[level] && userData.completedLevels[level].code) {
        editor.setValue(userData.completedLevels[level].code);
    } else {
        editor.setValue('');
    }

    // Clear Feedback
    feedbackElem.className = 'feedback';
    feedbackElem.innerHTML = '';

    // Update Navigation Buttons
    prevButton.disabled = level === 1;
    nextButton.disabled = level === challenges.length;

    // Start Timer
    challengeStartTime = Date.now();
}

// Function to Update Badges in Sidebar
function updateBadges() {
    badgeListElem.innerHTML = '';
    badgesConfig.forEach(badge => {
        if (userData.points >= badge.criteria.points && !userData.badges.includes(badge.name)) {
            userData.badges.push(badge.name);
            userData.points += 10; // Bonus points for earning a badge
            saveUserData();
        }
        if (userData.badges.includes(badge.name)) {
            const badgeElem = document.createElement('div');
            badgeElem.classList.add('badge');
            badgeElem.setAttribute('data-tooltip', badge.name + " - " + badge.description);
            badgeElem.innerHTML = badge.image;
            badgeListElem.appendChild(badgeElem);
        }
    });
}

// Function to Update All Badges List in Settings
function updateAllBadgesList() {
    allBadgesListElem.innerHTML = '';
    badgesConfig.forEach(badge => {
        const listItem = document.createElement('li');

        const badgeIcon = document.createElement('span');
        badgeIcon.classList.add('badge-icon');
        badgeIcon.textContent = badge.image;

        const badgeName = document.createElement('span');
        badgeName.classList.add('badge-name');
        badgeName.textContent = badge.name;

        const status = document.createElement('span');
        status.classList.add('status');
        if (userData.badges.includes(badge.name)) {
            status.textContent = "Collected";
        } else {
            status.textContent = "Not Collected";
            status.classList.add('not-collected');
        }

        listItem.appendChild(badgeIcon);
        listItem.appendChild(badgeName);
        listItem.appendChild(status);

        allBadgesListElem.appendChild(listItem);
    });
}

// Function to Update Badges in Settings Panel
function updateSettingsBadges() {
    updateAllBadgesList();
}

// Function to Update Badges in Sidebar and Settings
function refreshBadges() {
    updateBadges();
    updateSettingsBadges();
}

// Function to Update Badges in Settings Panel Tooltip
function updateBadgeTooltips() {
    const badges = document.querySelectorAll('#badge-list .badge');
    badges.forEach(badge => {
        const badgeName = badge.getAttribute('data-tooltip');
        badge.setAttribute('title', badge.name + " - " + badge.description);
    });
}

// Function to Toggle Theme
function toggleTheme() {
    if (themeToggle.checked) {
        document.body.classList.add('light-mode');
        userData.theme = 'light';
    } else {
        document.body.classList.remove('light-mode');
        userData.theme = 'dark';
    }
    saveUserData();
}

// Function to Reset Progress
function resetProgress() {
    if (confirm("Are you sure you want to reset all your progress? This action cannot be undone.")) {
        userData = {
            currentLevel: 1,
            points: 0,
            completedLevels: {},
            badges: [],
            theme: 'dark',
            fastestCompletionTime: {},
            flawlessCompletions: 0,
            bugsFound: 0,
            advancedTechniquesUsed: 0,
            challengesExplored: 0,
            totalHoursCoding: 0
        };
        localStorage.removeItem('userData');
        editor.setValue('');
        loadChallenge(userData.currentLevel);
        refreshBadges();
        updateBadgeTooltips();
        updateAllBadgesList();
        initializeTheme();
        alert("Your progress has been reset.");
    }
}

// Function to Save User Data
function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(userData));
    pointsElem.textContent = userData.points;
    refreshBadges();
    updateBadgeTooltips();
}

// Function to Run Code
// Helper Function to Deep Compare Two Values
function deepEqual(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    } else if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (let key of keysA) {
            if (!deepEqual(a[key], b[key])) return false;
        }
        return true;
    } else {
        return a === b;
    }
}

// Function to Run Code
function runCode() {
    const currentLevel = userData.currentLevel;
    const challenge = challenges.find(c => c.id === currentLevel);
    const userCode = editor.getValue();
    feedbackElem.className = 'feedback';
    feedbackElem.innerHTML = '';

    try {
        // Dynamically create and retrieve the user's function
        const userFunction = new Function(userCode + '; return ' + challenge.functionName + ';')();
        const funcName = challenge.functionName;

        if (typeof userFunction !== 'function') {
            throw new Error(`No function named "${funcName}" was defined.`);
        }

        let allPassed = true;
        let feedbackHTML = '';

        challenge.testCases.forEach((test, index) => {
            let result;
            try {
                result = userFunction(...test.args);
            } catch (err) {
                allPassed = false;
                feedbackHTML += `<p>Test Case ${index + 1} Failed: Error during execution.</p>`;
                return;
            }

            // Determine if expected is an array of acceptable outputs or a single expected output
            if (Array.isArray(test.expected)) {
                if (Array.isArray(result)) {
                    // If both expected and result are arrays, perform deep comparison
                    if (!deepEqual(result, test.expected)) {
                        allPassed = false;
                        feedbackHTML += `<p>Test Case ${index + 1} Failed: ${funcName}(${test.args.map(a => JSON.stringify(a)).join(', ')}) should be ${JSON.stringify(test.expected)}, but got ${JSON.stringify(result)}.</p>`;
                    }
                } else {
                    // If expected is an array of acceptable primitive outputs
                    if (!test.expected.includes(result)) {
                        allPassed = false;
                        feedbackHTML += `<p>Test Case ${index + 1} Failed: ${funcName}(${test.args.map(a => JSON.stringify(a)).join(', ')}) should be one of ${JSON.stringify(test.expected)}, but got ${JSON.stringify(result)}.</p>`;
                    }
                }
            } else {
                // Single expected value
                if (typeof test.expected === 'object') {
                    if (!deepEqual(result, test.expected)) {
                        allPassed = false;
                        feedbackHTML += `<p>Test Case ${index + 1} Failed: ${funcName}(${test.args.map(a => JSON.stringify(a)).join(', ')}) should be ${JSON.stringify(test.expected)}, but got ${JSON.stringify(result)}.</p>`;
                    }
                } else {
                    if (result !== test.expected) {
                        allPassed = false;
                        feedbackHTML += `<p>Test Case ${index + 1} Failed: ${funcName}(${test.args.join(', ')}) should be ${test.expected}, but got ${result}.</p>`;
                    }
                }
            }
        });

        if (allPassed) {
            // Stop Timer
            const challengeEndTime = Date.now();
            const timeTaken = Math.floor((challengeEndTime - challengeStartTime) / 1000); // in seconds
            challengeStartTime = null;

            // Update fastestCompletionTime
            if (!userData.fastestCompletionTime[currentLevel] || timeTaken < userData.fastestCompletionTime[currentLevel]) {
                userData.fastestCompletionTime[currentLevel] = timeTaken;
            }

            // Check for Speedster Badge
            const speedsterBadge = badgesConfig.find(b => b.name === "Speedster");
            if (speedsterBadge && timeTaken <= speedsterBadge.criteria.fastestCompletionTime && !userData.badges.includes(speedsterBadge.name)) {
                userData.badges.push(speedsterBadge.name);
                userData.points += 20; // Bonus points for earning a badge
                feedbackHTML += `<p>🥳 You've earned the "${speedsterBadge.name}" badge for completing the challenge in ${timeTaken} seconds!</p>`;
            }

            // Check for Completionist Badge
            const completionistBadge = badgesConfig.find(b => b.name === "Completionist");
            if (completionistBadge && Object.keys(userData.completedLevels).length >= completionistBadge.criteria.completedChallenges && !userData.badges.includes(completionistBadge.name)) {
                userData.badges.push(completionistBadge.name);
                userData.points += 50; // Bonus points for earning a badge
                feedbackHTML += `<p>🏆 You've earned the "${completionistBadge.name}" badge for completing ${completionistBadge.criteria.completedChallenges} challenges!</p>`;
            }

            // Additional badge checks can be added here

            feedbackElem.classList.add('success');
            feedbackElem.innerHTML = `<p>🎉 Congratulations! All test cases passed.</p>${feedbackHTML}`;
            if (!userData.completedLevels[currentLevel] || !userData.completedLevels[currentLevel].completed) {
                userData.points += pointsPerDifficulty[challenge.difficulty] || 10;
                challengesExplored++;
                userData.completedLevels[currentLevel] = { completed: true, code: userCode };
                saveUserData();
            }
        } else {
            feedbackElem.classList.add('error');
            feedbackElem.innerHTML = feedbackHTML || '<p>❌ Some test cases failed. Please try again.</p>';
        }

    } catch (error) {
        feedbackElem.classList.add('error');
        feedbackElem.innerHTML = `<p>🛑 Error: ${error.message}</p>`;
    }
}

// Event Listeners
document.getElementById('run-button').addEventListener('click', runCode);

prevButton.addEventListener('click', () => {
    if (userData.currentLevel > 1) {
        userData.currentLevel -= 1;
        saveUserData();
        loadChallenge(userData.currentLevel);
    }
});

nextButton.addEventListener('click', () => {
    if (userData.currentLevel < challenges.length) {
        userData.currentLevel += 1;
        saveUserData();
        loadChallenge(userData.currentLevel);
    }
});

// Hamburger Menu Toggle
hamburgerMenu.addEventListener('click', () => {
    settingsPanel.classList.toggle('open');
});

// Theme Toggle Switch
themeToggle.addEventListener('change', toggleTheme);

// Reset Progress Button
resetButton.addEventListener('click', resetProgress);

// Function to Initialize Theme on Load
function initializeTheme() {
    if (userData.theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.checked = false;
    }
}

// Initial Load
loadChallenge(userData.currentLevel);
refreshBadges();
updateBadgeTooltips();
updateAllBadgesList();
initializeTheme();
