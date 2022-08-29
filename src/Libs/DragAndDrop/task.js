import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  background-color: white;
`;

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
