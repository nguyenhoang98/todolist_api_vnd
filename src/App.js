import React, { Component } from "react";
import "./App.css";
import SearchTasks from "./Components/SearchTasks/SearchTasks";
import Clock from "./Components/Clock/Clock";
import TaskWrap from "./Components/TaskWrap/TaskWrap";
import { ToastContainer } from "react-toastify";
import Pagination from "./Components/Pagination/Pagination";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      pagination: {
        _page: 1,
        _limit: 6,
      },
    };
    this.changeApiFilterTasks = this.changeApiFilterTasks.bind(this);
  }
  changeApiFilterTasks(data) {
    this.setState({
      q: data.q,
    });
  }
  render() {
    const { q, pagination } = this.state;
    return (
      <div className="app">
        <Clock />
        <SearchTasks changeApiFilterTasks={this.changeApiFilterTasks} />
        <TaskWrap q={q} pagination={pagination} />
        <ToastContainer />
        <Pagination />
      </div>
    );
  }
}
export default App;
