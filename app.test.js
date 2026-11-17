const request = require('supertest');
const app = require('./app');

describe('Testes da API', () => {
    it('Deve retornar Olá, Jenkins!', async () => {
        const res = await request(app).get('/api/saudacao');
        expect(res.statusCode).toEqual(200);
        expect(res.body.mensagem).toBe('Olá, Jenkins!');
    });

    it('Deve somar 2 + 3 e retornar 5', async () => {
        const res = await request(app).get('/api/soma?a=2&b=3');
        expect(res.statusCode).toEqual(200);
        expect(res.body.resultado).toBe(5);
    });
});
