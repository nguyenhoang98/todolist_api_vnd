import React, { Component } from "react";
import "./TaskListContainer.css";
import TaskItem from "../../Components/TaskItem/TaskItem";
class TaskListContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      tasks,
      handleOnDeleteTask,
      handleToggleStatus,
      updateTask,
    } = this.props;
    return (
      <div className="TaskListContainer">
        {tasks.map((value, index) => {
          return (
            <TaskItem
              data={value}
              key={index}
              handleOnDeleteTask={handleOnDeleteTask}
              handleToggleStatus={handleToggleStatus}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    );
  }
}

export default TaskListContainer;
