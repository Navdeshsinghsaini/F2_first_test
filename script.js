/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];


function PrintStudentswithMap() {
  //Write your code here , just console.log
 arr.map(marksabove50);
 function marksabove50(item){
  if (item.marks >= 50 ){
    console.log(item);
  }
 }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach(marksabove50);
  function marksabove50(item){
   if (item.marks >= 50 ){
     console.log(item);
   }
  }
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",marks:45}

  arr.push(obj);
  console.log (arr[3]);
}

// removing element ussing splice 
function removeFailedStudent() {
  //Write your code here, just console.log
 
  for (let i = 0; i < arr.length ; i++){
    if (arr[i].marks < 50){
       arr.splice(i , 1);
       i--;
    }
  }
 
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "rahul", age: "18", marks: 100 },
    { id: 6, name: "ram", age: "20", marks: 45 },
    { id: 7, name: "rajiv", age: "19", marks: 65 },    
  ]

  let result = arr.concat(arr2);
  console.log(result);

}
