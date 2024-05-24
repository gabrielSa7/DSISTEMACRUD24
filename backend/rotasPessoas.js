import express from "express";
const app = express();
import cors from "cors";
//const connection = require('./db');
import { getAllPessoas,createPessoa, updatePessoa, deletePessoa } from "./pessoasController.js";


app.use(express.json());
app.use(cors());

app.get('/pessoas', getAllPessoas);
app.post('/pessoas', createPessoa);
app.put('/pessoas/:id', updatePessoa);
app.delete('/pessoas/:id', deletePessoa);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});
