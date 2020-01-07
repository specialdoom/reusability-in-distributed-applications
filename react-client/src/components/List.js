import React from 'react';

import server from '../apis/server';

class List extends React.Component {
  state = { tasks: [] };
  componentDidMount() {
    server.get('/tasks').then(res => {
      this.setState({ tasks: res.data });
    });
  }

  renderTasks = () => {
    return this.state.tasks.map(element => {
      return <div key={element._id}>{element.title}</div>;
    });
  };
  render() {
    return <div>{this.renderTasks()}</div>;
  }
}

export default List;
