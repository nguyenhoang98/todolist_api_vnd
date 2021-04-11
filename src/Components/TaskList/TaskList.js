import React, { Component } from "react";
import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
class TaskList extends Component {
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
      <div className="TaskList">
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

export default TaskList;
