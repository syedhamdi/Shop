// src/orders/orders.service.ts

 import { BaseOrder, Order } from "./order.interface";
 import { Orders } from "./orders.interface";
 


 let orders: Orders = {
    /*1: {
        id: 1,
        ordNo: 1001,
        custId: 100,
        itemId: 1,
        ordQty: 20
    },
    2: {
        id: 2,
        ordNo: 1002,
        custId: 101,
        itemId: 2,
        ordQty: 30
    },
    3: {
        id: 3,
        ordNo: 1003,
        custId: 102,
        itemId: 3,
        ordQty: 40
    }*/
  };

  
  
export const findAll = async (): Promise<Order[]> => Object.values(orders);

export const find = async (id: number): Promise<Order> => orders[id];

export const create = async (newOrder: BaseOrder): Promise<Order> => {
    const id = new Date().valueOf();
  
    orders[id] = {
      id,
      ...newOrder,
    };
  
    return orders[id];
  };

  export const update = async (
    id: number,
    orderUpdate: BaseOrder
  ): Promise<Order | null> => {
    const Order = await find(id);
  
    if (!Order) {
      return null;
    }
  
    orders[id] = { id, ...orderUpdate };
  
    return orders[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const order = await find(id);
  
    if (!order) {
      return null;
    }
  
    delete orders[id];
  };