import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ShippingContext } from "../../../Context/ShippingContext";
import { ReactComponent as Minus } from "../../../icons/minus.svg";
import { ReactComponent as Plus } from "../../../icons/plus.svg";
import style from "./Cart.module.css";



function ProductContainer({ product, onAdd, onMinus }) {
  return (
    <div className={style.productContainer}>
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
  const { items, handleAddClick, handleMinusClick, total } = useContext(CartContext);
  const { shippingCost } = useContext(ShippingContext);
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
        <div className={style.price}>
          {shippingCost === 0 ? "免費" : shippingCost}
        </div>
      </section>
      <section className={style.cartInfo}>
        <div className={style.text}>小計</div>
        <div className={style.price}>${total(items, shippingCost)}</div>
      </section>
    </section>
  );
}
