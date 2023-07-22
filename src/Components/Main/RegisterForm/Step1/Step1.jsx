import style from "./Step1.module.css";
export function Step1() {
  return (
    <div className="step1">
      <h2>寄送地址</h2>
      <div className="form-content-wrapper">
        <div className={style.input1}>
          <div className={style.mrms}>
            <label className="input-title" htmlFor="mrms">
              稱謂
            </label>
            <select name="mrms" id="mrms">
              <option value="mr">先生</option>
              <option value="ms">小姐</option>
            </select>
          </div>
          <div className={style.name}>
            <label className="input-title" htmlFor="name">
              姓名
            </label>
            <input type="text" id="name" name="name" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={style.input2}>
          <div className={style.phone}>
            <label className="input-title" htmlFor="phone">
              電話
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="請輸入電話"
            />
          </div>
          <div className={style.email}>
            <label className="input-title" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        <div className={style.input3}>
          <div className={style.city}>
            <label className="input-title" htmlFor="city">
              縣市
            </label>
            <select name="city" id="city">
              <option value="TaipeiCity">台北市</option>
            </select>
          </div>
          <div className={style.adress}>
            <label className="input-title" htmlFor="adress">
              地址
            </label>
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
