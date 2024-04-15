import { CDN_IMAGE } from "../utilities/common"

const Cards = (props) => {


    const { res } = props
  
    const {strCategoryThumb, strCategory, strCategoryDescription } = res
    return (
  
      <div className="card">
        <img src={strCategoryThumb} className="img-card" />
        <h2 className="r-name">{strCategory}</h2>
        <p className="delivery-time">{strCategoryDescription}</p>
  
      </div>
    )
  }

  export default Cards