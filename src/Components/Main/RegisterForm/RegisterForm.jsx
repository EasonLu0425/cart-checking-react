import style from "./RegisterForm.module.css";
import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { Step3 } from "./Step3/Step3";

export function RegisterForm() {
  return (
    <form action="">
      <div className={style.formItemsWrapper}>
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    </form>
  );
}
