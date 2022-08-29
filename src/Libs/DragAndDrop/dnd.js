import React, { useState } from "react";
import initialData from "./initialData";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

const DragAndDrop = () => {
  const [data, setData] = useState(initialData);

  let column;
  let tasks;

  data.columnOrder.map((columnId) => {
    column = data.columns[columnId];
    tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
    return null;
  });

  const dragEndHandler = (result) => {
    const { destination, draggableId, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    setData((previousData) => {
      return {
        ...previousData,
        columns: {
          ...previousData.columns,
          [newColumn.id]: newColumn,
        },
      };
    });
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Column key={column.id} column={column} tasks={tasks} />
    </DragDropContext>
  );
};

export default DragAndDrop;
