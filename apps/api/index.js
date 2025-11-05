import express from 'express';
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Olá do backend!' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});
