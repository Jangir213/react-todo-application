var React = require('react');

require('./Task.css');

var Task = React.createClass({
  getInitialState: function () {
    return {
      check: '',
      del: false
    }
  },

  checked: function (e) {
    this.setState({ check: this.state.check == 'checked' ? '' : 'checked' });
  },

  delete: function (e) {
    e.stopPropagation();
    this.setState({ del: true });
  },

  render: function () {
    return this.state.del ? false :
      (<li className={this.state.check} onClick={this.checked}>
        {this.props.text}
        <span className='close' onClick={this.delete}>×</span>
      </li>);
  }
});

module.exports = Task;