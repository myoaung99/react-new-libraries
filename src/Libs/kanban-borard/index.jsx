import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const itemsFromBackend = [
  {
    id: uuid(),
    content: "First Task",
  },
  {
    id: uuid(),
    content: "Second Task",
  },
];

const columnFromBackend = {
  [uuid()]: {
    name: "Todo",
    items: itemsFromBackend,
  },
};

const test = Object.entries(columnFromBackend).map(([id, column]) => id);

console.log(test);

const ReactDnd = () => {
  const [columns, setColumns] = useState(columnFromBackend);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <DragDropContext>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgray",
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  color: "white",
                                  backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                  minHeight: 50,
                                  marginBottom: 8,
                                  padding: 16,
                                  userSelect: "none",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {item.content}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default ReactDnd;
