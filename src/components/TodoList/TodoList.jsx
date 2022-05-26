import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              {item.text}{" "}
              <button onClick={this.props.onDelete.bind(null, item.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
