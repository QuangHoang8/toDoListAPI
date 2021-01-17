import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import classes from "./TaskListItems.module.css";

function TaskListItems({
  task,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  return (
    <li key={task.id}>
      <div className={classes.wrapItem}>
        <div className={classes.wrap}>
          <input
            defaultChecked={task.isCompleted}
            type="checkbox"
            onClick={() => onChangeCompleteStatus(task.id, !task.isCompleted)}
          />
          <label>{task.taskName}</label>
        </div>
        {task.isCompleted ? (
          <span></span>
        ) : task.isFavorite ? (
          <StarFilled
            onClick={() => onChangeFavoriteStatus(task.id, !task.isFavorite)}
            style={{
              color: "blue",
            }}
          />
        ) : (
          <StarOutlined
            onClick={() => onChangeFavoriteStatus(task.id, !task.isFavorite)}
          />
        )}
      </div>
    </li>
  );
}
export default TaskListItems;
