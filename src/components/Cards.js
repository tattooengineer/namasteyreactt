import { CDN_IMAGE } from "../utilities/common"

const Cards = (props) => {


    const { res } = props
  
    const { name, id, amount, deliverytime,ratings } = res
    return (
  
      <div className="card">
        <img src={CDN_IMAGE} className="img-card" />
        <h2 className="r-name">{name}</h2>
        <p className="delivery-time">{deliverytime}</p>
        <p className="min-am">{amount}</p>
        <p className="min-am">{ratings}</p>
  
      </div>
    )
  }

  export default Cards