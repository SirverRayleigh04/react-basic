import React, { Fragment } from "react";

class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        name: 'Liberty',
        firstName: 'Nguyễn',
        sex: '[]'
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
    }

    render() {
        return (
            <>
                <div className="First">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    My name is {this.state['name']}
                </div>
                <div className="second">
                    {this.state['firstName']}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;