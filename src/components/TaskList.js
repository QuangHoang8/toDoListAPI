import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

function TaskList({
  incompleteItems,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  const sortedInCompletedListItem = _.orderBy(
    incompleteItems,
    ["isFavorite", "createdDate"],
    ["desc", "desc"]
  );

  return (
    <ListItem
      listName="Tasks"
      renderedItems={sortedInCompletedListItem}
      onChangeCompleteStatus={onChangeCompleteStatus}
      onChangeFavoriteStatus={onChangeFavoriteStatus}
    />
  );
}

export default TaskList;
