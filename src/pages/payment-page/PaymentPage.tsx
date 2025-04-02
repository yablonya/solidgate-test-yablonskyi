import { useEffect } from "react";
import { useOrder } from "../../hooks/use-order/useOrder.ts";
import Header from "../../components/header/Header.tsx";
import BackButton from "../../components/back-button/BackButton.tsx";
import DesktopCheckoutInfo from "../../components/checkout-info/desktop/DesktopCheckoutInfo.tsx";
import PaymentBlock from "../../components/payment-block/PaymentBlock.tsx";
import OrderInfo from "../../components/order-info/OrderInfo.tsx";
import Footer from "../../components/footer/Footer.tsx";
import styles from "./PaymentPage.module.scss";

const PaymentPage = () => {
  const { update } = useOrder();

  useEffect(() => {
    update({
      name: "Lamel Professional Smart Skin Compact Powder",
      info: "Order info <= 100 char.",
      description: "Description <= 400 char.",
      type: "Пудра для обличчя",
      price: 299.99
    })
  }, [update])

  return (
    <div className={styles["payment-page"]}>
      <Header/>
      <div className={styles["payment-page__content"]}>
        <div className={styles["payment-page__left-part"]}>
          <BackButton className={styles["payment-page__back-btn"]}/>
          <DesktopCheckoutInfo/>
          <PaymentBlock/>
        </div>
        <OrderInfo/>
      </div>
      <Footer/>
    </div>
  );
};

export default PaymentPage;