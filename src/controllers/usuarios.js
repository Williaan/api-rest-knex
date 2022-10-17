const knex = require('../conexao');


const listUsers = async (request, response) => {

    try {
        const users = await knex('usuarios');
        return response.status(200).json(users);

    } catch (error) {
        return response.status(400).json({ mensagem: `Erro interno: ${error.message}` });
    }
}

const obterUser = async (request, response) => {
    const { id } = request.params;

    try {
        const user = await knex('usuarios').where({ id }).first();

        if (!user) {
            return response.status(404).json({ mensagem: 'Usuário não encontado!' })
        }

        return response.status(200).json(user)

    } catch (error) {
        CCC
    }

}

const createUser = async (request, response) => {
    const { nome, email, senha } = request.body;

    if (!nome) {
        return response.status(400).json({ mensagem: 'O campo Nome é brigatório!' })
    }
    if (!email) {
        return response.status(400).json({ mensagem: 'O campo E-mail é brigatório!' })
    }
    if (!senha) {
        return response.status(400).json({ mensagem: 'O campo Senha é brigatório!' })
    }

    try {
        const cadastrar = await knex('usuarios').insert({ nome, email, senha }).returning('*');

        if (cadastrar.length === 0) {
            return response.status(400).json({ mensagem: 'Não fopi possivél cadastrar usuario!' })
        }

        return response.status(200).json(cadastrar[0]);

    } catch (error) {
        return response.status(400).json({ mensagem: `Erro interno: ${error.message}` });
    }

}

const updateUser = async (request, response) => {
    const { nome, email, senha } = request.body;
    const { id } = request.params;

    try {
        const userExsists = await knex('usuarios').where({ id }).first();

        if (!userExsists) {
            return response.status(404).json({ mensagem: 'Usuário não encontado!' });
        }

        const atualizaUser = await knex('usuarios').update({ nome, email, senha }).where({ id });

        if (!atualizaUser) {
            return response.status(400).json({ mensagem: 'Não foi possivel atualizar o usuario!' })
        }

        return response.status(200).json('Atualizado com Sucesso!');

    } catch (error) {

        return response.status(400).json({ mensagem: `Erro interno: ${error.message}` });
    }

}

const deleteUser = async (request, response) => {
    const { id } = request.params;

    try {
        const userExsists = await knex('usuarios').where({ id }).first();

        if (!userExsists) {
            return response.status(404).json({ mensagem: 'Usuário não encontado!' })
        }

        const excluirUser = await knex('usuarios').del().where({ id });

        if (!excluirUser) {
            return response.status(404).json({ mensagem: 'Não foi possivel excluir o ususario!' })
        }

        return response.status(200).json('Usuário excluído com sucesso!')

    } catch (error) {
        return response.status(400).json({ mensagem: `Erro interno: ${error.message}` });
    }
}



module.exports = {
    listUsers,
    obterUser,
    createUser,
    updateUser,
    deleteUser
}