import "./Bottle.css"
export default function Bottle({ bottle, handleCart }) {

  return (
    <div className="bottle">
      <img src={bottle.img} alt="" />
      <div>
        <h1>{bottle.name}</h1>
        <h2>{bottle.brands}</h2>
        <h3>Price : ${bottle.price}</h3>
        <h4>Ratings : {bottle.ratingsCount}</h4>
        <button onClick={()=>handleCart(bottle)}>Buy Now</button>
      </div>
    </div>
  );
}
