const express = require('express');

const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.send('ACCUEIL');
});

app.use('/', router);

app.listen(process.argv[2] || process.env.PORT || 3000, () => {
  console.log("Le serveur est en écoute sur ${process.argv[2] || process.env.PORT || 3000} et ${process.argv[2] || process.env.PORT || 3001}");
});

