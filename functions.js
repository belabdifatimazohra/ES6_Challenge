//Equality	of	three	values
const equal=(a,b,c) => a===b && a===c
//console.log(equal(1,1,2));

//Convert	Minutes	to	seconds:	
const minuteConvert =(a) => !isNaN(a) ? a*60 : 'Not a number' 

//console.log(minuteConvert(1));

//Area	of	a	rectangle:	
const  area = (heigh,width) => typeof width == "number" && typeof heigh == "number"  ? heigh*width :  "Not a number" 
//console.log(area(1,2))

//The	next	number
const  nextInt = (a) => Number.isInteger(a) ? a+1 : "Not an integer"

//Football	Points
const  footballPts = (wins,draws,defeats) => wins*3+draws

//Between	100	AND	200
const  between = (n) => n>=100 && n<= 200 

// Hours and minutes to seconds
const  convertHourMin = (h,min) => h*3600+min*60

//Equality	check
const  equalityCheck = (a,b) =>  a === b


//Compare	Strings	by	Count	of	Characters
const  compareStrings = (str1,str2) =>{  return str1.length> str2.length ? ("The	first	string	is	taller") : ("The	second	string is	taller") }

//Unique	Chars	count
const  uniqueCharsCount= (a)=> [...new Set(a.replace(/\s/g,'').split(''))].length; 

//Concatenate	First	And	Last	Name
const  fullName = (firstName,lastName) => firstName + " " + lastName
//Find	the	index	of	an	item	in	an	array

const  index = (arr, a) =>  arr.includes(a) ? arr.indexOf(a) : -1 

//Is	in	range	:	isInRange(4,{min:2,max,10})
const  inRange = (a,range) => a >= range.min && a<= range.max 

//Max	of	an	array
const  maxArray = (arr) => Math.max(...arr); 

//Convert	a	number	to	a	month
const  monthName = (NbMonth) => {
 const months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
  return months[NbMonth-1];
 }

//Factorial
const  factorial = (nb) => {
  let fact=1;
  for(let i =nb; i>1; i--){
    fact *= i;
  }
  return fact;
}

//Count	Instance	of	a	character	in	a	string
const  instanceCount = (str, char) => str.split('').reduce((a, v) => (v === char ? a + 1 : a), 0);

//Absolute Sum
const  absoluteSum = (arr) => arr.reduce((a,v) => (a += Math.abs(v)),0) 

//Is a number Symmetrical
const  isSymmetric = (a) =>{
  
  const str = (a+"").split('');
  for(let i=0; i< str.length/2; i++){
    if(str[i] != str[str.length-i-1])
      return false
  }
  return true
}

// Reverse the case
const  reverseCase = (a) => {
  
  const arr = a.split('');
  return arr.reduce((a,v) => (v == v.toUpperCase() ? a += v.toLowerCase() : a += v.toUpperCase()),'')
  
}

// Get sum of people budget
const  sumBudget = (arr) => arr.reduce((a,v) => (a += Number(v.budget.split('$').join(''))),0)+"$" 

// Remove duplicate in an array
const  removeDuplicate = (arr) =>  [...new Set(arr)] 

// Seven Booms
const  sevenBooms = (arr) => {
    
   for(let i=0;i<arr.length;i++){
     
     if((arr[i]+"").split('').includes('7')) 
       return "BOOM";
     
   }
  
  return "there is no 7 in the array"
  
}

// Double Character Swap
const  doubelCharSwap = (str, c1,c2) => {
  
  const arr = str.split('');
  
  return arr.map((v) => {
  
       return v == c1 ?  v = c2
             :v == c2 ? v = c1
             :v = v}).join('');
  
}

//find first characters that repeats
const  firstRepeated = (str) => {
  
  const arr = str.split('');
  for (let i = 0; i< arr.length; i++){
    
        for(let j = i+1; j< arr.length; j++){
           if(arr[i] == arr[j]) 
             return arr[i];
        }
  }
  return (-1);
}

// Calculate the shopping cart price
const  totalPrice = (arr) => arr.reduce((a,v) => (a += Number(v.price.split('dz').join(''))),0)+"dz" 

// Get Top Student
const  topStudent = (arr) =>  Math.max(...(arr.map((s) =>  s.note ))); 

// The karaaca's encryption algorithm
const  encrypt = (input) => {
   
   // Reverse the input
   let output = input.split("").reverse();
 
  // Replace vowels with chart
  let vowels = { a:0, e:1, i:2, o:2, u:3};
  output = output.map((v) =>  (v in vowels) ? vowels[v] : v );
  
  // Add "aca"
  return (output.join('')+"aca");
}

// Sum of missing values
const  sumMissingNumbers = (arr) => {
  
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let sum =0;
  
  for(let i = start ; i< end ; i++){
    if(!arr.includes(i))
      sum += i; 
  }
    return sum
}

// Double letters
 const doubleLetters = (str) => {
  
  const arr = str.split('');
  for(let i=0 ; i< arr.length; i++){
    if(arr[i] == arr[i+1])
      return true
  }
  return false
}

// Reverse
 const reverse = (str) => {
  
  let reverseStr='';
  
  for(let i= (str.length) -1; i>=0; i--){
    reverseStr += str[i]; 
  }
  return reverseStr
}

// The reverser
 const reverser = (str) =>  reverseCase(reverse(str))

// Convert to camelCase
 const camelCasing = (str) =>{
  
  let arr = str.split(' ');
  // First word in lower case
  arr[0] = arr[0].toLowerCase();
  
  // All words after it have their first letter capitalised
  for(let i = 1; i< arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
   
  }
   return arr.join('')
}

// Positive Count, Negative Sum
 const posCountNegSum = (arr) => {
  
  let obj ={
    positiveCount: 0,
    negativeSum: 0,
  };
  
  return arr.map(e => e>0 ?  obj.positiveCount += 1 : obj.negativeSum +=e ) ;
 // return obj
}

// Read and sum array
 const sumTab = (tab) => tab.reduce((a,v) => a += v,0)
