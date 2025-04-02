import { createContext, useState, useCallback, type FC, type ReactNode } from "react";
import type { Order, OrderContextValue } from "./types.ts";

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

const OrderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<Order>({
    name: "",
    info: "",
    description: "",
    type: "",
    price: 0,
  });

  const update = useCallback((newOrder: Partial<Order>) => {
    setOrder((prev) => ({ ...prev, ...newOrder }));
  }, []);

  return (
    <OrderContext.Provider value={{ order, update }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider, OrderContext }