import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
import { CartContext } from "../../../Context/CartContext";
import { CardContext } from "../../../Context/CardContext";
import style from "./ProgressControl.module.css";

export function ProgressControl({ currentStep, onNextClick, onPrevClick }) {
  const { userInfo } = useContext(FormContext);
  const { cardInfo } = useContext(CardContext);
  const { items } = useContext(CartContext);
  // 暫時送出訂單以console.log列出輸入內容，要再設計傳給後端後面可再更新
  function submitOrder() {
    console.log("userInfo", userInfo);
    console.log("cardInfo", cardInfo);
    console.log("items", items);
  }

  return (
    <>
      <section className={style.btnControl}>
        <button
          disabled={currentStep === 1}
          className={style.btnOutline}
          onClick={onPrevClick}
        >
          上一步
        </button>
        <button
          className={style.btnPrimary}
          onClick={currentStep <= 2 ? onNextClick : submitOrder}
        >
          {currentStep === 3 ? "送出訂單" : "下一步"}
        </button>
      </section>
    </>
  );
}
