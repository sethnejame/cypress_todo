import React from "react";

const TodoForm = props => {
  const { onChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={props.currentTodo}
        onChange={onChange}
      />
    </form>
  );
};
export default TodoForm;
