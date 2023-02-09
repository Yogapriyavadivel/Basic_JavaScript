 /* #1 */
/* function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result = reverseString(string);
console.log(result);  */



/* #2 */
/* var arr1 = ['a','b','c','d','e','f'];
while(arr1.length > 0) {
    arr1.pop();
}
console.log(arr1); */



/* #3 */
/* let stack1 = [];
let stack2 = []; 


function enqueue(element) {
    stack1.push(element);
    console.log( stack1);
}

function dequeue() {
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            console.log("queue is empty");
        }
        while (stack1.length > 0) {
            let x = stack1.pop();
            stack2.push(x);
        }
    }
    console.log(stack2.pop());
}

enqueue("a");
enqueue("b");
enqueue("c");
dequeue();
dequeue();
 */




/* #4 */
/* for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
} */




/* #5 */
/* function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("mary","army"); */




/*  #6 */
let validName = (string) => {
    let firstName = "";
    let middleName = "";
    let lastName = "";
    let spacecount = 0;
    let dotcount = 0;
    let e = "";
    //let f = true;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ".") {
        dotcount += 1;
      }
      if (string[i] === " ") {
        spacecount += 1;
      }
      if (spacecount === 0) {
        firstName += string[i];
      } else
      if (spacecount === 1) {
        if (string[i] !== " ") {
          middleName += string[i];
        }
      } else 
      if (spacecount === 2) {
        if (string[i] !== " ") {
          lastName += string[i];
        }
      }
    }
    if (string[string.length - 1] === ".") {
        dotcount -= 1;
      }
      let firstNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
      let a = firstNameRegex.test(firstName);
      let a1 = firstName.match(firstNameRegex);

      let middleNameRegex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
  let b = middleNameRegex.test(middleName);
  let b1 = middleName.match(middleNameRegex);

  let lastNameRegex = /^[A-Z][a-zA-Z]+$/g;
  let c = lastNameRegex.test(lastName);
  let c1 = lastName.match(lastNameRegex);

  if (a === true && b === true && c === true && spacecount === 2
    && (dotcount === 0 || dotcount === 2)) {
  e = true;
} else
if (a === true && b === true && c === true && spacecount === 2 
    && (middleName[middleName.length - 1] === ".")) {
  e = true;
} else
if (a === true && b === true && spacecount === 1) {
  e = true; 
} else
e = false;
let fullName = firstName + " " + middleName + " " + lastName
return e;
};
console.log(validName("H. Wells"));
console.log(validName("H. G. Wells"));
console.log(validName("Herbert G. Wells"));
console.log(validName("Herbert"));
console.log(validName("h. Wells"));
console.log(validName("H Wells"));
console.log(validName("H. George Wells"));
console.log(validName("H. George W."));
console.log(validName("Herb. George Wells"));