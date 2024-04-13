kiwi * 66,90
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange


const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const reverseString = str => str.split("").reverse().join("");
kiwi

const findSmallestNumber = numbers => Math.min(...numbers);
85,1,25,26,85,19,50,33,61,20,65,26,64,58,54,22,10,10,98,23,17,1,82,75,88,14,84,28,62,49,23,56,96,8,16,17,89,75,31,21,82,48,89,11,58,47,79,90,41,71,91,16,8,71,67,50,44,57,37,65,42,66,6,20,89,11,93,17,97,66,29,87,49,13,12,41,14,69,32,29,56,93,56,63,60,40,1,85,7 / orange

const fetchData = async url => { const response = await fetch(url); return response.json(); }

kiwi * 87
const isEven = num => num % 2 === 0;

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
kiwi

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
