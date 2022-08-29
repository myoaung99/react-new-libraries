import React from "react";
import Task from "./task";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  margin-bottom: 0;
`;

const Column = (props) => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
