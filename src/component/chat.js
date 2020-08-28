import React, { Component } from "react";
import styles from "../styles/chat.module.css";

class Chat extends Component {
    render() {
        return (
            <div
                className={styles.chatContainer}>
                <div className={styles.header}></div>
                <div className={styles.messages}></div>
                <div className={styles.chatInput}></div>
            </div>
        )
    }
};

export default Chat;