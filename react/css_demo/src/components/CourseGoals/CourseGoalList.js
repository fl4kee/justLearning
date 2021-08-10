import React from 'react';

import CourseGoalItem from './CourseGoalItem';
import styled from 'styled-components';

const Goal = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const CourseGoalList = props => {
  return (
    <Goal>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </Goal>
  );
};

export default CourseGoalList;
