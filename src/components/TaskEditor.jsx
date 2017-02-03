var React = require('react');

require('./TaskEditor.css');

var TaskEditor = React.createClass({
  getInitialState: function () {
    return {
      inputText: ''
    }
  },

  getTask: function () {
    if (this.state.inputText) {
      this.props.add(this.state.inputText);
      this.setState({ inputText: '' });
    }  
  },

  changeInput: function (e) {
    this.setState({ inputText: e.target.value })
  },

  render: function () {
    return (
      <div className="header">
        <h2>My To Do List</h2>
        <input
          value={this.state.inputText}
          onChange={this.changeInput}
          type="text"
          placeholder="Title..."/>
        <span
          className="addBtn"
          onClick={this.getTask}
          >Add</span>
      </div>
    )
  }
});

module.exports = TaskEditor;