import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import "./Bottle.css";
export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      <h1>{bottles.length}</h1>
      <h1>Total Cart : {cart.length}</h1>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            handleCart={handleCart}
            key={bottles.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}
