const express = require("express");

const app = express();

const PORT = 65510;

app.listen(PORT, () => {
    console.log(`Rinning On Port ${PORT}`);
});