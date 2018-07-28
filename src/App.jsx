import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''
        }
    }

    changeDeadLine() {
        const { newDeadline } = this.state;
        this.setState({ deadline: newDeadline});
    }

    render() {
        const { deadline } = this.state;
        return (
            <div className='App'>
                <div className='App-title'>Countdown to {deadline}</div>
                <Clock deadline={deadline}/>
                <div>
                    <input onChange={event => this.setState({ newDeadline: event.target.value })} placeholder="new date" />
                    <button onClick={() => this.changeDeadLine()}>Submit</button>
                </div>                
            </div>
                );
    }
}

export default App;
