import React, { useState, useEffect } from "react";
import _ from "lodash";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {
  addTodo,
  getToDos,
  changeTaskCompletedState,
  changeTaskFavoriteState,
} from "./services/todoService";

import "./App.css";

function App() {
  const [taskLists, setTaskLists] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadingCount, setLoadingCount] = useState(0);
  const [loadingCountAddToDo, setLoadingCountAddToDo] = useState(0);
  const [
    loadingCountChangeTaskCompletedStatus,
    setLoadingCountChangeTaskCompletedStatus,
  ] = useState(0);
  const [
    loadingCountChangeFavoriteStatus,
    setLoadingCountChangeFavoriteStatus,
  ] = useState(0);

  useEffect(async () => {
    try {
      const response = await getToDos();
      setTaskLists(response);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [
    loadingCount,
    loadingCountAddToDo,
    loadingCountChangeTaskCompletedStatus,
    loadingCountChangeFavoriteStatus,
  ]);

  const renderContent = () => {
    return isLoading &&
      isLoadingAddToDo &&
      isLoadingChangeCompleteStatus &&
      isLoadingChangeFavoriteStatus ? (
      "Loading..."
    ) : (
      <>
        <Header onAddTodo={handleAddTodo} />
        <TaskList
          incompleteItems={inCompletedList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        <CompleteTask
          completedItems={completedList}
          onChangeCompleteStatus={handleChangeCompleteStatus}
          onChangeFavoriteStatus={handleChangeFavoriteStatus}
        />
        ;
      </>
    );
  };

  const renderButton = () => {
    return (
      <div>
        <button
          onClick={() => {
            setIsError(false);
            setIsLoading(true);
            setIsErrorAddToDo(false);
            setIsLoadingAddToDo(true);
            setLoadingCount(loadingCount + 1);
            setLoadingCountAddToDo(loadingCountAddToDo + 1);
            setLoadingCountChangeTaskCompletedStatus(
              loadingCountChangeTaskCompletedStatus + 1
            );
            setLoadingCountChangeFavoriteStatus(
              loadingCountChangeFavoriteStatus + 1
            );
          }}
        >
          Tải lại
        </button>
      </div>
    );
  };

  const [isLoadingAddToDo, setIsLoadingAddToDo] = useState(true);
  const [isErrorAddToDo, setIsErrorAddToDo] = useState(false);

  const handleAddTodo = async (newTaskName) => {
    try {
      await addTodo(newTaskName);
      setLoadingCountAddToDo(loadingCountAddToDo + 1);
    } catch {
      setIsErrorAddToDo(true);
    } finally {
      setIsLoadingAddToDo(false);
    }
  };

  const [
    isLoadingChangeCompleteStatus,
    setIsLoadingChangeCompleteStatus,
  ] = useState(true);
  const [
    isErrorChangeCompleteStatus,
    setIsErrorChangeCompleteStatus,
  ] = useState(false);

  const handleChangeCompleteStatus = async (taskId, newStatus) => {
    try {
      await changeTaskCompletedState(taskId, newStatus);
      setLoadingCountChangeTaskCompletedStatus(
        loadingCountChangeTaskCompletedStatus + 1
      );
    } catch {
      setIsErrorChangeCompleteStatus(true);
    } finally {
      setIsLoadingChangeCompleteStatus(false);
    }
  };

  const [
    isLoadingChangeFavoriteStatus,
    setIsLoadingChangeFavoriteStatus,
  ] = useState(true);
  const [
    isErrorChangeFavoriteStatus,
    setIsErrorChangeFavoriteStatus,
  ] = useState(false);

  const handleChangeFavoriteStatus = async (taskId, newStatus) => {
    try {
      await changeTaskFavoriteState(taskId, newStatus);
      setLoadingCountChangeFavoriteStatus(loadingCountChangeFavoriteStatus + 1);
    } catch {
      setIsErrorChangeFavoriteStatus(true);
    } finally {
      setIsLoadingChangeFavoriteStatus(false);
    }
  };

  const [completedList, inCompletedList] = _.partition(
    taskLists,
    (t) => t.isCompleted
  );

  return (
    <div className="App">
      {isError ||
      isErrorAddToDo ||
      isErrorChangeCompleteStatus ||
      isErrorChangeFavoriteStatus
        ? renderButton()
        : renderContent()}
    </div>
  );
}

export default React.memo(App);
