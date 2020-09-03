import React, {Component} from 'react'
import Game from "../component/game";
import Chat from "../component/chat";
import styles from "../styles/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { auth } from "./services/firebase";

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      showChat: false,
    };
    this.toggleChat = this.toggleChat.bind(this)
  }

  toggleChat() {
    console.log('working')
    this.setState({showChat: !this.state.showChat})
  }

  render() {
    return (
      <div className={styles.gridContainer}>
        <Game></Game>
        <FontAwesomeIcon
          onClick={this.toggleChat}
          className={styles.chatToggle}
          icon={faComments}
          size="4x"
        />
       {this.state.showChat && <Chat toggleChat={this.toggleChat} />}
      </div>
    );
  }
}

export default GamePage;