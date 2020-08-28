import React, { Component } from "react";
import Game from "./game";
import Chat from "./chat";

class App extends Component {
    render() {
        return (
            <div>
                <Game />
                <Chat />
            </div>
        );
    }
}



export default App;

