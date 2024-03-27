const cors = require('cors');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');


const router = express.Router();


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




// Route pour ajouter un nouveau client
app.post("/api/client", (req, res) => {
  const { nom, emplacement, email, telephone } = req.body;
  const request = "INSERT INTO client(nom, emplacement, email, telephone) VALUES (?,?,?,?)";
  connection.query(request, [nom, emplacement, email, telephone], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'ajout du client.");
    } else {
      const clientId = result.insertId; // Récupérer l'ID du client nouvellement ajouté
      res.status(200).json({ id: clientId }); // Retourner l'ID du client
    }
  });
});

//connection a admin via form
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  connection.query(sql, [req.body.email, req.body.password], (err, data) =>{
    if (err) return res.json("Error");
    if(data.length > 0){
      const admin = data[0];
      const token = jwt.sign({id: admin.id, email: admin.email}, 'test', {expiresIn: 300})
      res.status(200).json({ token: token });  
    } else {
      return res.json("No record")
    }
  })
})

//////////////////////////////////////////TESST

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
  const { id } = req.params;XCVqd
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






// Route pour récupérer toutes les commandes
app.get('/api/commandes', (req, res) => {
  const request = "SELECT * FROM commande";
  connection.query(request, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la récupération des commandes.");
    } else {
      res.json(result);
    }
  });
});

// Route pour ajouter une nouvelle commande
app.post('/api/commandes', (req, res) => {
  const { id_client, id_article, quantite } = req.body;
  const request = "INSERT INTO commande (id_client, id_article, quantite) VALUES (?, ?, ?)";
  connection.query(request, [id_client, id_article, quantite], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de la commande.");
    } else {
      res.status(200).send("Commande ajoutée avec succès.");
    }
  });
});

// Route pour supprimer une commande
app.delete('/api/commandes/:id', (req, res) => {
  const id = req.params.id;
  const request = "DELETE FROM commande WHERE id = ?";
  connection.query(request, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la suppression de la commande.");
    } else {
      res.status(200).send("Commande supprimée avec succès.");
    }
  });
});

// Route pour récupérer tous les articles
app.get('/api/articles', (req, res) => {
  const sql = 'SELECT * FROM article'; // Utiliser la table 'article' au lieu de 'client'
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la récupération des articles.");
    } else {
      res.json(results);
    }
  });
});

// Route pour ajouter un nouvel article
app.post('/api/articles', (req, res) => {
  const { nom, description, prix } = req.body;
  const sql = 'INSERT INTO article (nom, description, prix) VALUES (?, ?, ?)';
  connection.query(sql, [nom, description, prix], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de l'article.");
    } else {
      res.status(200).send("Article ajouté avec succès.");
    }
  });
});

// Route pour supprimer un article
app.delete('/api/articles/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM article WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erreur lors de la suppression de l'article.");
    } else {
      res.status(200).send("Article supprimé avec succès.");
    }
  });
});

