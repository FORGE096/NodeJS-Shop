const express = require('express');

async function buyProduct(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Service Working",
    });
}

async function updateUser(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Service Working",
    });
}

module.exports = {
    buyProduct,
    updateUser,
}