import { useContext } from "react";
import type { OrderContextValue } from "./types.ts";
import { OrderContext } from "./context.tsx";

export const useOrder = (): OrderContextValue => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }

  return context;
};