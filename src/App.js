import './App.css';
import React from 'react';
import me from './me.jpg';

class App extends React.Component {
  state = {
    Person: {
      fullName : "Achref Najeh",
      bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      imgSrc : me,
      profession : "voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    show : false,
    counter : 0
  };
  handleShowPortfolio = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <button className="btn" onClick={this.handleShowPortfolio}>OPEN PROFILE</button><br/>
        {this.state.show ? (
          <div className="content">
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1><span>Full Name : </span>{this.state.Person.fullName}</h1>
            <h4><span>Bio :</span> {this.state.Person.bio}</h4>
            <h4><span>Profession :</span> {this.state.Person.profession}</h4>
            <br></br>
          </div>
        ) : ('')}
        <p className="counter">{this.state.counter}</p>
      </div>
    );
  }
}

export default App;