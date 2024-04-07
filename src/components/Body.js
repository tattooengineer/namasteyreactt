import Cards from "./Cards"
import Response from "../utilities/mockdata"
import { useState } from "react"



const Body = () => {



const [newdata, SetNewData] = useState(Response)
  return (
    <div className="body">
      <div className="searchbar-box">
        {/* <input className="inputbox" placeholder="Enter your choice of food" /> */}
        {/* <button className="btn">Search</button> */}

        <button className="btn" onClick={() => {
          const filterList = newdata.filter((res) => res.ratings > 4)
          SetNewData(filterList)
        }
        }>Find Top Rated Restaurants</button>
           <button className="btn" onClick={() => {
         
          SetNewData(Response)
        }
        }>Reset</button>
      </div>
      <div className="card-container">

        {

          newdata.map((rest, index) =>
            <Cards res={rest} key={rest.id} />

          )
        }






      </div>
    </div>
  )
}

export default Body