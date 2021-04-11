import React, { Component } from "react";
import "./TaskItem.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      disabled: true,
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  componentDidMount() {
    const { data } = this.props;
    this.setState({
      name: data.name,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        name: nextProps.data.name,
      });
    }
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  editForm() {
    this.setState({
      disabled: false,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { updateTask, data } = this.props;
    const { id, status } = data;
    updateTask({ name, id, status });
    this.setState({
      disabled: true,
    });
  }
  render() {
    const { data, handleOnDeleteTask, handleToggleStatus } = this.props;
    const { disabled, name } = this.state;
    return (
      <div className="TaskItem flex">
        <div className="TaskItem__name">
          <form onSubmit={this.handleOnSubmit}>
            <span onDoubleClick={this.editForm}>
              {disabled ? (
                <span
                  style={{
                    textDecoration: data.status ? "line-through" : "none",
                    display: "inline-block",
                    width: 200,
                  }}
                >
                  {data.name}
                </span>
              ) : (
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={this.handleOnchange}
                  style={{
                    width: 200,
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid #333",
                  }}
                />
              )}
            </span>
          </form>
        </div>
        <div className="TaskItem__action">
          <span
            style={{
              color: data.status ? "blue" : "red",
            }}
            onClick={() => handleToggleStatus(data)}
          >
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
          <span
            className="TaskItem__action__close"
            onClick={() => handleOnDeleteTask(data)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default TaskItem;
