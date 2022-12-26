import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.classes} type="submit">
        {this.props.icon ? (
          <img className="icon" src={this.props.icon} alt="icon" />
        ) : (
          ""
        )}
        {this.props.text}
      </button>
    );
  }
}
