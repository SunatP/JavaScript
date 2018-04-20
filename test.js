// // const a = () =>
// // {
// //     console.log('test');
// // }
// // a()

// const a =[1,3,2,4,5,7,8,,2]
// const b = [2,1,3,14]
// a.push(...b)
// // for(let i  = 0 ; i< a.length ; i++)
// // {
// //     console.log(a[i]);
// // }
// //a.map((value,index)=>console.log(value,index))
// for(let i  = 0 ; i< a.length ; i++)
// {
//     // if(a[i]>5)
//     // {
//     //     console.log(a[i]);
//     // }
// }

// //const b = a.filter((value,index)=>{ return value<999}) // {return value is regex}

// a.sort((a,b) => {return a<b})
// console.log(a.map(x=>Math.pow(x,2))) // x is a parameter x>= x*2 mean x multiply with 2
// console.log(a)

const a =[{
    classname : "test"
    , Number : 234 , number2: 222.1 ,fun: ()=>{console.log('aaa')}
}] // if you have [] call it array obj
   // if you only have {} cat it obj
   const {classname,Number,number2} = a[0]; // destructering
const b = a[0].Number;

console.log(b)