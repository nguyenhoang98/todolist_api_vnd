import React, { Component } from "react";
import "./TaskForm.css";
import PlusImg from "../../accsets/img/add_plus.png";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnResetForm = this.handleOnResetForm.bind(this);
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { addTasks } = this.props;
    addTasks(this.state);
    this.handleOnResetForm();
  }
  handleOnResetForm() {
    this.setState({
      name: "",
    });
  }
  render() {
    const { name } = this.state;
    const {
      handleSortTasks,
      sortTasks,
      filterTasks,
      handleFilterTasks,
    } = this.props;
    return (
      <div className="TaskForm flex">
        <div className="TaskForm__input">
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              className="TaskForm__input__action"
              value={name}
              onChange={this.handleOnchange}
              name="name"
              placeholder="Thêm Công Việc ..."
            />
          </form>
          <img
            src={PlusImg}
            className="plusImg"
            onClick={this.handleOnSubmit}
          />
        </div>
        <div className="TaskForm__control flex">
          <div className="TaskForm__control__sort">
            <select value={sortTasks} onChange={handleSortTasks}>
              <option value="default">Mặc Định</option>
              <option value="A">Theo Chữ Cái</option>
            </select>
          </div>
          <div className="TaskForm__control__filter">
            <select value={filterTasks} onChange={handleFilterTasks}>
              <option value={0}>Tất Cả</option>
              <option value={1}>Hoàn Thành</option>
              <option value={-1}>Chưa Hoàn Thành</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskForm;
