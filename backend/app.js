const express = require('express');
const app = express();

app.use((req, res) => {
    res.json({message:'Tout fonctionne bien'});
});

module.exports = app;