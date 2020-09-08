// const fn0 = (obj: Obj) => obj
// node index.js > sample.txt

const ary = new Array(1000).fill('').map((_,index)=> `const fn${index} = (obj: Obj) => obj`).reverse().join('\n')
const call = new Array(1000).fill('').map((_,index)=> `fn${index}`).reverse().join(',\n')
console.log(ary);
console.log();
console.log(call);