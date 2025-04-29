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
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} width="100" />
          <h3>{pizza.name}</h3>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.quantity}</p>
          <button onClick={() => increase(pizza.id)}>+</button>
          <button onClick={() => decrease(pizza.id)}>-</button>
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;