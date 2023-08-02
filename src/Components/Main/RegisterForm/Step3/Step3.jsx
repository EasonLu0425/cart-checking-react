import { useContext } from 'react';
import { CardContext } from '../../../../Context/CardContext';
import style from './Step3.module.css'

export function Step3() {
  const {cardInfo, setCardInfo} = useContext(CardContext)
  return (
    <div className={style.step3}>
      <h2>付款資訊</h2>
      <label className="input-title" htmlFor="card-owner">
        持卡人姓名
      </label>
      <input
        type="text"
        id="card-owner"
        name="card-owner"
        value={cardInfo.cardOwner}
        onChange={(e) =>
          setCardInfo({ ...cardInfo, cardOwner: e.target.value })
        }
        placeholder="John Wick"
      />
      <label className="input-title" htmlFor="card-number">
        卡號
      </label>
      <input
        type="text"
        id="card-number"
        name="card-number"
        value={cardInfo.cardNumber}
        onChange={(e) =>
          setCardInfo({ ...cardInfo, cardNumber: e.target.value })
        }
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
            value={cardInfo.cardValidation}
            onChange={(e) =>
              setCardInfo({ ...cardInfo, cardValidation: e.target.value })
            }
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
            value={cardInfo.validationNumber}
            onChange={(e) =>
              setCardInfo({ ...cardInfo, validationNumber: e.target.value })
            }
            placeholder="123"
          />
        </div>
      </div>
    </div>
  );
}
