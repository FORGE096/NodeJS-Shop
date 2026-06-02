function getRootRouter(request, response) {
    response.send({
        CODE: response.statusCode,
        MESSAGE: "API Service Working \n Version 1.0.0",
    });
}

function postRootRouter(request, response) {
    response.status(400).json({
        CODE: response.statusCode,
        MESSAGE: "Cannot Post Data To Route!",
    });
}
module.exports = { getRootRouter, postRootRouter };