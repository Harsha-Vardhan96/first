
function App(){

let arr=[1,2,3,4,5,6]

display = arr.map(ele => {<li>{ele}</li>})

square = arr.map((i)=>Math.pow(i,2))
cubes = arr.map((i) => Math.pow(i,3))

// evenNum = arr.map((i)=>((i%2)===0));
// oddNum = arr.map((i)=>((i%2)!==0));

//-----filter-------
evenNum = arr.filter((i)=>((i%2)===0))
oddNum = arr.filter((i)=>((i%2)!==0))

//-----reducer------
total = arr.reduce((sum,i) => sum + i)

console.log(square)
console.log(evenNum)
console.log(oddNum)
console.log(total)


return(
  <>
  <p>`Squares of an arr : {square}`</p>
  </>
)

}
