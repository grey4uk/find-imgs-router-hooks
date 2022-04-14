import { Component } from 'react';

class Button extends Component {
  state = { title: '', array: [1, 2, 3] };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps>>>');
    return {
      ...prevState,
      title: prevState.title || nextProps.title,
    };
  }

  componentDidMount() {
    console.log('componentDidMount>>>>>>');
    //       this.setState({ title: this.props.title });
  }

  sum = () =>
    this.state.array.reduce((acc, el) => acc + el);

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate>>>');

    //     console.log('nextProps>>>', nextProps);
    //     console.log('nextState', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate______');
    console.log('prevProps :>> ', prevProps);
    console.log('prevState :>> ', prevState);
    return this.sum();
  }

  componentDidUpdate(prevProps, prevState, shot) {
    //     console.log('shot :>> ', shot);

    console.log('componentDidUpdate++++++++');

    if (this.props.title !== prevProps.title) {
      this.setState({ title: this.props.title });
      //       console.log('PROPS :>> ', this.props.title);
      //       console.log('PROPS :>> ', prevProps.title);
    }

    if (prevState.title !== this.state.title) {
      this.setState({ title: this.state.title });
      //       console.log('STATE :>> ', this.state.title);
      //       console.log('STATE :>> ', prevState.title);
    }
  }

  render() {
    const { title, pet } = this.state;
    return (
      <button
        type='button'
        onClick={() => this.setState({ title: 'Show' })}>
        Button: {title}({pet.length})
      </button>
    );
  }
}

export default Button;
