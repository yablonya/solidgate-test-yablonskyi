import { useOrder } from "../../hooks/use-order/useOrder.ts";
import Divider from "../divider/Divider.tsx";
import styles from "./OrderInfo.module.scss";

const OrderInfo = () => {
  const { order } = useOrder();

  return (
    <div className={styles["order-info"]}>
      <div className={styles["order-info__header"]}>
        <h3>{order.info}</h3>
        <p>{order.description}</p>
      </div>

      <Divider/>

      <div className={styles["order-info__product"]}>
        <h4>{order.name}</h4>
        <p>{order.type}</p>
      </div>

      <Divider/>

      <div className={styles["order-info__footer"]}>
        <h4>5 days free</h4>
        <p>then {order.price} UAH per 14 days</p>
      </div>
    </div>
  );
};

export default OrderInfo;