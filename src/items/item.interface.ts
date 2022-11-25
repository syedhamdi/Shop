// src/items/item.interface.ts

export interface BaseItem {
    title: string;
    desc: string;
    pic: string;
    price: number;
    qty: number;
}
  
export interface Item extends BaseItem {
    id: number;
}