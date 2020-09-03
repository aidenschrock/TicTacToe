import React, { Component } from "react";
import styles from "../styles/chat.module.css";
// import {auth, db} from "../service/firebase";

class Chat extends Component {

  constructor(props) {
      super(props);
  }

    render() {
        return (
            <div className={styles.chatContainer}>
                <div className={styles.header}>
                    <button onClick={this.props.toggleChat}>X</button>
                    <h2>TIC TAC CHAT</h2>
                </div>
                <div className={styles.messages}></div>
                <div className={styles.chatInput}></div>
            </div>
        )
    }
    
};

export default Chat;
