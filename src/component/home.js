import React, {Component} from 'react'
import Game from "./game";
import Chat from "./chat";
import styles from "../styles/app.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
// import { auth } from "./services/firebase";

class Home extends Component {
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