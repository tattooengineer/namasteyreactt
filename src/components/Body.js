import Cards from "./Cards"
import { useState, useEffect } from "react"




const Todoapp = () => {
 
  const [name,Setname] = useState("");
  const [list,Setlist] = useState([]);


  const onsubmit = (e) => {
    e.preventDefault();
    Setlist(...list,name);
  }

  return(
    <div>
      <form onSubmit={onsubmit}>
        <label>Add Work:</label>
        <input type="text" value={name} onChange={(e) => {Setname(e.target.value)}} id="name"/>
        <button type="submit">Add</button>
      </form>


      <ol>
{list.map((name,index) =>{
  <li key={index}>{name}</li>
})}
      </ol>
    </div>
  )


}

export default Body