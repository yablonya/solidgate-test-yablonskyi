import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import useFormField from "../../hooks/use-form-field/useFormField.ts";
import applePayLogo from "../../assets/apple-pay.svg";
import loaderIcon from "../../assets/loader.svg";
import infoIcon from "../../assets/info.svg";
import { formatCardNumber, formatCVC, formatExpiryDate } from "../../utils/inputFormat.ts";
import { validateCardNumber, validateCVC, validateExpiryDate } from "../../utils/inputValidation.ts";
import Divider from "../divider/Divider.tsx";
import Input from "../input/Input.tsx";
import styles from "./PaymentBlock.module.scss";

const PaymentBlock = () => {
  const { t } = useTranslation();
  const cardNumberField = useFormField("", formatCardNumber, validateCardNumber);
  const expDateField = useFormField("", formatExpiryDate, validateExpiryDate);
  const cvcField = useFormField("", formatCVC, validateCVC);

  const [isLoading, setIsLoading] = useState(false);

  const handleApplePayClick = () => {
    alert(t("paymentViaApple"));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardValidation = validateCardNumber(cardNumberField.value);
    const expValidation = validateExpiryDate(expDateField.value);
    const cvcValidation = validateCVC(cvcField.value);

    cardNumberField.setError(cardValidation === true ? "" : cardValidation);
    expDateField.setError(expValidation === true ? "" : expValidation);
    cvcField.setError(cvcValidation === true ? "" : cvcValidation);

    if (cardValidation !== true || expValidation !== true || cvcValidation !== true) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(t("paymentViaApple"));
      cardNumberField.setValue("");
      expDateField.setValue("");
      cvcField.setValue("");

      cardNumberField.setError("");
      expDateField.setError("");
      cvcField.setError("");
      setIsLoading(false);
    }, 1000);
  };

  const submitDefaultTextClass = [
    styles["payment-block__submit-default-text"],
    isLoading && styles["payment-block__submit-default-text-fade-out"],
  ]
    .filter(Boolean)
    .join(" ");

  const submitLoadingTextClass = [
    styles["payment-block__submit-loading-text"],
    isLoading && styles["payment-block__submit-loading-text-fade-in"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["payment-block"]}>
      <button
        type="button"
        onClick={handleApplePayClick}
        className={styles["payment-block__apple-pay-btn"]}
      >
        <img src={applePayLogo} alt="Apple Pay logo" />
      </button>

      <div className={styles["payment-block__text-divider"]}>
        <Divider />
        <span>{t("orPayWithCard")}</span>
        <Divider />
      </div>

      <form onSubmit={handleFormSubmit} className={styles["payment-block__form"]}>
        <Input
          id="card-number"
          type="text"
          name="card-number"
          placeholder="1234 1234 1234 1234"
          helperText={cardNumberField.error}
          maxLength={19}
          label={t("cardNumber")}
          value={cardNumberField.value}
          onChange={cardNumberField.onChange}
          onBlur={cardNumberField.onBlur}
        />

        <Input
          id="exp-date"
          type="text"
          name="exp-date"
          placeholder="MM/YY"
          helperText={expDateField.error}
          label={t("expirationDate")}
          maxLength={5}
          value={expDateField.value}
          onChange={expDateField.onChange}
          onBlur={expDateField.onBlur}
          className={styles["payment-block__input"]}
        />

        <Input
          id="cvc"
          type="password"
          name="cvc"
          placeholder="123"
          helperText={cvcField.error}
          maxLength={4}
          label="CVC"
          value={cvcField.value}
          onChange={cvcField.onChange}
          onBlur={cvcField.onBlur}
          suffix={(
            <img
              src={infoIcon}
              alt="Info icon"
              title={t("cvcHint")}
              style={{ cursor: "pointer" }}
            />
          )}
          className={styles["payment-block__input"]}
        />

        <div className={styles["payment-block__submit"]}>
          <button type="submit" className={styles["payment-block__submit-btn"]}>
            <span className={submitDefaultTextClass}>
              {t("startTrial")}
            </span>

            <span className={submitLoadingTextClass}>
              <img
                src={loaderIcon}
                alt="Loader icon"
                className={styles["payment-block__loader"]}
              />
              {t("processing")}
            </span>
          </button>

          <p className={styles["payment-block__plan-policy"]}>
            {t("policyBeginning")} <b>{t("policyProPlan")}</b>{t("policyAfter")} <b>{t("policyRenewed")}</b> {t("policyEnding")}
          </p>
        </div>
      </form>
    </div>
  );
};

export default PaymentBlock;