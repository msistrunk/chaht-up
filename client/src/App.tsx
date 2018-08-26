import React from 'react';
import axios from 'axios';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: 'Fetching...',
    };
  }

  componentDidMount() {
    axios.get('./api')
      .then(res => this.setState({ data: res.data.message }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data}
      </div>
    );
  }
}

export default App;
