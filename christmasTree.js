/*
Write a JavaScript program to generate
the Christmas Tree pattern below given a number of rows.
The tree should be composed of asteriks (*).
     *
    ***
   *****
  *******
 *********
***********
*/


let tree = '';
const rows = 6;
for (let i = 1; i <= rows; i++) {
  tree = '';
  for (let j = i; j < rows; j++) {
    tree += ' ';
  }
  for (let k = 0; k < (i * 2) - 1; k++) {
    tree += '*';
  }
  console.log(tree);
}
