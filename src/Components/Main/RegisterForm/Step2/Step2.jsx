import { useContext } from "react";
import { ShippingContext } from "../../../../Context/ShippingContext";
import style from "./Step2.module.css";

export function Step2() {
  const { shippingCost, onShippingChange } =
    useContext(ShippingContext);
  return (
    <div className={style.step2}>
      <h2>運送方式</h2>
      <label htmlFor="standard-dilivery" className={style.standardDilivery}>
        <input
          className="d-cost-value"
          type="radio"
          id="standard-dilivery"
          name="dilivery"
          value="0"
          checked={shippingCost === 0}
          onChange={(e) => onShippingChange(e.target.value)}
        />
        <div className="dilivery-text">
          <label htmlFor="standard-dilivery">標準運送</label>
          <p>約3~7個工作天</p>
          <p className={style.dCost}>免費</p>
        </div>
      </label>
      <label htmlFor="DHL-dilivery" className={style.DHLDilivery}>
        <input
          className="d-cost-value"
          type="radio"
          id="DHL-dilivery"
          name="dilivery"
          value="500"
          checked={shippingCost === 500}
          onChange={(e) => onShippingChange(e.target.value)}
        />
        <div className="dilivery-text">
          <label htmlFor="DHL-dilivery">DHL運貨</label>
          <p>48小時內送達</p>
          <p className={style.dCost}>$500</p>
        </div>
      </label>
    </div>
  );
}
