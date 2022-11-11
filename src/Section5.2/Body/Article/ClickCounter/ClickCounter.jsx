import React from "react";
import './ClickCounter.css'

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClickPlus = (data) => (e) => {
        this.setState({count: this.state.count + 1})
    };

    handleClickMinus = (data) => (e) => {
        if (this.state.count > 0)
            this.setState({count: this.state.count - 1});
        else this.setState({count: this.state.count = 0});
    };

    render() {
        return (
            <div id="click">
                <div id="minus-btn" onClick={this.handleClickMinus('data text')}>—</div>
                <div id="result">{this.state.count}</div>
                <div id="plus-btn" onClick={this.handleClickPlus('data text')}>+</div>

            </div>
        )
    }
}

export default ClickCounter;