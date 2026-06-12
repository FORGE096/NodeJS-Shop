const Product = require("../../models/product");

async function addProduct(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Add Product",
    });
}

async function deleteProduct(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Delete Product",
    });
}

async function updateProduct(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Update Product",
    });
}

module.exports = {
    addProduct,
    deleteProduct,
    updateProduct,
}