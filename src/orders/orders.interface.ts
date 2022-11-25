// src/orders/orders.interface.ts

import { Order } from "./order.interface";

export interface Orders {
  [key: number]: Order;
}