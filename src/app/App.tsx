import { OrderProvider } from "../hooks/use-order/context.tsx";
import PaymentPage from "../pages/payment-page/PaymentPage.tsx";

function App() {
  return (
    // Since this is an order payment page, there should be a context of a particular order
    <OrderProvider>
      <PaymentPage/>
    </OrderProvider>
  )
}

export default App
