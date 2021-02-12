import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Ed Charboneau",
        username: "EDC",
        image: "data:image/jpeg;base64,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",
        friendList: ["Leo"]
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }

  componentDidMount = async () => {
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");

    const friends = [
      friendOne.data.results[0],
      friendTwo.data.results[0],
      friendThree.data.results[0],
      friendFour.data.results[0],
      friendFive.data.results[0]
    ];

  
    this.setState({
      potentialFriends: friends,
      apiDataLoaded: true
    })
  }


  render() {
    return (
      <div className="App">
        <h1>EdsBook</h1>
        <Profile user={this.state.user} />
        <FriendsPage potentialFriends={this.state.potentialFriends} />
      </div>
    );
  }
}
export default App;