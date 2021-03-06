import React, {Component} from 'react'
import Game from "../component/game";
import Chat from "../component/chat";
import styles from "../styles/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { auth } from "./services/firebase";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showChat: false,
    };
  }

  render() {
    return (
      <div className={styles.gridContainer}>
        <Game></Game>
        <FontAwesomeIcon
          onClick={() => this.setState({ showChat: !this.state.showChat })}
          className={styles.chatToggle}
          icon={faComments}
          size="4x"
        />
        {this.state.showChat && <Chat />}
      </div>
    );
  }
}

export default Home;