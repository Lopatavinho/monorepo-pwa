import request from 'supertest';
import express from 'express';

const app = express();
app.get('/api/hello', (req, res) => res.json({ msg: 'Olá do backend!' }));

test('GET /api/hello retorna mensagem', async () => {
  const res = await request(app).get('/api/hello');
  expect(res.statusCode).toBe(200);
  expect(res.body.msg).toBe('Olá do backend!');
});
