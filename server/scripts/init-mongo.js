db = db.getSiblingDB('dev-mobile-desafio-ponto');

db.users.insert([
    {user: "test1", password: "12345"},
    {user: "test2", password: "123456"},
]);