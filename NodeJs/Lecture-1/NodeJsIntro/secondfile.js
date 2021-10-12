// const arr = process.argv;
// console.log(arr);

// const inp = process.argv.slice(2);
// console.log(inp);
// for (let x of inp) {
//   console.log(x);
// }

const inp = parseInt(process.argv[2]);
function print(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
print(inp);
