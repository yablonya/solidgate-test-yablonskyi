export interface Order {
  name: string;
  info: string;
  description: string;
  type: string;
  price: number;
}

export interface OrderContextValue {
  order: Order;
  update: (newOrder: Partial<Order>) => void;
}