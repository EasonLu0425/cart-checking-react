import { ReactComponent as Minus } from "../../../icons/minus.svg";
import { ReactComponent as Plus } from "../../../icons/plus.svg";
import style from './Cart.module.css'

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

function ProductContainer({ product }) {
  return (
    <div className={style.productContainer} data-count="0" data-price="3999">
      <img className={style.imgContainer} src={product.img} />
      <div className={style.productInfo}>
        <div className={style.productName}>{product.name}</div>
        <div className="product-control-container">
          <div className={style.productControl}>
            <Minus />
            <span className={style.productCount}>{product.quantity}</span>
            <Plus />
          </div>
        </div>
        <div className={style.productInfoPrice}>${product.price}</div>
      </div>
    </div>
  );
}


export function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h2 className="cart-title">購物籃</h2>

      <section className="product-list col col-12" data-total-price="0">
        {products.map((product) => (
          <ProductContainer product={product} />
        ))}
      </section>

      <section className={style.cartInfo}>
        <div className="text">運費</div>
        <div className="price"></div>
      </section>
      <section className={style.cartInfo}>
        <div className="text">小計</div>
        <div className="price"></div>
      </section>
    </section>
  );
}
