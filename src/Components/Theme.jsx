import { Component } from 'react';
import './Theme.css';

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
    this.handleButton = this.handleButton.bind(this);
  }

  render() {
    return (
      <>
        <h1>Actual theme is {this.state.theme}</h1>
        <button onClick={this.handleButton}>Change theme!</button>
      </>
    )
  }

  handleButton() {
    if(this.state.theme === 'light') {
      this.setState({theme: 'dark'});
      document.body.classList.add("darkTheme");  
    } else {
      this.setState({theme: 'light'});
      document.body.classList.remove("darkTheme");
    }
  }
}

export default Theme;