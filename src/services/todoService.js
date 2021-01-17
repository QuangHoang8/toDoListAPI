import Axios from "axios";

const user = "sylk";
const apiEndpoint = "http://localhost:5000";
const getTodoEndpoint = `${apiEndpoint}/Todo/GetTodos`;
const addTodoEndpoint = `${apiEndpoint}/Todo/AddTodo`;
const changeTaskCompletedStateEndPoint = `${apiEndpoint}/Todo/ChangeTaskCompletedState`;
const changeTaskFavoriteStateEndPoint = `${apiEndpoint}/Todo/ChangeTaskFavoriteState`;
export const getToDos = async () => {
  return (
    await Axios.get(getTodoEndpoint, {
      params: {
        user: user,
      },
    })
  ).data.data;
};

export const addTodo = async (taskName) => {
  return await Axios.post(addTodoEndpoint, {
    user: user,
    taskName: taskName,
  });
};

export const changeTaskCompletedState = async (taskId, newStatus) => {
  return await Axios.post(changeTaskCompletedStateEndPoint, {
    taskId: taskId,
    isCompleted: newStatus,
  });
};

export const changeTaskFavoriteState = async (taskId, newStatus) => {
  return await Axios.post(changeTaskFavoriteStateEndPoint, {
    taskId: taskId,
    isFavorite: newStatus,
  });
};
