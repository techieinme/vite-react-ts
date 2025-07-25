import { Component, type ReactNode } from 'react';

type messageProps = {
  message: string;
};

type stateProps = {
  count: number;
};

export class Counter extends Component<messageProps, stateProps> {
  state = {
    count: 0,
  };

  handleClick = () => {
    console.log('handle click');

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Counter</button>
        {this.props.message} - {this.state.count}
      </div>
    );
  }
}
