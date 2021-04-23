import React, { Component } from "react";
import "./TaskWrap.css";
import TaskForm from "../TaskForm/TaskForm";
import TaskListContainer from "../../Containers/TaskListContainer/TaskListContainer";
import qs from "query-string";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handleAxios from "../../axiosServices/handleAxios";
const url = "https://znm70.sse.codesandbox.io/tasks";
class TaskWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      sortTasks: "default",
      filterTasks: 0,
      selectedID: null,
    };
    this.addTasks = this.addTasks.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
    this.findindex = this.findindex.bind(this);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.handleSortTasks = this.handleSortTasks.bind(this);
    this.handleFilterTasks = this.handleFilterTasks.bind(this);
  }
  componentDidMount() {
    const { q, pagination } = this.props;
    const pagi = qs.stringify(pagination);
    console.log(`${url}?${pagi}`);
    handleAxios(`${url}?${pagi}`, "GET")
      .then((res) => {
        this.setState({
          tasks: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const query = qs.stringify(nextProps);
      handleAxios(`${url}?${query}`, "GET")
        .then((res) => {
          this.setState({
            tasks: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  stringRandom() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  createID() {
    return (
      this.stringRandom() +
      this.stringRandom() +
      this.stringRandom() +
      "-" +
      this.stringRandom() +
      this.stringRandom() +
      this.stringRandom() +
      "-" +
      this.stringRandom()
    );
  }
  findindex(id) {
    return this.state.tasks.findIndex((value) => {
      return value.id === id;
    });
  }
  addTasks(data) {
    data.id = this.createID();
    data.status = false;
    data.startTime = new Date().getTime();
    handleAxios(url, "POST", data);
    const newTasks = [...this.state.tasks];
    newTasks.push(data);
    this.setState({
      tasks: newTasks,
    });
    toast("Thêm thành công !!!");
  }
  onDeleteTask(data) {
    const index = this.findindex(data.id);
    handleAxios(`${url}/${data.id}`, "DELETE");
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks,
    });
    toast("Xóa thành công !!!");
  }
  handleToggleStatus(data) {
    this.setState({
      selectedID: data.id,
    });
    if (this.state.selectedID === data.id) {
      const index = this.findindex(data.id);
      handleAxios(`${url}/${data.id}`, "PUT", {
        ...data,
        status: !data.status,
      });
      const newTasks = [...this.state.tasks];
      newTasks[index].status = !newTasks[index].status;
      this.setState({
        tasks: newTasks,
      });
      toast("Cập nhật thành công !!!");
      this.setState({
        selectedID: null,
      });
    }
  }
  updateTask(data) {
    data.startTime = new Date().getTime();
    const index = this.findindex(data.id);
    handleAxios(`${url}/${data.id}`, "PUT", data);
    const newTasks = [...this.state.tasks];
    newTasks[index] = data;
    this.setState({
      tasks: newTasks,
    });
    toast("Cập nhật thành công !!!");
  }
  handleSortTasks(e) {
    console.log("Sort");
    this.setState({
      sortTasks: e.target.value,
    });
  }
  handleFilterTasks(e) {
    this.setState({
      filterTasks: Number(e.target.value),
    });
  }
  render() {
    let { sortTasks, tasks, filterTasks } = this.state;

    if (filterTasks === 0) {
      tasks = tasks.filter((value) => {
        return value;
      });
    }
    if (filterTasks === 1) {
      tasks = tasks.filter((value) => {
        return value.status === true;
      });
    }
    if (filterTasks === -1) {
      tasks = tasks.filter((value) => {
        return value.status === false;
      });
    }
    if (sortTasks === "A") {
      console.log("hello");
      tasks = tasks.sort((a, b) => {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    }
    return (
      <div>
        <TaskForm
          addTasks={this.addTasks}
          sortTasks={sortTasks}
          handleSortTasks={this.handleSortTasks}
          filterTasks={filterTasks}
          handleFilterTasks={this.handleFilterTasks}
        />
        <TaskListContainer
          tasks={tasks}
          handleOnDeleteTask={this.onDeleteTask}
          handleToggleStatus={this.handleToggleStatus}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}
export default TaskWrap;
