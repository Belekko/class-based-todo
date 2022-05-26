import React, { Component } from "react";

export default class AddForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAddHandler}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.props.onChangeHandler}
            value={this.props.state.text}
          />
          <button>Add #{this.props.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}
