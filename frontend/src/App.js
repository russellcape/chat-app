import React, { Component } from 'react';
import ChatMessage from './Components/ChatMessage'
import SignUp from './Components/SignUp'
// import { default as Chatkit } from '@pusher/chatkit-server';

// const chatkit = new Chatkit({
//   instanceLocator: "YOUR INSTANCE LOCATOR",
//   key: "YOUR SECRET KEY"
// })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: "",
      currentId: "",
      currentView: "signup"
    }
    // this.changeView = this.changeView.bind(this);
    // this.createUser = this.createUser.bind(this);
  }

  // createUser(username) {
  //   chatkit.createUser({
  //     id: username,
  //     name: username
  //   })
  //   .then((currentUser) => {
  //     this.setState({
  //       currentUsername: username,
  //       currentId: username,
  //       currentView: "chatApp"
  //     })
  //   }).cathch((error) => {
  //     if (error.status === 400) {
  //       this.setState({
  //         currentUsername: username,
  //         currentId: username,
  //         currentView: "chatApp"
  //       })
  //     } else {
  //       console.log(error.status);
  //     }
  //   });
  // }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    let view = "";
    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView}/>
    } 
    else if (this.state.currentView === "signup") {
      view = <SignUp />
    }
    else if (this.state.currentView === "chatApp") {
      view = <h1>The chatApp will go here</h1>
    }
    return (
      <div className='App'>
        {view}
      </div>
    );
  }
}

export default App;