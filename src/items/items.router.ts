 import express, { Request, Response } from "express";
 import * as ItemService from "./items.service";
 import { BaseItem, Item } from "./item.interface";

 import MiniSearch from 'minisearch';
 import { sortBy } from 'sort-by-typescript';



 export const itemsRouter = express.Router();



  // GET items

 itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  
  // GET items/:id
  
  itemsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const item: Item = await ItemService.find(id);
  
      if (item) {
        return res.status(200).send(item);
      }
  
      res.status(404).send("item not found");
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // POST items
  
  itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
  
      const newItem = await ItemService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // PUT items/:id
  
  itemsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const itemUpdate: Item = req.body;
  
      const existingItem: Item = await ItemService.find(id);
  
      if (existingItem) {
        const updatedItem = await ItemService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }
  
      const newItem = await ItemService.create(itemUpdate);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // DELETE items/:id
  
  itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await ItemService.remove(id);
  
      res.sendStatus(204);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  // SEARCH TITLE AND DESCRIPTION search/title/:term

  itemsRouter.get("/search/:term", async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();
        const term: string = String(req.params.term);
    
        let miniSearch = new MiniSearch({
            fields: ['title', 'desc', 'text'],
            storeFields: ['title', 'desc', 'category'],
          })
          
          miniSearch.addAll(items)
          
          let results = miniSearch.search(term, { prefix: true })

        res.status(200).send(results);
      } catch (e) {
          res.status(500).send(e);
      }
  });

  // SEARCH TITLE search/title/:term

  itemsRouter.get("/search/title/:term", async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();
        const term: string = String(req.params.term);
    
        let miniSearch = new MiniSearch({
            fields: ['title', 'text'],
            storeFields: ['title', 'category']
          })
          
          miniSearch.addAll(items)
          
          let results = miniSearch.search(term, { prefix: true })

        res.status(200).send(results);
      } catch (e) {
          res.status(500).send(e);
      }
  });

  // SEARCH DESCRIPTION search/desc/:term

  itemsRouter.get("/search/desc/:term", async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();
        const term: string = String(req.params.term);
    
        let miniSearch = new MiniSearch({
            fields: ['desc', 'text'],
            storeFields: ['desc', 'category']
          })
          
          miniSearch.addAll(items)
          
          let results = miniSearch.search(term, { prefix: true })

        res.status(200).send(results);
      } catch (e) {
          res.status(500).send(e);
      }
  });

  // SORT PRICE sort/price/:order

  itemsRouter.get("/sort/price/:order", async (req: Request, res: Response) => {
    try {
      const order: string = String(req.params.order);
      const items: Item[] = await ItemService.findAll();
      
      if(order == 'asc'){
        const ret: Item[] = items.sort(sortBy('price'));
        res.status(200).send(ret);
      }else if(order == 'desc'){
        const ret: Item[] = items.sort(sortBy('-price'));
        res.status(200).send(ret);
      }
    } catch (e) {
        res.status(500).send(e);
    }
  });