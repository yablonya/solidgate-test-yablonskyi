import { useTranslation } from "react-i18next";
import { useOrder } from "../../../hooks/use-order/useOrder.ts";
import styles from "./DesktopCheckoutInfo.module.scss";

const DesktopCheckoutInfo = () => {
  const { t } = useTranslation();
  const { order } = useOrder();

  return (
    <div className={styles["desktop-checkout-info"]}>
      <h3>{t("checkoutTitle")}</h3>

      <div className={styles["desktop-checkout-info__content"]}>
        <h4>{t("offerFree")}</h4>
        <p>{t("offerThen")} {order.price} {t("offerPeriod")}</p>
      </div>
    </div>
  );
};

export default DesktopCheckoutInfo;