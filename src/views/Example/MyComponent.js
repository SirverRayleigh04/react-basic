import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    /*
    JSX => return block
    */
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'Developers', salary: '500 $' },
            { id: 'job2', title: 'Testers', salary: '750 $' },
            { id: 'job3', title: 'Prorject managers', salary: '1000 $' }
        ]
    }
    handleChangeFirstname = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(event)
        alert('Click me')
        console.log('>>check data input: ', this.state)
    }
    render() {
        //console.log('>>Call render: ', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstname(event)}
                    /><br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />

                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent
                    name={'Ramboo'}
                    age={'20'}
                    address={'Bac Ninh'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;