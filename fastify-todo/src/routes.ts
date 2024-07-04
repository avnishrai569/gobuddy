import { FastifyInstance } from 'fastify';

interface Todo {
    id: number;
    task: string;
}

let todos: Todo[] = [];
let idCounter = 1;

const routes = async (fastify: FastifyInstance) => {
    fastify.get('/todos', async (request, reply) => {
        return todos;
    });

    fastify.post<{ Body: { task: string } }>('/todos', async (request, reply) => {
        const { task } = request.body;
        const newTodo: Todo = { id: idCounter++, task };
        todos.push(newTodo);
        return newTodo;
    });
};

export default routes;
