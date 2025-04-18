const express = require('express');
const path = require('path');
import { spawn } from 'child_process';

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques générés par Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Gérer toutes les autres routes et renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function runServerAfterBuild() {
  return {
    name: 'run-server-after-build',
    closeBundle() {
      console.log('Starting server.js...');
      const server = spawn('node', ['server.js'], { stdio: 'inherit' });

      server.on('close', (code) => {
        console.log(`Server process exited with code ${code}`);
      });
    },
  };
}