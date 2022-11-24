/*
* Spinner - creating a spinning animation in your terminal using setTimeout!
 
 
/*
*
* Function Name - and a brief description of what it does
*
* @param {string} argument name - information it holds
* @param {string} argument name - information it holds
*
*/

//process.stdout.write('hello from spinner1.js... \rheyyy\n');

//first rotation of spinner
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

// Second rotation of spinner
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1400);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1800);


/* Test Cases */