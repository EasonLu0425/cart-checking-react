import { ReactComponent as Minus } from "../../../icons/minus.svg";
import { ReactComponent as Plus } from "../../../icons/plus.svg";
import style from "./Cart.module.css";
import { useState } from "react";

const products = [
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
];

function total(items) {
  let totalItems = 0;
  const diliveryCost = 0;
  items.map((item) => {
    totalItems += item.quantity * item.price;
  });
  return totalItems + diliveryCost;
}

function ProductContainer({ product, onAdd, onMinus }) {
  return (
    <div className={style.productContainer} data-count="0" data-price="3999">
      <img className={style.imgContainer} alt="product-img" src={product.img} />
      <div className={style.productInfo}>
        <div className={style.productName}>{product.name}</div>
        <div className="product-control-container">
          <div className={style.productControl}>
            <Minus
              className={style.btnControl}
              onClick={() => onMinus(product.id)}
            />
            <span className={style.productCount}>{product.quantity}</span>
            <Plus
              className={style.btnControl}
              onClick={() => onAdd(product.id)}
            />
          </div>
        </div>
        <div className={style.productInfoPrice}>
          ${product.price * product.quantity}
        </div>
      </div>
    </div>
  );
}

export function Cart() {
  const [items, setItems] = useState(products);

  function handleAddClick(productId) {
    setItems(
      items.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  }
  function handleMinusClick(productId) {
    setItems(
      items.map((item) => {
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

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h2 className="cart-title">購物籃</h2>

      <section className="product-list col col-12" data-total-price="0">
        {items.map((product) => (
          <ProductContainer
            product={product}
            key={product.id}
            onAdd={handleAddClick}
            onMinus={handleMinusClick}
          />
        ))}
      </section>

      <section className={style.cartInfo}>
        <div className={style.text}>運費</div>
        <div className={style.price}>免費</div>
      </section>
      <section className={style.cartInfo}>
        <div className={style.text}>小計</div>
        <div className={style.price}>${total(items)}</div>
      </section>
    </section>
  );
}
