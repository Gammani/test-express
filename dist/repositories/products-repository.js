"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [
    { id: 1, title: "orange" },
    { id: 2, title: "apple" },
    { id: 3, title: "banana" },
    { id: 4, title: "tomato" },
    { id: 5, title: "potato" }
];
exports.productsRepository = {
    findProducts(title) {
        if (title) {
            const filteredProducts = products.filter(p => p.title.indexOf(title.toString()) > -1);
            return filteredProducts;
        }
        else {
            return products;
        }
    },
    findProductById(id) {
        const product = products.find(p => p.id === id);
        return product;
    },
    createProduct(title) {
        const newTitle = {
            id: +new Date(),
            title: title
        };
        products.push(newTitle);
        return newTitle;
    },
    deleteProduct(id) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    },
    updateProduct(id, title) {
        const product = products.find(p => p.id === id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    }
};
//# sourceMappingURL=products-repository.js.map