/*
* Spinner2 - Refactoring spinner1's code to print each character inside a loop.
*/
 
// Initialize an array to hold our spinner characters.
const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ' ];
// Initialize delay
let delay = 0;
// Loop through the spinner array while incrementing the delay by 200ms.
for (const char of spinnerArray) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}
