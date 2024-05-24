import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistemacrud'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao realizar conexão com BD:', err);
        throw err;
    }
    console.log('Conexão com BD estabelecida com sucesso!');
});

export default connection;
