const express = require('express');

async function buyProduct(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Service Working",
    });
}

module.exports = {
    buyProduct,
}