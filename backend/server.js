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

//delete
app.delete("/api/remove/:id", (req, res) => {
  const {id} = req.params
  const request = "DELETE FROM client WHERE id = ?"
  connection.query(request,id,(err, result)=>{
    if(err){
      console.log(err)
    }
  })
})




app.post("/api/post", (req, res) => {
  const { nom, emplacement, email, telephone } = req.body;
  const request = "INSERT INTO client(nom, emplacement, email, telephone) VALUES (?,?,?,?)";
  connection.query(request, [nom, emplacement, email, telephone], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'insertion des données dans la base de données.");
    } else {
      res.status(200).send("Données insérées avec succès dans la base de données.");
    }
  });
});

//connection a admin via form
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  connection.query(sql, [req.body.email, req.body.password], (err, data) =>{
    if (err) return res.json("Error");
    if(data.length > 0){
      return res.json("Login Succes")
    } else {
      return res.json("No record")
    }
  })
})


app.get("/api/get/:id",(req, res) => {
  const { id } = req.params;
  const requestG = "SELECT * FROM client WHERE id = ?";
  connection.query(requestG, id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Une erreur s'est produite lors de la récupération du client.");
    } else {
      res.send(result);
    }
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { nom, emplacement, email, telephone } = req.body;

  const request = "UPDATE client SET nom=?, emplacement=?, email=?, telephone=? WHERE id = ?";
  connection.query(request, [nom, emplacement, email, telephone, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Une erreur s'est produite lors de la mise à jour du client.");
    } else {
      res.send(result);
    }
  });
});




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



