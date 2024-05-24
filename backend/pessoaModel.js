import connection from './db.js';

export function read(callback) {
    connection.query('SELECT * from pessoas_dados where ativo_pessoa = 1', callback);
}

export function create(nome, idade, cpf, callback) {
    connection.query('INSERT INTO pessoas_dados (nome, idade, cpf) VALUES (?, ?, ?)', [nome, idade, cpf], callback);
}

export function update(id, idade,cpf,callback) {
    connection.query('UPDATE pessoas_dados set nome = ?,cpf = ?, ativo_pessoa = 1 where id_pessoa = ?', [nome,idade,cpf, id], callback);
}

export function deletePes(id, callback) {
    connection.query('DELETE from pessoas_dados where id_pessoa where id = ?', [id], callback);
}
