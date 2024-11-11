const request = require('supertest')

// 1 - Teste para planeta existente
test('Retorna as informações de cadastro ao pesquisar um planeta existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Tatooine');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/1/');
    console.log(resposta.status);
    console.log(resposta.body);
});

// 2 - Teste para um planeta inexistente
test('Retorna erro 404 ao pesquisar um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' });
});

// 3 - Teste para uma pessoa existente

test('Retorna as informações de cadastro ao pesquisar uma pessoa existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Luke Skywalker');
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');
    console.log(resposta.status);
    console.log(resposta.body);
});

// 4 - Teste para uma pessoa inexistente
test('Retorna erro 404 ao pesquisar uma pessoa inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' });
});

// 5 - Teste para buscar uma nave espacial existente
test('Retorna as informações de cadastro ao pesquisar uma nave existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/10/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Millennium Falcon');
    expect(resposta.body.model).toBeDefined();
    expect(resposta.body.manufacturer).toBeDefined();
    console.log(resposta.status);
    console.log(resposta.body);
});

// 6 - Teste para buscar uma nave espacial inexistente
test('Retorna erro 404 ao pesquisar uma nave inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' });
});

// 7 - Teste para buscar um filme existente
test('Retorna as informações de cadastro ao pesquisar um filme existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/1/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
    expect(resposta.body.director).toBe('George Lucas');
    expect(resposta.body.episode_id).toBe(4);
    console.log(resposta.status);
    console.log(resposta.body);
});

// 8 - Teste para buscar um veículo existente
test('Retorna as informações de cadastro ao pesquisar um veículo existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/4/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Sand Crawler');
    expect(resposta.body.manufacturer).toBe('Corellia Mining Corporation');
    expect(resposta.body.vehicle_class).toBe('wheeled');
    console.log(resposta.status);
    console.log(resposta.body);
});

// 9 - Teste para um veículo inexistente
test('Retorna erro 404 ao pesquisar um veículo inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({ detail: 'Not found' });
});

// 10 -  Teste para buscar uma espécie existente
test('Retorna as informações de cadastro ao pesquisar uma espécie existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/3/');
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Wookie');
    expect(resposta.body.language).toBe('Shyriiwook');
    expect(resposta.body.classification).toBe('mammal');
    console.log(resposta.status);
    console.log(resposta.body);
});

