import { create, read, update, deletePes, } from './pessoaModel.js';

export async function createPessoa(req, res) {
    const { nome, idade, cpf } = req.body;
    console.log('Dados recebidos do frontend:', { nome, idade, cpf });

    create(nome, idade, cpf, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.status(201).json({ mensagem: 'Pessoa criada com sucesso' });
    });
}

export async function getAllPessoas(req, res) {
    read((err, pessoas) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(pessoas);
    });
}

export async function updatePessoa(req, res) {
    const { id } = req.params;
    console.log('Dados recebidos do frontend',{id});
    const {nome,idade,cpf} = req.body;
    update(nome,idade,id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.send('Pessoa atualizada com sucesso');
    });
}

export async function deletePessoa(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend',{id});
    deletePes(id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.send('Pessoa excluída com sucesso');
    });
}
