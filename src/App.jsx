import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App-title">Music Machine</div>
                <div>
                    <input placeholder="search an artist for now"/>
                    <button>button</button>
                </div>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;