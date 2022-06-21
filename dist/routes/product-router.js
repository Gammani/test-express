"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
exports.productsRouter = (0, express_1.Router)({});
const testMiddleware = (req, res, next) => {
    const title = req.body.title.trim();
    if (title !== '' && title.length > 3) {
        return next();
    }
    res.send(400);
};
exports.productsRouter.get('/', (req, res) => {
    var _a;
    const foundProducts = products_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProducts);
});
exports.productsRouter.get('/:id', (req, res) => {
    const product = products_repository_1.productsRepository.findProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.post('/', testMiddleware, (req, res) => {
    products_repository_1.productsRepository.createProduct(req.body.title);
    res.send(201);
});
exports.productsRouter.put('/:id', testMiddleware, (req, res) => {
    const isUpdate = products_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    if (isUpdate) {
        const product = products_repository_1.productsRepository.findProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRouter.delete('/:id', (req, res) => {
    const isDeleted = products_repository_1.productsRepository.deleteProduct(+req.params.id);
    if (isDeleted) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
//# sourceMappingURL=product-router.js.map