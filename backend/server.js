const cors = require('cors');

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Ajoutez votre mot de passe si nécessaire
  database: 'huttopia'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données MySQL :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL !');
});

app.get('/api/get', (req, res) => {
  const request = "SELECT * FROM client"
  connection.query(request,(err, result)=>{
    res.send(result)
  })
})

//test web
app.listen({port})
//fin test web
//test
connection.query("SELECT * FROM client", (err, rows, fields) => {
  if(err) throw err;
    console.log("les données sont : ", rows)

})
//fin test


// Route pour gérer la connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Requête SQL pour récupérer l'utilisateur avec l'email spécifié
  const query = 'SELECT * FROM admin WHERE email = ?';
  
  connection.query(query, [email], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'interrogation de la base de données :', err);
      res.status(500).json({ message: 'Erreur serveur lors de la connexion.' });
      return;
    }

    if (results.length === 0) {
      // Aucun utilisateur trouvé avec cet email
      res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      return;
    }

    const user = results[0];
    if (user.password !== password) {
      // Mot de passe incorrect
      res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      return;
    }

    // Authentification réussie
    res.status(200).json({ message: 'Connexion réussie ! Redirection vers la page de tableau de bord...' });
  });
});



