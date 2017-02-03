var React = require('react');

var TaskEditor = require('./TaskEditor.jsx');
var TaskList = require('./TaskList.jsx');

require('./TaskApp.css');

var tasks = [
  'Hit the gym',
  'Pay bills',
  'Meet George',
  'Buy eggs',
  'Read a book',
  'Organize office'
];

var TaskApp = React.createClass({
  getInitialState: function () {
    return {
      allTasks: tasks
    }
  },

  addTask: function (task) {
    var tmp = this.state.allTasks;
    tmp.unshift(task);
    this.setState({ allTasks: tmp });
  },

  render: function () {
    return (
      <div>
        <TaskEditor add={this.addTask} />
        <TaskList tasks={this.state.allTasks} />
      </div>
    )
  }
});

module.exports = TaskApp;