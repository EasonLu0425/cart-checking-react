import style from "./Main.module.css";
import { RegisterProgress } from "./RegisterProgress/RegisterProgress";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { ProgressControl } from "./ProgressControl/ProgressControl";
import { Cart } from "./Cart/Cart";

export function Main() {
  return (
    <main>
      <div className={style.mainContentWrapper}>
        <section className={style.checkingPart}>
          <RegisterProgress />
          <RegisterForm />
        </section>
        <section className={style.cartPart}>
          <Cart/>
        </section>
        <section className={style.btnControl}>
          <ProgressControl />
        </section>
      </div>
    </main>
  );
}
