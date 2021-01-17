import React from "react";
import _ from "lodash";
import ListItem from "./ListItem";

function CompleteTask({
  completedItems,
  onChangeCompleteStatus,
  onChangeFavoriteStatus,
}) {
  const sortedInCompletedListItem = _.orderBy(
    completedItems,
    ["completedDate"],
    ["desc"]
  );

  return (
    <ListItem
      listName="Completed"
      renderedItems={sortedInCompletedListItem}
      onChangeCompleteStatus={onChangeCompleteStatus}
      onChangeFavoriteStatus={onChangeFavoriteStatus}
    />
  );
}

export default CompleteTask;
