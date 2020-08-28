import React, { Component } from "react";
import Game from "./game";
import Chat from "./chat";
import styles from "../styles/app.module.css";

class App extends Component {
    render() {
        return (
            <div className={styles.gridContainer}>
                <Game />
                <Chat />
            </div>
        );
    }
}



export default App;

