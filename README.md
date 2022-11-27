# Shop 

### Getting Started
```bash
git clone https://github.com/syedhamdi/Shop.git
cd into shop
npm install

# Open localhost:8080
# To run test
npm run start-dev
```

POSTMAN     : Shop.postman_collection.json
DATABASE    : in-memory

### API
```bash
- List All Items                    : GET http://localhost:8080/api/items
- List Item By Id                   : GET http://localhost:8080/api/items/:id
- Search By Title And Description   : GET http://localhost:8080/api/items/search/:term
- Search By Title                   : GET http://localhost:8080/api/items/search/title/:term
- Search By Description             : GET http://localhost:8080/api/items/search/desc/:term
- Sort By Price (asc/desc)          : GET http://localhost:8080/api/items/sort/price/:order
- List All Orders                   : GET http://localhost:8080/api/orders
- Add Order                         : POST http://localhost:8080/api/orders
```