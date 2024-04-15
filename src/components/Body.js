import Cards from "./Cards"
import { useState, useEffect } from "react"



const Body = (props) => {

  useEffect(() => {
    getData();

  }, [])




  const [newdata, SetNewData] = useState([])
  const [initialdata, Setinitialdata] = useState([])

  let [apidata, setApiData] = useState(0)

  const [inputData, setinputData] = useState("")


  const getData = async () => {

    let api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let api_data = await api.json()

    setApiData(api_data)
    Setinitialdata(api_data.categories)
    SetNewData(api_data.categories)

  }

  if (apidata == 0) {
    return (
      <div className="shim-cards">
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
        <div className="cards"></div>
      </div>


    )
  }






  return (
    <div className="body">
      <div className="searchbar-box">
        <input className="inputbox" placeholder="Enter your choice of food" value={inputData} onChange={(e) => {
          setinputData(e.target.value)

        }} />
        <button className="btn" onClick={() => {
  const searchdata = newdata.filter((res)=> res.strCategory.includes(inputData)

   )
   SetNewData(searchdata) 
  
        }}>Search</button>

        <button className="btn" onClick={() => {
          const filterList = newdata.filter((res) => res.idCategory > 4)
          SetNewData(filterList)
        }
        }>Find Top Rated Restaurants</button>
        <button className="btn" onClick={() => { props.counterfn(props.counter + 1) }}>Add to cart</button>
        <button className="btn" onClick={() => {
          SetNewData(initialdata)
          props.counterfn(0)

        }}>Reset</button>
      </div>
      <div className="card-container">

        {

          newdata.map((rest, index) =>
            <Cards res={rest} key={rest.idCategory} />

          )
        }






      </div>
    </div>
  )
}

export default Body