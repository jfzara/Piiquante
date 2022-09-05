const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bvjnxhq.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // * means all origins
  res.setHeader("Access-Control-Allow-Credentials", "true"); // allows cookies to be sent
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); // allows headers to be sent
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); // allows methods to be sent
  next()
});



app.use((req, res) => {
  res.json({ message: 'Tout fonctionne bien' });
});
app.use('/api/auth', userRoutes);


module.exports = app;

