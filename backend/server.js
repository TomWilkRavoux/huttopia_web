const cors = require('cors');
const jwt = require('jsonwebtoken');
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
  const { email, password } = req.body;

  // 1. Authentification de l'utilisateur (requête à la base de données)
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  connection.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ message: 'Error' });

    // 2. Vérification de l'existence de l'utilisateur et de la correspondance du mot de passe
    if (data.length === 0) {
      return res.json({ message: 'Login Failed' });
    }

    // 3. Génération du token JWT pour l'utilisateur authentifié
    const user = data[0]; // En supposant que le premier élément de data est l'objet utilisateur
    const token = jwt.sign({ email: user.email }, 'votre_clé_secrète', { expiresIn: '1h' });

    // 4. Envoi d'une réponse de connexion réussie avec le token
    res.json({ message: 'Login Succes', token: token });
  });
});

//////////////////////////////////////////TESST
app.get('/dashboard', verifyToken, (req, res) => {
  // ... Contenu de la page Dashboard
});

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, 'votre_clé_secrète', (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}
////////////////////////////////////////////////


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
