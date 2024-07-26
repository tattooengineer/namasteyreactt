import React from 'react';
import { useState } from 'react';
const TimesTable = () => {
  
  const [data,setData] = useState("");

//   const newinterval = setInterval(() =>{
// setData(data + 1)
//   },1000)

//   if(data == 20){
//     clearInterval(newinterval)
//   }

let tabledata ;
for (let index = 1; index <= 20; index++) {
  tabledata = 2 * index;
  setData(tabledata)
  
  
}
  return(
    <div>{data}</div>
  )

};

export default TimesTable