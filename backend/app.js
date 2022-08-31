const express = require('express');
const app = express();
const mongoose = require ('mongoose');

//remplacer l'adresse SRV par la vôtre, et la chaîne <PASSWORD> par votre mot de passe utilisateur
mongoose.connect('mongodb+srv://mongouserP6OC:cCUCa9KIMpRH2Ifl@cluster0.bvjnxhq.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res) => {
    res.json({message:'Tout fonctionne bien'});
});



module.exports = app;