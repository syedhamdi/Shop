// src/orders/order.interface.ts

export interface BaseOrder {
    ordNo: number;
    custId: number;
    itemId: number;
    ordQty: number;
}
  
export interface Order extends BaseOrder {
    id: number;
}