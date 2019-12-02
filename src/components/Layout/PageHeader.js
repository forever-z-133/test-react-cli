import React from "react";
import Component from "components/index";
import { Link } from "react-router-dom";

export default class PageHeader extends Component {
  render() {
    return (
      <div className="flex-row gap-right-20">
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    );
  }
}
