import { createContext, useState, useContext } from "react";
import { ShippingContext } from "./ShippingContext";

const CartContext = createContext()

function CartProvider ({children}) {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      name: "貓咪干干",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ]);
  const {shippingCost} = useContext(ShippingContext)


  function handleAddClick(productId) {
  setItems(prevItems => prevItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
  }));
  }
  function handleMinusClick(productId) {
  setItems(prevItems => prevItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity === 0) return item;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function total(items) {
    let total = 0;
    items.map((item) => {
      total += item.quantity * item.price;
    });
    const totalPrice = parseInt(total + shippingCost);
    return totalPrice;
  }


  return (
    <CartContext.Provider value={{ items, handleAddClick, handleMinusClick ,total}}>
      {children}
    </CartContext.Provider>
  );
}

export {CartContext, CartProvider}