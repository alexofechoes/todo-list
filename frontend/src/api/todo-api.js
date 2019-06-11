import axios from "axios";

const todoApiEndpoint = "http://localhost:8888/todo/";

export const fetchTodoList = async () => {
    const { data } = await axios.get(`${todoApiEndpoint}?format=json`);
    return data;
};

export const createTodo = async (name) => {
    const { data } = await axios.post(todoApiEndpoint, { name });
    return data;
}

export const updateTodo = async (todoId, todoData) => {
    await axios.put(`${todoApiEndpoint}${todoId}/`, todoData);
}

export const deleteTodo = async (todoId) => {
    await axios.delete(`${todoApiEndpoint}${todoId}/`);
}
