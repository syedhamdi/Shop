// src/items/items.service.ts

 import { BaseItem, Item } from "./item.interface";
 import { Items } from "./items.interface";

 

 let items: Items = {
    1: {
      id: 1,
      title: "EcoFlow Portable Power Station",
      price: 599,
      desc: "EcoFlow DELTA Power Station represents the new standard of battery-powered generators. Compatible with a wide range of devices, you can stay powered for hours whenever and wherever.",
      pic: "https://cdn.shopify.com/s/files/1/1996/9707/products/ecoflow-us-ecoflow-delta-2-portable-power-station-30045802102857_1024x1024@2x.png?v=1667531434",
      qty: 150
    },
    2: {
      id: 2,
      title: "Philips ProBlend Blender",
      price: 59,
      desc: "The Philips blender with ProBlend 6 and 800W motor can handle just about anything - from fruits/vegetables to ice. Its multi-speed function will blend, crush and cut for perfectly smooth blending and any consistency you want.",
      pic: "https://images.philips.com/is/image/philipsconsumer/641123317aaf4b1cbb06ad13016f2294?wid=420&hei=360&$jpglarge$",
      qty: 500
    },
    3: {
      id: 3,
      title: "Samsung BU8000 4K UHD Smart TV",
      price: 2499,
      desc: "Dynamic Crystal Colour - Lifelike colour, born in a pure state with fine crystal, Air Slim- Sleek and slim, more than ever, Crystal Processor 4K - Feel every shade of colour as intended in powerful 4K, Smart Hub - Discover your favorite movies, TV shows, games and ambient screens all in one place",
      pic: "https://images.samsung.com/is/image/samsung/p6pim/my/ua55bu8000kxxm/gallery/my-uhd-4k-tv-ua55bu8000kxxm-l-perspective-black-531386051?$684_547_PNG$",
      qty: 250
    },
    4: {
        id: 4,
        title: "Oral-B Vitality Electric Toothbrush",
        price: 129,
        desc: "The Oral-B Vitality Precision Clean electric toothbrush provides a clinically proven superior clean vs. a regular manual toothbrush. The round shape of the Precision Clean toothbrush head is designed to clean tooth by tooth, and 2D cleaning action oscillates and rotates for better plaque removal than a regular manual toothbrush. There is one mode – Daily Clean – and a pressure sensor to alert you if you brush too hard, plus an in-handle timer helps you brush for a dentist-recommended 2 minutes. Best of all it’s brought to you by Oral-B – the No. 1 brand used by dentists worldwide.",
        pic: "https://cdn11.bigcommerce.com/s-2idmiil7bp/images/stencil/640w/products/935/5951/pdp-io5-black-40__86859__49190.1668923638.jpg?c=1",
        qty: 700
    },
    5: {
        id: 5,
        title: "iPhone 14 Pro",
        price: 5299,
        desc: "A magical new way to interact with iPhone. A vital new safety feature designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate phone chip.",
        pic: "https://www.apple.com/v/iphone-14-pro/c/images/overview/display/display_brilliant__cxm59tsbth4y_large.jpg",
        qty: 100
    },
    6: {
        id: 6,
        title: "LG Smart UHD TV",
        price: 1399,
        desc: "The images used in the product overview below are for representative purposes. Refer to the image gallery at the top of the page for an accurate representation.",
        pic: "https://www.lg.com/my/images/tvs/md07529584/gallery/medium01.jpg",
        qty: 100
    }
  };


export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
    const id = new Date().valueOf();
  
    items[id] = {
      id,
      ...newItem,
    };
  
    return items[id];
  };

  export const update = async (
    id: number,
    itemUpdate: BaseItem
  ): Promise<Item | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    items[id] = { id, ...itemUpdate };
  
    return items[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete items[id];
  };