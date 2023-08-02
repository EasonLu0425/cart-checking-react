import style from "./Step1.module.css";
import { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export function Step1() {
  const {userInfo, setUserInfo} = useContext(FormContext)

  return (
    <div className="step1">
      <h2>寄送地址</h2>
      <div className="form-content-wrapper">
        <div className={style.input1}>
          <div className={style.mrms}>
            <label className="input-title" htmlFor="mrms">
              稱謂
            </label>
            <select
              name="mrms"
              id="mrms"
              value={userInfo.mrms}
              onChange={(e) =>
                setUserInfo({ ...userInfo, mrms: e.target.value })
              }
            >
              <option value="mr">先生</option>
              <option value="ms">小姐</option>
            </select>
          </div>
          <div className={style.name}>
            <label className="input-title" htmlFor="name">
              姓名
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="請輸入姓名"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
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
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
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
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className={style.input3}>
          <div className={style.city}>
            <label className="input-title" htmlFor="city">
              縣市
            </label>
            <select
              name="city"
              id="city"
              value={userInfo.city}
              onChange={(e) =>
                setUserInfo({ ...userInfo, city: e.target.value })
              }
            >
              <option value="TaipeiCity">台北市</option>
            </select>
          </div>
          <div className={style.address}>
            <label className="input-title" htmlFor="address">
              地址
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={userInfo.address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
