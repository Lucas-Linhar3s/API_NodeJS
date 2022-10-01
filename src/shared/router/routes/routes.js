const { Router } = require("express");
const Products = require("../../../modules/products/controller/AppController");
const Users = require("../../../modules/users/controller/AppController");

const routes = Router();

{
        // routes products
        routes.get('/products/:params', Products.GetOneProducts);
        routes.get('/products', Products.GetProducts);
        routes.delete('/products/:id', Products.DeleteProducts);
        routes.post('/products', Products.PostProducts);
        routes.put('/products/:id', Products.UpdateProducts);
}

{
        // routes users
        routes.get('/users', Users.GetUsers);
        routes.get('/users/:params', Users.GetOneUsers);
        routes.post('/users', Users.PostUsers);
        routes.delete('/users/:id', Users.DeleteUsers);
        routes.put('/users/:id', Users.UpdateUsers);
}

module.exports = routes;