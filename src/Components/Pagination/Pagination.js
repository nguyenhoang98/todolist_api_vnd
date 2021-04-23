import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { changePage } = this.props;
    return (
      <div className="pagination">
        <a href="#" className="pagination__prev" onClick={() => changePage(-1)}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        <a href="#" className="pagination__next" onClick={() => changePage(1)}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default Pagination;
