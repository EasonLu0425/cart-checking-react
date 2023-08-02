import style from "./RegisterForm.module.css";
import { useContext, useState } from "react";
import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { Step3 } from "./Step3/Step3";
import { FormProvider } from "../../../Context/FormContext";
import { CardProvider } from "../../../Context/CardContext";
import { ShippingProvider } from "../../../Context/ShippingContext";

export function RegisterForm({ currentStep }) {
  return (
    <form action="">
      <div className={style.formItemsWrapper}>
        {currentStep === 1 && <Step1 />}

        {currentStep === 2 && <Step2 />}

        {currentStep === 3 && <Step3 />}
      </div>
    </form>
  );
}
