import React, { Component } from "react";
import "./SearchTasks.css";
import imgSearch from "../../accsets/img/search-white.png";
class SearchTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
  }
  handleOnChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnSearch(e) {
    e.preventDefault();
    const { changeApiFilterTasks } = this.props;
    changeApiFilterTasks(this.state);
  }
  render() {
    const { q } = this.state;
    return (
      <div className="SearchTasks">
        <form onSubmit={this.handleOnSearch}>
          <input
            type="text"
            className="SearchTasks__input"
            placeholder="Tìm Kiếm ..."
            name="q"
            value={q}
            onChange={this.handleOnChange}
          />
          <img src={imgSearch} className="SearchTasks__img" />
        </form>
      </div>
    );
  }
}
export default SearchTasks;
