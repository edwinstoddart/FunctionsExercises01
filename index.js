/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/
function takeCharacters(str) {
  let tempStr = '';
  if (str.length > 3) {
    tempStr = str.slice(0, 3);
  } else {
    tempStr = str.slice(str.length-1);
  }
  return tempStr;
}

/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
let str = 'powerful';
let newStr = takeCharacters(str);

console.log(`We put the "${newStr}"" in "${str}".`)