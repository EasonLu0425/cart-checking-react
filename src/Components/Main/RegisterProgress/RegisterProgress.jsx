import style from './RegisterProgress.module.css'

export function RegisterProgress() {
  return (
    <section>
      <h1>結帳</h1>
      <div className={style.stepperContainer}>
        <div className={`${style.step} ${style.active}`}>
          <div className={style.circleContainer}></div>
          <div className={style.labelContainer}>寄送地址</div>
        </div>
        <div className={style.step}>
          <div className={style.circleContainer}></div>
          <span className={style.connectLine}></span>
          <div className={style.labelContainer}>運送方式</div>
        </div>
        <div className={style.step}>
          <div className={style.circleContainer}></div>
          <span className={style.connectLine}></span>
          <div className={style.labelContainer}>付款資訊</div>
        </div>
      </div>
    </section>
  );
}