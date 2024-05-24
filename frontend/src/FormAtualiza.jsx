import React, {useState} from 'react';

function FormAtualiza() {

    const [formValores, setFormValores] = useState({
        id: '',
        nome:'',
        idade:'',
        cpf: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Dados a serem enviados:", formValores.id);
            const response = await fetch(`http://localhost:3000/pessoas/{formValores.id}`, {
                method: 'UPDATE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
            const json = await response.json();
            console.log(response)
            console.logj(json);
           
        } catch (error) {
            console.error("Erro ao  enviar:", err)
        }
    };

    return (
      
           
            <form onSubmit={handleSubmit}>
              
            ID a ser atualizado:
                    <input type="text" name="id" value={formValores.id} onChange={handleChange} />
               
                    Nome:
                    <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
                    Idade:
                    <input type="number" name="idade" value={formValores.idade} onChange={handleChange} />
                 
                    CPF:
                    <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
                
             
                <button type="submit" onclick={handleSubmit}>Atualizar</button>
            </form>
     
    );
}

export default FormAtualiza;
    