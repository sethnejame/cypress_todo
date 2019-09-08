import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { saveTodo } from "../lib/service";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: "",
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); // prevents page reload and the form submitting via GET
    const newTodo = {name: this.state.currentTodo, isComplete: false}
    saveTodo(newTodo)
      .then(({data}) => this.setState({
        todos: this.state.todos.concat(data)
      }))
  }

  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm
              currentTodo={this.state.currentTodo}
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
