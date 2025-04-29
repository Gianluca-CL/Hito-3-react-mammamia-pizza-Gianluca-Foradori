import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
      .filter((pizza) => pizza.quantity > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>🛒 Carrito de Compras</h1>
      {cart.map((pizza) => (
        <div key={pizza.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <img src={pizza.img} alt={pizza.name} width="80" style={{ verticalAlign: "middle" }} />
          <h3 style={{ display: "inline-block", marginLeft: "10px" }}>{pizza.name}</h3>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <button onClick={() => increase(pizza.id)}>➕</button>
          <button onClick={() => decrease(pizza.id)}>➖</button>
        </div>
      ))}
      <h2 style={{ textAlign: "center" }}>Total: ${total}</h2>
      <div style={{ textAlign: "center" }}>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;