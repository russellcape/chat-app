import React, { Component } from 'react';
import ChatMessage from './Components/ChatMessage'
import SignUp from "./Components/SignUp"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "ChatMessage"
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({
      currentView: view
    })
  }
  render() {
    let view = '';
    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView}/>
    } 
    else if (this.state.currentView === "signup") {
      view = <SignUp />
    }
    return (
      <div className='App'>
        {view}
      </div>
    );
  }
}

export default App;