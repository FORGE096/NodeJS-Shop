async function testUserRoot(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "Service Working",
    });
}

module.exports = { testUserRoot }; 