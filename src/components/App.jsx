import { Component } from 'react';
import Button from './Button/Button';

export class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={value:props}
  // }

  state = { value: 'placeholder', hasError: '' };

  componentWillUnmount() {
    alert('unmount!!!');
  }

  componentDidCatch(error, info) {
    console.log('error :>> ', error);
    console.log('info :>> ', info);
    // Если метод был вызван значит есть ошибка!
    // Устанавливаем состояние
    const errArray = info.componentStack.split(' ');
    const componentIdx = errArray.findIndex(
      (el) => el === 'at'
    );

    this.setState({
      hasError: `Trouble in component>>> ${
        errArray[componentIdx + 1]
      } <<<<`,
    });
    // Также можно отправить отчет об ошибке вашему аналитическому сервису
    // logErrorToMyService(error, info);
  }

  render() {
    const { value, hasError } = this.state;
    return (
      <>
        {hasError ? (
          <>
            <p>Somthing wrong...</p>
            <p>{hasError}</p>
          </>
        ) : (
          <>
            <h1>HELLO!!!</h1>
            <Button title={value} />
            <button
              onClick={() =>
                this.setState({ value: 'show alert' })
              }>
              APP: SET TITLE
            </button>
          </>
        )}
      </>
    );
  }
}
