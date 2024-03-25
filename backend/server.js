
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'huttopia'
  });

  
  
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données MySQL :', err);
      return;
    }
    console.log('Connecté à la base de données MySQL !');
  });
  
  app.use(express.urlencoded({ extended: true }));
  
  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    connection.query('SELECT * FROM admin WHERE email = ? AND mdp = ?', [username, password], (err, results) => {
      if (err) {
        console.error('Erreur lors de la vérification des informations de connexion :', err);
        res.status(500).send('Erreur serveur lors de la connexion.');
        return;
      }
  
      if (results.length === 0) {
        // Informations de connexion invalides
        res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect.');
      } else {
        // Authentification réussie, rediriger ou renvoyer une réponse réussie
        res.send('Connexion réussie ! Redirection vers la page de tableau de bord...');
      }
    });
  });
  

app.use(cors());



app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "chutttt"]});
});


app.listen(5000, () => {
    console.log("Listening on port 5000");
});


