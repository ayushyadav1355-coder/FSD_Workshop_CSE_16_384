const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let usersData = []; 

app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Required' });

  const newUser = { id: Date.now(), name, email };
  usersData.push(newUser);
  
  console.log(`Saved new user: ${name} (${email})`);
  res.status(200).json({ message: 'Success!', user: newUser });
});

app.get('/api/users', (req, res) => {
  res.status(200).json(usersData);
});

// THIS is the crucial part that keeps the server running
app.listen(PORT, () => {
  console.log(`Express API running on http://localhost:${PORT}`);
});