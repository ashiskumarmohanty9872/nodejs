// alert("hello");
// fundamentals of javscript
// array and objects
// function return 
// async js code
// forEach ,map ,filter, find,indexOf
 /*--------ForEach------ */
// var arr =[10,20,30,40]
// arr.forEach(function(val){
//     console.log(val + " hello");
    
// })


/* <<<<<<<<<<<<< MAP >>>>>>>>>>>>>>> */
// Create another array from given array , works like foreach loop
// var arr =[1,2,3,4]
// const result=arr.map(function(val){
//     return val*3
// })
// console.log(result);


/*<<<<<<<<<<  FILTER >>>>>>>>>>>>>>> */

// var arr =[1,2,3,4]
// const result=arr.filter(function(val){
//     if(val>=20) {return true}
//     else false
// })
// console.log(result);


/*<<<<<<<<< find >>>>>>>. */
var arr =[1,2,3,4]
const result=arr.find(function(val){
    if(val === 2) {return val}
 
})
// console.log(result);

// console.log(arr.indexOf(4))


const obj={
    
    name:"sibun",
    age:24
}
// console.log(typeof obj);
Object.freeze(obj)


function abcd(a,b,c){

}
console.log(abcd.length);






