import style from './ProgressControl.module.css'



export function ProgressControl() {
  return (
    <>
      <section className={style.btnControl}>
        <button disabled className={style.btnOutline}>
          上一步
        </button>
        <button className={style.btnPrimary}>下一步</button>
      </section>
    </>
  );
}
