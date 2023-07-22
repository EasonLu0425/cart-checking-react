import style from './Step3.module.css'
export function Step3() {
  return (
    <div className={style.step3}>
      <h2>付款資訊</h2>
      <label className="input-title" htmlFor="card-owener">
        持卡人姓名
      </label>
      <input
        type="text"
        id="card-owener"
        name="card-owener"
        placeholder="John Wick"
      />
      <label className="input-title" htmlFor="card-number">
        卡號
      </label>
      <input
        type="text"
        id="card-number"
        name="card-number"
        placeholder="1111 2222 3333 4444"
      />
      <div className={style.card}>
        <div className={style.cardValidation}>
          <label className="input-title" htmlFor="card-validation">
            有效期限
          </label>
          <input
            type="text"
            id="card-validation"
            name="card-validation"
            placeholder="MM/YY"
          />
        </div>
        <div className={style.cardValidation}>
          <label className="input-title" htmlFor="validation-number">
            CVC/CCV
          </label>
          <input
            type="text"
            id="validation-number"
            name="validation-number"
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
}
