import style from "./Main.module.css";
import { useState } from "react";
import { RegisterProgress } from "./RegisterProgress/RegisterProgress";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { ProgressControl } from "./ProgressControl/ProgressControl";
import { Cart } from "./Cart/Cart";
import { CartProvider } from "../../Context/CartContext";
import { ShippingProvider } from "../../Context/ShippingContext";
import { FormProvider } from "../../Context/FormContext";
import { CardProvider } from "../../Context/CardContext";

export function Main() {
  const [currentStep, setCurrentStep] = useState(1);

  // Handle click on Next button
  function handleNextClick() {
    if (currentStep === 1) {
      return setCurrentStep(2);
    }
    if (currentStep === 2) {
      return setCurrentStep(3);
    }
    if (currentStep === 3) {
      return;
    }
  }
  // Handle click on Previous button
  function handlePrevClick() {
    if (currentStep === 3) {
      return setCurrentStep(2);
    }
    if (currentStep === 2) {
      return setCurrentStep(1);
    }
    if (currentStep === 1) {
      return;
    }
  }

  return (
    <main>
      <div className={style.mainContentWrapper}>
        <ShippingProvider>
          <CartProvider>
            <FormProvider>
              <CardProvider>
                <section className={style.checkingPart}>
                  {/* Display the registration progress */}
                  <RegisterProgress currentStep={currentStep} />
                  {/* Display the registration form */}
                  <RegisterForm currentStep={currentStep} />
                </section>
                <section className={style.cartPart}>
                  {/* Display the cart */}
                  <Cart />
                </section>
                <section className={style.btnControl}>
                  {/* Display the progress control buttons */}
                  <ProgressControl
                    currentStep={currentStep}
                    onNextClick={handleNextClick}
                    onPrevClick={handlePrevClick}
                  />
                </section>
              </CardProvider>
            </FormProvider>
          </CartProvider>
        </ShippingProvider>
      </div>
    </main>
  );
}
