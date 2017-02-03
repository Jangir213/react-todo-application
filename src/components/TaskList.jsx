var React = require('react');

var Task = require('./Task.jsx');

require('./TaskList.css');


var TaskList = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.tasks.map(function (v, i) {
            return <Task key={i} text={v} />
          })
        }
      </ul>
    )
  }
});

module.exports = TaskList;