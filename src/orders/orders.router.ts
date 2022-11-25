
 import express, { Request, Response } from "express";
 import * as OrderService from "./orders.service";
 import { BaseOrder, Order } from "./order.interface";

 import MiniSearch from 'minisearch';
 import { sortBy } from 'sort-by-typescript';



 export const ordersRouter = express.Router();

 // GET orders

 ordersRouter.get("/", async (req: Request, res: Response) => {
    try {
      const orders: Order[] = await OrderService.findAll();
  
      res.status(200).send(orders);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  
  // GET orders/:id
  
  ordersRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const order: Order = await OrderService.find(id);
  
      if (order) {
        return res.status(200).send(order);
      }
  
      res.status(404).send("order not found");
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // POST orders
  
  ordersRouter.post("/", async (req: Request, res: Response) => {
    try {
      const order: BaseOrder = req.body;
  
      const newOrder = await OrderService.create(order);
  
      res.status(201).json(newOrder);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // PUT orders/:id
  
  ordersRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const orderUpdate: Order = req.body;
  
      const existingOrder: Order = await OrderService.find(id);
  
      if (existingOrder) {
        const updatedOrder = await OrderService.update(id, orderUpdate);
        return res.status(200).json(updatedOrder);
      }
  
      const newOrder = await OrderService.create(orderUpdate);
  
      res.status(201).json(newOrder);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // DELETE orders/:id
  
  ordersRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await OrderService.remove(id);
  
      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e);
    }
  });