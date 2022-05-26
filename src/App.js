import React from "react";
import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }

  handleDelete(itemId) {
    const filteredState = this.state.items.filter((item) => item.id !== itemId);
    this.setState({ items: filteredState });
  }

  render() {
    return (
      <div className="App">
        <h3>TODO APP</h3>
        <AddForm
          onAddHandler={this.handleSubmit}
          state={this.state}
          onChangeHandler={this.handleChange}
        />
        <TodoList items={this.state.items} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default TodoApp;
