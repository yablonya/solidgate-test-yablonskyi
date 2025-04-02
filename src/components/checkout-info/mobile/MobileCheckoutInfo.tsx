import { useOrder } from "../../../hooks/use-order/useOrder.ts";
import styles from "./MobileCheckoutInfo.module.scss";

const MobileCheckoutInfo = () => {
  const { order } = useOrder();

  return (
    <div className={styles["mobile-checkout-info"]}>
      <h3>Checkout</h3>

      <div className={styles["mobile-checkout-info__content"]}>
        <h4>5 days free</h4>
        <p>then {order.price} UAH per 14 days</p>
      </div>
    </div>
  );
};

export default MobileCheckoutInfo;